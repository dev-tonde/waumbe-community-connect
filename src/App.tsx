import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <h1 className="text-4xl font-bold">Step 2: Added QueryClientProvider</h1>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;