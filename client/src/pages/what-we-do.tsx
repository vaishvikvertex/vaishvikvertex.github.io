import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectorCard from "@/components/sector-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Cog, 
  Ship, 
  Monitor, 
  GraduationCap, 
  Brain, 
  Code,
  ArrowRight
} from "lucide-react";

const sectors = [
  {
    title: "Marine Operations",
    description: "Comprehensive marine engineering solutions for shipping, offshore, and subsea operations.",
    badge: "Marine"
  },
  {
    title: "Oil & Gas",
    description: "Upstream, midstream, and downstream solutions for the energy sector.",
    badge: "Energy"
  },
  {
    title: "Manufacturing",
    description: "Smart manufacturing and process optimization solutions for industrial facilities.",
    badge: "Industry"
  },
  {
    title: "Aerospace",
    description: "Advanced engineering solutions for aerospace and defense applications.",
    badge: "Aerospace"
  },
  {
    title: "Renewables",
    description: "Sustainable energy solutions and green technology implementations.",
    badge: "Green Tech"
  },
  {
    title: "Ports & Harbours",
    description: "Port asset management and optimization solutions for maritime infrastructure.",
    badge: "Infrastructure"
  }
];

const services = [
  {
    icon: Cog,
    title: "Engineering & Consulting",
    description: "Comprehensive engineering services and technical consulting across all industries.",
    features: [
      "Engineering Review & Analysis",
      "Technical Due Diligence",
      "Risk Assessment & Management",
      "Life Extension Studies",
      "Design & Condition Assessment"
    ],
    color: "bg-primary-100 text-primary"
  },
  {
    icon: Ship,
    title: "Marine Services",
    description: "Specialized marine engineering and maritime consulting services.",
    features: [
      "Marine Advisory & Inspection",
      "Marine Design & Upgrade",
      "Conversion Services",
      "Statutory & Certification",
      "Compliance Support"
    ],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Monitor,
    title: "Digital & QA",
    description: "Digital transformation and quality assurance solutions.",
    features: [
      "Digital Transformation",
      "Asset Monitoring Systems",
      "NDT Support Services",
      "Field QA & Inspection",
      "Quality Enhancement"
    ],
    color: "bg-secondary-100 text-secondary"
  },
  {
    icon: GraduationCap,
    title: "Training & Safety",
    description: "Professional training and safety management programs.",
    features: [
      "Maritime Training Programs",
      "Accident Investigation",
      "Safety & Compliance",
      "Professional Development",
      "Certification Support"
    ],
    color: "bg-accent-100 text-accent"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Artificial intelligence and machine learning applications.",
    features: [
      "AI-Based Digital Twins",
      "Predictive Analytics",
      "Anomaly Detection",
      "Automated Monitoring",
      "Intelligent Optimization"
    ],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions and system integration services.",
    features: [
      "Custom Software Solutions",
      "System Integration",
      "Mobile Applications",
      "Web Platforms",
      "API Development"
    ],
    color: "bg-green-100 text-green-600"
  }
];

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering services and digital solutions designed to optimize performance 
              and drive innovation across diverse industries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple sectors, providing tailored solutions for each industry's unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={index} {...sector} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive service offerings designed to meet your specific needs and drive operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative software and hardware solutions that transform how industries operate and optimize performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Software Development Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Custom software applications and platforms tailored to your specific requirements.
                </p>
                <Badge variant="outline" className="text-xs">Software</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Digital Twin Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Real-time digital replicas of physical systems for enhanced monitoring and control.
                </p>
                <Badge variant="outline" className="text-xs">AI/ML</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Products & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Artificial intelligence applications for predictive analytics and automation.
                </p>
                <Badge variant="outline" className="text-xs">AI</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Asset Monitoring Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive monitoring solutions for industrial assets and infrastructure.
                </p>
                <Badge variant="outline" className="text-xs">IoT</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help optimize your operations and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
