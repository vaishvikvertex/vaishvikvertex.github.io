import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Rocket, 
  Zap, 
  Wind, 
  Calendar, 
  Users, 
  Target,
  ArrowRight,
  ExternalLink,
  Cog,
  Settings
} from "lucide-react";

const collaborationHighlights = [
  {
    title: "Advanced Propulsion Systems",
    description: "Development of next-generation propulsion technologies for aerospace and marine applications",
    status: "Active",
    duration: "2023 - 2026"
  },
  {
    title: "AI-Powered Flight Control",
    description: "Intelligent flight control systems with predictive maintenance capabilities",
    status: "Testing",
    duration: "2024 - 2025"
  },
  {
    title: "Hybrid Energy Solutions",
    description: "Sustainable propulsion systems combining traditional and renewable energy sources",
    status: "Research",
    duration: "2024 - 2027"
  }
];

const keyAchievements = [
  {
    year: "2024",
    title: "Successful Flight Test Campaign",
    description: "Completed 50+ test flights with AI-enhanced propulsion control systems"
  },
  {
    year: "2023",
    title: "Joint Technology Agreement",
    description: "Established comprehensive partnership for aerospace propulsion innovation"
  },
  {
    year: "2023",
    title: "First Prototype Delivery",
    description: "Successfully delivered first AI-integrated propulsion system prototype"
  }
];

const technologyAreas = [
  {
    icon: Rocket,
    title: "Propulsion Systems",
    description: "Advanced propulsion technologies for aerospace and marine applications",
    applications: ["Aircraft Engines", "Marine Propulsion", "Space Vehicles"]
  },
  {
    icon: Zap,
    title: "Control Systems",
    description: "AI-powered control and automation systems for propulsion management",
    applications: ["Flight Control", "Engine Management", "Performance Optimization"]
  },
  {
    icon: Wind,
    title: "Aerodynamics",
    description: "Computational fluid dynamics and aerodynamic optimization solutions",
    applications: ["Design Optimization", "Performance Analysis", "Efficiency Enhancement"]
  }
];

export default function Novex() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Novex Dynamics</h1>
                  <p className="text-xl text-gray-600 mt-2">Propulsion Systems & Aerospace Engineering</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Innovative partnership focusing on advanced propulsion systems and aerospace engineering solutions. 
                Together, we're developing next-generation technologies that enhance performance, efficiency, and 
                sustainability across aerospace and marine propulsion applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Novex
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Explore Collaboration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c5.523 0 10 4.477 10 10 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1 5v6l4-3-4-3z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Propulsion Systems</h3>
                  <p className="text-sm text-white/80">Aerospace Engineering</p>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Partnership Overview</h3>
                    <Badge variant="outline">Strategic Alliance</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Established:</span>
                      <p className="font-medium">2023</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Focus Areas:</span>
                      <p className="font-medium">Propulsion & Aerospace</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Test Flights:</span>
                      <p className="font-medium">50+ Completed</p>
                    </div>
                    <div>
                      <span className="text-gray-500">R&D Investment:</span>
                      <p className="font-medium">$15M+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Innovation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative development of cutting-edge propulsion and aerospace technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Active Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Active Development Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Joint projects advancing the future of propulsion and aerospace engineering.
            </p>
          </div>
          
          <div className="space-y-6">
            {collaborationHighlights.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <Badge 
                          variant={project.status === 'Active' ? 'default' : 'outline'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <Button variant="outline">
                      Technical Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Performance & Innovation Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable achievements and technical breakthroughs from our collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Rocket className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
                <p className="text-gray-600">Efficiency Improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Test Flights Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
                <p className="text-gray-600">System Reliability</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">30%</div>
                <p className="text-gray-600">Maintenance Reduction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Development Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key achievements and breakthroughs in our aerospace technology partnership.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-orange-600 rounded-full"></div>
                  <div className="ml-16">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-sm font-medium text-orange-600">{achievement.year}</div>
                      <Badge variant="outline" className="text-xs">
                        Milestone
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Innovations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough technologies developed through our collaborative research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="h-5 w-5 text-primary mr-2" />
                  Adaptive Propulsion Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AI-powered propulsion control system that adapts in real-time to flight conditions, 
                  optimizing performance and fuel efficiency across all operational phases.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Real-time performance optimization</li>
                  <li>• Predictive maintenance integration</li>
                  <li>• Autonomous failure detection</li>
                  <li>• 25% efficiency improvement</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  Hybrid Energy Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Innovative hybrid propulsion systems combining traditional engines with electric 
                  motors and advanced battery technology for enhanced sustainability.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Reduced emissions by 40%</li>
                  <li>• Extended operational range</li>
                  <li>• Quiet operation capabilities</li>
                  <li>• Seamless power transition</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wind className="h-5 w-5 text-accent mr-2" />
                  Advanced CFD Modeling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Computational fluid dynamics modeling integrated with AI for rapid aerodynamic 
                  optimization and design validation across multiple flight conditions.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• 10x faster design iterations</li>
                  <li>• Multi-condition optimization</li>
                  <li>• Real-time flow analysis</li>
                  <li>• Automated design recommendations</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cog className="h-5 w-5 text-blue-600 mr-2" />
                  Intelligent Diagnostics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced diagnostic system using machine learning to predict component failures 
                  and optimize maintenance schedules for maximum uptime and safety.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• 99.8% fault detection accuracy</li>
                  <li>• 30% maintenance cost reduction</li>
                  <li>• Proactive component replacement</li>
                  <li>• Integrated safety systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Future Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovation Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Future developments and strategic initiatives for our aerospace technology partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  2024-2025 Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Complete flight certification process</li>
                  <li>• Launch commercial pilot program</li>
                  <li>• Expand to marine propulsion applications</li>
                  <li>• Develop autonomous flight capabilities</li>
                  <li>• Establish manufacturing partnerships</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 text-secondary mr-2" />
                  Strategic Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Lead sustainable propulsion innovation</li>
                  <li>• Establish global technology standards</li>
                  <li>• Create comprehensive service network</li>
                  <li>• Develop space propulsion applications</li>
                  <li>• Build next-generation research facility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advance Aerospace Innovation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in developing the next generation of propulsion and aerospace technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Explore Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Novex Dynamics
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
