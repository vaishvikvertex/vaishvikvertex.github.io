import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InnovationShowcase from "@/components/innovation-showcase";
import SectorCard from "@/components/sector-card";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Marine & Offshore",
    description: "Comprehensive marine engineering, offshore operations, and subsea solutions for the maritime industry.",
    badge: "Marine"
  },
  {
    title: "Oil & Gas",
    description: "Advanced solutions for upstream, midstream, and downstream operations in the energy sector.",
    badge: "Energy"
  },
  {
    title: "Aerospace",
    description: "Precision engineering and advanced manufacturing solutions for aerospace and defense applications.",
    badge: "Aerospace"
  },
  {
    title: "Renewables",
    description: "Sustainable energy solutions and green technology implementations for a cleaner future.",
    badge: "Green Tech"
  }
];

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
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Sector Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering cutting-edge engineering solutions across diverse industries with proven expertise and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={index} {...sector} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/what-we-do">
              <Button className="bg-primary hover:bg-primary/90">
                View All Sectors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Innovation Showcase */}
      <InnovationShowcase />
      
      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries across diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-primary hover:bg-primary/90">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team of experts to discuss how we can help optimize your industrial processes with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
