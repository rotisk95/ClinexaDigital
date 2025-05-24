import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import FamilyCareCaseStudy from "@/pages/FamilyCareCaseStudy";
import SunshinePediatricsCaseStudy from "@/pages/SunshinePediatricsCaseStudy";
import LakesideDentalCaseStudy from "@/pages/LakesideDentalCaseStudy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study/family-care" component={FamilyCareCaseStudy} />
      <Route path="/case-study/sunshine-pediatrics" component={SunshinePediatricsCaseStudy} />
      <Route path="/case-study/lakeside-dental" component={LakesideDentalCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
