import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import WhatWeDo from "@/pages/what-we-do";
import Innovation from "@/pages/innovation";
import Projects from "@/pages/projects";
import KnowledgeHub from "@/pages/knowledge-hub";
import Media from "@/pages/media";
import Contact from "@/pages/contact";
import Synergia from "@/pages/collaborations/synergia";
import Orbitek from "@/pages/collaborations/orbitek";
import Novex from "@/pages/collaborations/novex";
import BlueCore from "@/pages/collaborations/bluecore";

function Router() {
  return (
    <WouterRouter base="/vaishvikvertex">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/what-we-do" component={WhatWeDo} />
        <Route path="/innovation" component={Innovation} />
        <Route path="/projects" component={Projects} />
        <Route path="/knowledge-hub" component={KnowledgeHub} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Route path="/collaborations/synergia" component={Synergia} />
        <Route path="/collaborations/orbitek" component={Orbitek} />
        <Route path="/collaborations/novex" component={Novex} />
        <Route path="/collaborations/bluecore" component={BlueCore} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
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
