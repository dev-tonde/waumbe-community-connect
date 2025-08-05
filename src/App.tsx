import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Create a simple test component first
const TestComponent = () => {
  return <div>Test Component Works!</div>;
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<TestComponent />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
