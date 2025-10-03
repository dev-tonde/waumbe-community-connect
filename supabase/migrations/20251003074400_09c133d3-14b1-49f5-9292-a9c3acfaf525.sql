-- Ensure RLS is enabled on contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Allow public insert" ON public.contact_submissions;
DROP POLICY IF EXISTS "Staff can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Staff can update contact submission status" ON public.contact_submissions;

-- Allow public to submit contact forms (INSERT only)
CREATE POLICY "Allow public insert"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Restrict SELECT to staff and admin only
CREATE POLICY "Staff can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (is_staff_or_admin(auth.uid()));

-- Allow staff/admin to update submission status
CREATE POLICY "Staff can update contact submission status"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (is_staff_or_admin(auth.uid()))
WITH CHECK (is_staff_or_admin(auth.uid()));

-- Prevent deletion by anyone except admins
CREATE POLICY "Only admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));