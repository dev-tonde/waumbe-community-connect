import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy-loaded layout & pages
const Layout = lazy(() => import("@/components/Layout"));
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
const NotFound = lazy(() => import("@/pages/NotFound"));

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
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
