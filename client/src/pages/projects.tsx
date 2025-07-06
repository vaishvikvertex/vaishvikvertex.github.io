import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Clock, CheckCircle } from "lucide-react";

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
    title: "Renewable Energy Optimization",
    description: "Wind farm performance optimization using machine learning and predictive analytics.",
    sector: "Renewables",
    year: "2023"
  },
  {
    title: "Port Asset Management",
    description: "Comprehensive asset management system for major international port operations.",
    sector: "Infrastructure",
    year: "2024"
  },
  {
    title: "Aerospace Quality Control",
    description: "Advanced quality control system for aerospace manufacturing with AI-powered defect detection.",
    sector: "Aerospace",
    year: "2023"
  }
];

const caseStudies = [
  {
    title: "Reducing Downtime by 40%",
    client: "Major Oil & Gas Company",
    challenge: "Frequent equipment failures causing costly production downtime",
    solution: "Implemented predictive maintenance system with AI-powered analytics",
    results: ["40% reduction in unplanned downtime", "25% increase in equipment lifespan", "$2M annual savings"],
    sector: "Oil & Gas"
  },
  {
    title: "Smart Manufacturing Excellence",
    client: "Global Manufacturing Corp",
    challenge: "Inefficient production processes and quality control issues",
    solution: "Deployed IoT sensors and real-time analytics platform",
    results: ["30% improvement in production efficiency", "50% reduction in defects", "15% cost savings"],
    sector: "Manufacturing"
  },
  {
    title: "Marine Safety Enhancement",
    client: "International Shipping Line",
    challenge: "Manual inspection processes and safety compliance issues",
    solution: "Automated inspection system with computer vision technology",
    results: ["90% faster inspection process", "Zero safety incidents", "Enhanced regulatory compliance"],
    sector: "Marine"
  }
];

const projectStats = [
  {
    icon: CheckCircle,
    value: "50+",
    label: "Projects Completed",
    color: "text-green-600"
  },
  {
    icon: Clock,
    value: "15+",
    label: "Active Projects",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Satisfaction",
    color: "text-primary"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries that drive innovation 
              and deliver measurable results across diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Projects Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="featured" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="featured">Featured Projects</TabsTrigger>
                <TabsTrigger value="cases">Case Studies</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="featured" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Highlighting our most impactful projects that demonstrate our technical excellence and innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cases" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Detailed analysis of successful implementations and the measurable impact achieved.
                </p>
              </div>
              
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                          <p className="text-gray-600">{study.client}</p>
                        </div>
                        <Badge variant="outline">{study.sector}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600 text-sm">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                          <ul className="text-gray-600 text-sm space-y-1">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex}>• {result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Project Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The measurable outcomes and benefits our projects deliver to clients and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                <p className="text-gray-600">Cost Savings Generated</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">35%</div>
                <p className="text-gray-600">Average Efficiency Gain</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.5%</div>
                <p className="text-gray-600">System Uptime Achieved</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Continuous Monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with us and the results they've achieved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "The digital twin solution transformed our operations. We now have real-time visibility 
                  into our entire facility and can predict issues before they occur."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">CTO, Manufacturing Corp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "Outstanding expertise in marine engineering. The team delivered a complex project 
                  on time and exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Maria Santos</p>
                    <p className="text-sm text-gray-500">Operations Manager, Shipping Line</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "The AI-powered analytics platform has revolutionized our maintenance strategy. 
                  We've seen significant cost savings and improved reliability."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                    RK
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Robert Kim</p>
                    <p className="text-sm text-gray-500">Director, Energy Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/what-we-do">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
