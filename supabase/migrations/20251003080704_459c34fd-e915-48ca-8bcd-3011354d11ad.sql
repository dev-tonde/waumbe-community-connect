-- =====================================================
-- CRITICAL SECURITY FIX: Privilege Escalation Prevention
-- =====================================================
-- This migration fixes a critical security vulnerability where users
-- could escalate their own privileges to admin by updating the role
-- column in the profiles table.

-- Step 1: Create user_roles table (app_role enum already exists)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Step 2: Migrate existing role data from profiles to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT id, role FROM public.profiles
WHERE role IS NOT NULL
ON CONFLICT (user_id, role) DO NOTHING;

-- Step 3: Update security definer functions to use user_roles table
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = is_admin.user_id 
    AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_staff_or_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = is_staff_or_admin.user_id 
    AND role IN ('admin', 'staff')
  );
$$;

-- Step 4: Create RLS policies for user_roles table
-- Block anonymous access
CREATE POLICY "Block anonymous access to user_roles"
ON public.user_roles
FOR SELECT
TO anon
USING (false);

-- Allow authenticated users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow admins to view all roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (is_admin(auth.uid()));

-- Only admins can insert roles
CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (is_admin(auth.uid()));

-- Only admins can update roles
CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

-- Only admins can delete roles
CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));

-- Step 5: Update profiles table UPDATE policies
-- Drop the existing update policies
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile name" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

-- Users can update their own profile (but application should only send full_name updates)
-- The role column will be removed in a future migration
CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Admins can update all profile fields
CREATE POLICY "Admins can update all profiles"
ON public.profiles
FOR UPDATE
TO authenticated
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

-- Step 6: Create trigger to prevent non-admins from changing email/role on profiles
CREATE OR REPLACE FUNCTION public.protect_profile_fields()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Allow admins to update anything
  IF is_admin(auth.uid()) THEN
    RETURN NEW;
  END IF;
  
  -- Non-admins cannot change email or role
  IF OLD.email IS DISTINCT FROM NEW.email THEN
    RAISE EXCEPTION 'Users cannot change their email address';
  END IF;
  
  IF OLD.role IS DISTINCT FROM NEW.role THEN
    RAISE EXCEPTION 'Users cannot change their role';
  END IF;
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER protect_profile_fields_trigger
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.protect_profile_fields();

-- Step 7: Create trigger for user_roles updated_at
CREATE OR REPLACE FUNCTION public.update_user_roles_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_user_roles_timestamp
BEFORE UPDATE ON public.user_roles
FOR EACH ROW
EXECUTE FUNCTION public.update_user_roles_updated_at();

-- =====================================================
-- PHASE 2: Add Explicit Anonymous Blocking Policies
-- =====================================================

-- Add explicit anon blocking to contact_submissions
CREATE POLICY "Block anonymous read access to contact_submissions"
ON public.contact_submissions
FOR SELECT
TO anon
USING (false);

-- Add explicit anon blocking to course_applications
CREATE POLICY "Block anonymous read access to course_applications"
ON public.course_applications
FOR SELECT
TO anon
USING (false);

-- Add explicit anon blocking to learnership_applications
CREATE POLICY "Block anonymous read access to learnership_applications"
ON public.learnership_applications
FOR SELECT
TO anon
USING (false);

-- Add explicit anon blocking to partnership_requests
CREATE POLICY "Block anonymous read access to partnership_requests"
ON public.partnership_requests
FOR SELECT
TO anon
USING (false);

-- =====================================================
-- PHASE 3: Additional Security Hardening
-- =====================================================

-- Ensure DELETE policies exist for all sensitive tables
DROP POLICY IF EXISTS "Only admins can delete contact submissions" ON public.contact_submissions;
CREATE POLICY "Only admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));

DROP POLICY IF EXISTS "Only admins can delete course applications" ON public.course_applications;
CREATE POLICY "Only admins can delete course applications"
ON public.course_applications
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));

DROP POLICY IF EXISTS "Only admins can delete learnership applications" ON public.learnership_applications;
CREATE POLICY "Only admins can delete learnership applications"
ON public.learnership_applications
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));

DROP POLICY IF EXISTS "Only admins can delete partnership requests" ON public.partnership_requests;
CREATE POLICY "Only admins can delete partnership requests"
ON public.partnership_requests
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));