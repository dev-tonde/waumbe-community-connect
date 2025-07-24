-- Create tables for engagement forms

-- Table for learnership applications
CREATE TABLE public.learnership_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  age INTEGER,
  education_level TEXT,
  program_interest TEXT NOT NULL,
  motivation TEXT NOT NULL,
  previous_experience TEXT,
  availability TEXT,
  emergency_contact TEXT,
  emergency_phone TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table for company partnership requests
CREATE TABLE public.partnership_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_size TEXT,
  industry TEXT,
  partnership_type TEXT NOT NULL,
  proposed_contribution TEXT,
  goals TEXT NOT NULL,
  timeline TEXT,
  budget_range TEXT,
  additional_info TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table for donations to track PayFast transactions
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'ZAR',
  cause TEXT,
  message TEXT,
  payment_id TEXT,
  merchant_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  payment_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table for gallery items with filtering capabilities
CREATE TABLE public.gallery_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL,
  event_date DATE,
  location TEXT,
  participants_count INTEGER,
  tags TEXT[],
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.learnership_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partnership_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

-- Create policies for learnership applications
CREATE POLICY "Users can create learnership applications" 
ON public.learnership_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own applications" 
ON public.learnership_applications 
FOR SELECT 
USING (user_id = auth.uid() OR auth.uid() IS NULL);

CREATE POLICY "Admins can manage applications" 
ON public.learnership_applications 
FOR ALL 
USING (is_admin());

-- Create policies for partnership requests
CREATE POLICY "Users can create partnership requests" 
ON public.partnership_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own requests" 
ON public.partnership_requests 
FOR SELECT 
USING (user_id = auth.uid() OR auth.uid() IS NULL);

CREATE POLICY "Admins can manage partnership requests" 
ON public.partnership_requests 
FOR ALL 
USING (is_admin());

-- Create policies for donations
CREATE POLICY "Users can create donations" 
ON public.donations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own donations" 
ON public.donations 
FOR SELECT 
USING (user_id = auth.uid() OR auth.uid() IS NULL);

CREATE POLICY "Admins can manage donations" 
ON public.donations 
FOR ALL 
USING (is_admin());

-- Create policies for gallery items
CREATE POLICY "Anyone can view published gallery items" 
ON public.gallery_items 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Admins can manage gallery items" 
ON public.gallery_items 
FOR ALL 
USING (is_admin());

-- Add triggers for updated_at
CREATE TRIGGER update_learnership_applications_updated_at
BEFORE UPDATE ON public.learnership_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_partnership_requests_updated_at
BEFORE UPDATE ON public.partnership_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_items_updated_at
BEFORE UPDATE ON public.gallery_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample gallery data with categories
INSERT INTO public.gallery_items (title, description, category, event_date, location, participants_count, tags) VALUES
('Community Workshop', 'Skills development workshop focusing on digital literacy', 'Workshops', '2024-03-15', 'Fisantekraal Community Center', 45, ARRAY['digital-literacy', 'skills-development']),
('Youth Graduation Ceremony', 'Celebrating successful completion of our entrepreneurship program', 'Graduations', '2024-02-20', 'Waumbe Training Center', 30, ARRAY['entrepreneurship', 'graduation']),
('Community Garden Project', 'Building sustainable food gardens with community members', 'Community Projects', '2024-01-10', 'Local School Grounds', 60, ARRAY['sustainability', 'community']),
('Annual Fundraising Gala', 'Our biggest fundraising event of the year', 'Fundraising', '2023-12-05', 'Cape Town Convention Centre', 200, ARRAY['fundraising', 'gala']),
('Back to School Drive', 'Providing school supplies and uniforms to students in need', 'Educational Programs', '2024-01-25', 'Multiple Schools', 500, ARRAY['education', 'school-supplies']),
('Mentorship Program Launch', 'Connecting youth with experienced professionals', 'Educational Programs', '2023-11-15', 'Community Hall', 80, ARRAY['mentorship', 'professional-development']);