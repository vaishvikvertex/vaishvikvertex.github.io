import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InnovationShowcase from "@/components/innovation-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Lightbulb, 
  FileText, 
  Layers, 
  Zap, 
  ArrowRight,
  Award,
  Users,
  Globe
} from "lucide-react";

const technologies = [
  {
    title: "Artificial Intelligence",
    description: "Advanced machine learning algorithms and neural networks for industrial applications.",
    applications: ["Predictive Maintenance", "Quality Control", "Process Optimization", "Anomaly Detection"]
  },
  {
    title: "Digital Twin",
    description: "Real-time digital representations of physical systems for enhanced monitoring and control.",
    applications: ["Asset Monitoring", "Performance Simulation", "Predictive Analytics", "System Optimization"]
  },
  {
    title: "IoT & Industry 4.0",
    description: "Connected devices and smart manufacturing solutions for the future of industry.",
    applications: ["Smart Sensors", "Automated Systems", "Data Analytics", "Remote Monitoring"]
  },
  {
    title: "Advanced Analytics",
    description: "Big data processing and analytics for actionable insights and decision making.",
    applications: ["Data Visualization", "Statistical Analysis", "Pattern Recognition", "Business Intelligence"]
  }
];

const rdInitiatives = [
  {
    title: "Autonomous Marine Systems",
    description: "Development of AI-powered autonomous navigation and control systems for marine vessels.",
    status: "In Progress",
    team: "Marine AI Team"
  },
  {
    title: "Predictive Maintenance Platform",
    description: "Next-generation platform for predictive maintenance using advanced machine learning.",
    status: "Beta Testing",
    team: "AI Research Team"
  },
  {
    title: "Digital Twin Ecosystem",
    description: "Comprehensive digital twin platform for industrial asset management and optimization.",
    status: "Production",
    team: "Digital Innovation Team"
  },
  {
    title: "Sustainable Operations Framework",
    description: "Framework for optimizing industrial operations with focus on sustainability and efficiency.",
    status: "Research",
    team: "Sustainability Team"
  }
];

const innovations = [
  {
    icon: Award,
    title: "Patents & Publications",
    count: "15+",
    description: "Patents filed and research papers published in leading journals"
  },
  {
    icon: Users,
    title: "Research Partnerships",
    count: "8",
    description: "Active collaborations with universities and research institutions"
  },
  {
    icon: Globe,
    title: "Innovation Labs",
    count: "3",
    description: "Dedicated research facilities across different regions"
  }
];

export default function Innovation() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Innovation & Research</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of industrial technology through cutting-edge research, development, 
              and breakthrough innovations that transform industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{innovation.count}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{innovation.title}</h3>
                    <p className="text-gray-600 text-sm">{innovation.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Innovation Showcase */}
      <InnovationShowcase />
      
      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technologies and frameworks that power our innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="h-6 w-6 text-primary mr-2" />
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* R&D Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">R&D Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current research and development projects that are shaping the future of industrial technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rdInitiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                    <Badge 
                      variant={initiative.status === 'Production' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {initiative.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {initiative.team}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Innovation Labs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovation Labs & Collaborations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated research facilities and strategic partnerships that drive breakthrough innovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-primary mr-2" />
                  AI Research Lab
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dedicated facility for artificial intelligence research and development, focusing on industrial applications.
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                    <Badge variant="outline" className="text-xs">Computer Vision</Badge>
                    <Badge variant="outline" className="text-xs">NLP</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-secondary mr-2" />
                  Digital Innovation Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  State-of-the-art facility for digital twin development and IoT solutions testing.
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Capabilities:</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Digital Twins</Badge>
                    <Badge variant="outline" className="text-xs">IoT Testing</Badge>
                    <Badge variant="outline" className="text-xs">Simulation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-accent mr-2" />
                  Academic Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Collaborative research programs with leading universities and research institutions worldwide.
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Partners:</div>
                  <div className="text-sm text-gray-500">
                    • MIT Technology Lab<br/>
                    • Stanford AI Institute<br/>
                    • European Marine Research Center
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaborate with Our Innovation Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of industrial technology through strategic partnerships and collaborative research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Partner with Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
