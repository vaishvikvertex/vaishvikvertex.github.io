import type { LucideIcon } from "lucide-react";

export interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
  capabilities: string[];
  applications: string[];
  technologies: string[];
}

export interface Reason {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUs {
  headline: string;
  subheading: string;
  reasons: Reason[];
  differentiators: string[];
}

export interface PillarStats {
  projectsCompleted: string;
  yearsExperience: string;
  clientSatisfaction: string;
  innovations: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: string;
}

export interface Pillar {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
  bgColor: string;
  borderColor: string;
  domains: Domain[];
  whyChooseUs: WhyChooseUs;
  stats: PillarStats;
  caseStudies: CaseStudy[];
}
