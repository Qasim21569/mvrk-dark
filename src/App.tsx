import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { pageview, initScrollDepthTracking } from "@/lib/analytics";

const queryClient = new QueryClient();

// Route change tracking component
const RouteChangeTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track pageview with Google Analytics
    pageview(location.pathname + location.search);
  }, [location]);
  
  // Initialize scroll depth tracking once on mount
  useEffect(() => {
    initScrollDepthTracking();
  }, []);
  
  return null;
};

// App with analytics
const AppWithAnalytics = () => {
  return (
    <>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppWithAnalytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
