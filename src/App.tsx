import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";

// Lazy-loaded layout & pages
const Layout = lazy(() => import("@/components/Layout"));
const EntrepreneurshipLayout = lazy(
  () => import("@/components/EntrepreneurshipLayout")
);
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Programs = lazy(() => import("@/pages/Programs"));
const Contact = lazy(() => import("@/pages/Contact"));
const Team = lazy(() => import("@/pages/Team"));
const Partners = lazy(() => import("@/pages/Partners"));
const Donate = lazy(() => import("@/pages/Donate"));
const Volunteer = lazy(() => import("@/pages/Volunteer"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const ShareTestimonial = lazy(() => import("@/pages/ShareTestimonial"));
const FinancialReports = lazy(() => import("@/pages/FinancialReports"));
const Governance = lazy(() => import("@/pages/Governance"));
const CoreSteeringGroup = lazy(() => import("@/pages/CoreSteeringGroup"));
const Entrepreneurship = lazy(() => import("@/pages/Entrepreneurship"));
const Auth = lazy(() => import("@/pages/Auth"));
const Admin = lazy(() => import("@/pages/Admin"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const ProgramsCourses = lazy(() => import("@/pages/programs/Courses"));
const ProgramsLearnerships = lazy(
  () => import("@/pages/programs/Learnerships")
);
const ProgramsSkills = lazy(() => import("@/pages/programs/SkillsDevelopment"));
const ProgramsVolunteer = lazy(() => import("@/pages/programs/Volunteer"));
const ProgramsEntrepreneurship = lazy(
  () => import("@/pages/programs/Entrepreneurship")
);

const EntCourses = lazy(() => import("@/pages/entrepreneurship/Courses"));
const EntLearnership = lazy(
  () => import("@/pages/entrepreneurship/Learnership")
);
const EntFundraising = lazy(
  () => import("@/pages/entrepreneurship/Fundraising")
);
const EntContact = lazy(() => import("@/pages/entrepreneurship/Contact"));
const EntDonate = lazy(() => import("@/pages/entrepreneurship/Donate"));

const TestimonialDetail = lazy(
  () => import("@/pages/testimonials/TestimonialDetail")
);

// Programs subpages
const AcademicDevelopment = lazy(
  () => import("@/pages/programs/AcademicDevelopment")
);
const ProgramCourses = lazy(() => import("@/pages/programs/Courses"));
const ProgramEntrepreneurship = lazy(
  () => import("@/pages/programs/Entrepreneurship")
);
const Learnerships = lazy(() => import("@/pages/programs/Learnerships"));
const SkillsDevelopment = lazy(
  () => import("@/pages/programs/SkillsDevelopment")
);
const SocietalReformation = lazy(
  () => import("@/pages/programs/SocietalReformation")
);
const ProgramVolunteer = lazy(() => import("@/pages/programs/Volunteer"));

// Entrepreneurship subpages
const EntrepreneurshipCourses = lazy(
  () => import("@/pages/entrepreneurship/Courses")
);
const EntrepreneurshipLearnership = lazy(
  () => import("@/pages/entrepreneurship/Learnership")
);
const EntrepreneurshipFundraising = lazy(
  () => import("@/pages/entrepreneurship/Fundraising")
);
const EntrepreneurshipContact = lazy(
  () => import("@/pages/entrepreneurship/Contact")
);
const EntrepreneurshipDonate = lazy(
  () => import("@/pages/entrepreneurship/Donate")
);

// Testimonials subpages
const Awards = lazy(() => import("@/pages/testimonials/Awards"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // 1 min fresh
      gcTime: 5 * 60_000, // 5 min cache
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Loading() {
  return (
    <div role="status" aria-live="polite" className="p-6 text-sm">
      Loading…
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="programs" element={<Programs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="team" element={<Team />} />
                <Route path="partners" element={<Partners />} />
                <Route path="donate" element={<Donate />} />
                <Route path="volunteer" element={<Volunteer />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route
                  path="programs/academic-development"
                  element={<AcademicDevelopment />}
                />
                <Route
                  path="programs/societal-reformation"
                  element={<SocietalReformation />}
                />
                <Route
                  path="programs/societal-reform"
                  element={
                    <Navigate to="/programs/societal-reformation" replace />
                  }
                />
                <Route path="programs/courses" element={<ProgramsCourses />} />
                <Route
                  path="programs/learnerships"
                  element={<ProgramsLearnerships />}
                />
                <Route
                  path="programs/skills-development"
                  element={<ProgramsSkills />}
                />
                <Route
                  path="programs/volunteer"
                  element={<ProgramsVolunteer />}
                />
                <Route
                  path="programs/entrepreneurship"
                  element={<ProgramsEntrepreneurship />}
                />
                <Route
                  path="testimonials/share"
                  element={<ShareTestimonial />}
                />
                <Route
                  path="financial-reports"
                  element={<FinancialReports />}
                />
                <Route path="governance" element={<Governance />} />
                <Route
                  path="core-steering-group"
                  element={<CoreSteeringGroup />}
                />
                <Route path="entrepreneurship" element={<Entrepreneurship />} />
                {/* entrepreneurship subroutes */}
                <Route
                  path="entrepreneurship/courses"
                  element={<EntCourses />}
                />
                <Route
                  path="entrepreneurship/learnership"
                  element={<EntLearnership />}
                />
                <Route
                  path="entrepreneurship/fundraising"
                  element={<EntFundraising />}
                />
                <Route
                  path="entrepreneurship/contact"
                  element={<EntContact />}
                />
                <Route path="entrepreneurship/donate" element={<EntDonate />} />

                {/* testimonials extras */}
                <Route path="testimonials/awards" element={<Awards />} />
                <Route
                  path="testimonials/:slug"
                  element={<TestimonialDetail />}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
