import React from 'react';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <h1 className="text-4xl font-bold">Step 1: Added BrowserRouter</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;