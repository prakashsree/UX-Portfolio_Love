import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyUniversalCart from "./pages/CaseStudyUniversalCart";
import CaseStudyDeviceSetup from "./pages/CaseStudyDeviceSetup";
import CaseStudyPOC from "./pages/CaseStudyPOC";
import CaseStudyBCSP from "./pages/CaseStudyBCSP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/universal-cart" element={<CaseStudyUniversalCart />} />
          <Route path="/case-study/device-setup" element={<CaseStudyDeviceSetup />} />
          <Route path="/case-study/poc-rfp" element={<CaseStudyPOC />} />
          <Route path="/case-study/bcsp-services" element={<CaseStudyBCSP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
