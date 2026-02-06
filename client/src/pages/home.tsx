import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InnovationShowcase from "@/components/innovation-showcase";
import PillarCard from "@/components/pillar-card";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/data/pillar-content";

// Pillars are imported from pillar-content.ts

const featuredProjects = [
  {
    title: "Offshore Platform Digital Twin",
    description: "AI-powered digital twin implementation for real-time monitoring and predictive maintenance of offshore drilling operations.",
    sector: "Oil & Gas",
    year: "2024"
  },
  {
    title: "Smart Factory Implementation",
    description: "IoT-enabled smart manufacturing system with real-time analytics and automated quality control.",
    sector: "Manufacturing",
    year: "2023"
  },
  {
    title: "Vessel Inspection System",
    description: "AI-powered inspection system for marine vessels with automated defect detection and reporting.",
    sector: "Marine",
    year: "2024"
  },
  {
    title: "Smart Building BIM Integration",
    description: "Complete Building Information Modeling system for a 50-story commercial complex with digital twin capabilities.",
    sector: "BIM",
    year: "2024"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Our 5 Pillars - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five strategic pillars delivering comprehensive engineering and technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PILLARS.slice(0, 3).map((pillar) => (
              <PillarCard
                key={pillar.id}
                title={pillar.title}
                shortTitle={pillar.shortTitle}
                description={pillar.tagline}
                icon={pillar.icon}
                gradient={pillar.gradient}
                slug={pillar.slug}
                domainCount={pillar.domains.length}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/what-we-do">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      
      {/* Featured Projects - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable results across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us to discuss your project needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
