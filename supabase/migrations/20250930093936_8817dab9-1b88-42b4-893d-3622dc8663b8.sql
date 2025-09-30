-- ============================================
-- SECURITY FIX: Admin Authentication & RLS Policies
-- ============================================

-- 1. Create user roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'user');

-- 2. Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = user_id AND role = 'admin'
  );
$$;

-- 4. Create security definer function to check staff or admin role
CREATE OR REPLACE FUNCTION public.is_staff_or_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = user_id AND role IN ('admin', 'staff')
  );
$$;

-- 5. RLS Policies for profiles table
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON public.profiles
  FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update all profiles"
  ON public.profiles
  FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- 6. Create trigger to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 7. Add admin-only SELECT policies for sensitive tables
-- Contact Submissions
CREATE POLICY "Staff can view contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (public.is_staff_or_admin(auth.uid()));

-- Course Applications
CREATE POLICY "Staff can view course applications"
  ON public.course_applications
  FOR SELECT
  USING (public.is_staff_or_admin(auth.uid()));

-- Learnership Applications
CREATE POLICY "Staff can view learnership applications"
  ON public.learnership_applications
  FOR SELECT
  USING (public.is_staff_or_admin(auth.uid()));

-- Partnership Requests
CREATE POLICY "Staff can view partnership requests"
  ON public.partnership_requests
  FOR SELECT
  USING (public.is_staff_or_admin(auth.uid()));

-- 8. Add UPDATE policies for staff to change status
CREATE POLICY "Staff can update contact submission status"
  ON public.contact_submissions
  FOR UPDATE
  USING (public.is_staff_or_admin(auth.uid()));

CREATE POLICY "Staff can update course application status"
  ON public.course_applications
  FOR UPDATE
  USING (public.is_staff_or_admin(auth.uid()));

CREATE POLICY "Staff can update learnership application status"
  ON public.learnership_applications
  FOR UPDATE
  USING (public.is_staff_or_admin(auth.uid()));

CREATE POLICY "Staff can update partnership request status"
  ON public.partnership_requests
  FOR UPDATE
  USING (public.is_staff_or_admin(auth.uid()));

-- 9. Create trigger for updated_at timestamp on profiles
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();