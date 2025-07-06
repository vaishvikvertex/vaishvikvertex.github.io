import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Waves, 
  Fish, 
  Compass, 
  Calendar, 
  Users, 
  Target,
  ArrowRight,
  ExternalLink,
  Camera,
  Zap
} from "lucide-react";

const collaborationHighlights = [
  {
    title: "Autonomous Underwater Vehicle Fleet",
    description: "Development of AI-powered AUV systems for deep-sea exploration and industrial inspection tasks",
    status: "Active",
    duration: "2023 - 2026"
  },
  {
    title: "Subsea Infrastructure Monitoring",
    description: "Robotic systems for continuous monitoring and maintenance of offshore infrastructure",
    status: "Testing",
    duration: "2024 - 2025"
  },
  {
    title: "Marine Environmental Monitoring",
    description: "Advanced sensor networks and robotic platforms for ocean environmental assessment",
    status: "Deployment",
    duration: "2024 - 2027"
  }
];

const keyAchievements = [
  {
    year: "2024",
    title: "Deep-Sea Mission Success",
    description: "Completed 6000m depth autonomous inspection mission with 99.9% mission success rate"
  },
  {
    year: "2023",
    title: "Strategic Partnership Launch",
    description: "Established comprehensive alliance for marine robotics and underwater technology development"
  },
  {
    year: "2023",
    title: "First Commercial Deployment",
    description: "Successfully deployed autonomous inspection system for major offshore oil platform"
  }
];

const technologyAreas = [
  {
    icon: Waves,
    title: "Autonomous Underwater Vehicles",
    description: "Advanced AUV systems with AI navigation and mission planning capabilities",
    applications: ["Deep-Sea Exploration", "Pipeline Inspection", "Environmental Monitoring"]
  },
  {
    icon: Camera,
    title: "Underwater Imaging Systems",
    description: "High-resolution imaging and computer vision for underwater inspection and mapping",
    applications: ["Hull Inspection", "Structural Analysis", "3D Mapping"]
  },
  {
    icon: Compass,
    title: "Navigation & Control",
    description: "Precise underwater navigation and autonomous control systems for complex missions",
    applications: ["Autonomous Navigation", "Mission Planning", "Real-time Control"]
  }
];

export default function BlueCore() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Waves className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">BlueCore Industries</h1>
                  <p className="text-xl text-gray-600 mt-2">Marine Robotics & Underwater Technology</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Pioneering partnership in marine robotics and autonomous underwater vehicle technologies. 
                Together, we're developing cutting-edge robotic solutions that enable unprecedented access 
                to underwater environments for inspection, exploration, and environmental monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit BlueCore
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Explore Partnership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Marine Robotics</h3>
                  <p className="text-sm text-white/80">Underwater Technology</p>
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
                      <p className="font-medium">Marine Robotics</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Max Depth:</span>
                      <p className="font-medium">6000m</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Mission Success:</span>
                      <p className="font-medium">99.9%</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Marine Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced underwater robotics and AI-powered systems for marine exploration and industrial applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Active Marine Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Joint development of breakthrough underwater robotics and marine technology solutions.
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
                      Mission Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Operational Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operational Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced underwater robotics capabilities enabling complex marine operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Waves className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">6000m</div>
                <p className="text-gray-600">Maximum Depth</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Fish className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
                <p className="text-gray-600">Autonomous Operation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">4K</div>
                <p className="text-gray-600">Underwater Imaging</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">±1cm</div>
                <p className="text-gray-600">Navigation Precision</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key achievements and breakthroughs in our marine robotics collaboration.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="ml-16">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-sm font-medium text-blue-600">{achievement.year}</div>
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
      
      {/* Marine Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Marine Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of our underwater robotics technology across marine industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Waves className="h-5 w-5 text-primary mr-2" />
                  Offshore Platform Inspection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Autonomous inspection of offshore oil and gas platforms, including hull assessment, 
                  structural integrity monitoring, and marine growth analysis using advanced AUV systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Comprehensive hull inspection</li>
                  <li>• Structural damage assessment</li>
                  <li>• Marine fouling analysis</li>
                  <li>• Real-time reporting system</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fish className="h-5 w-5 text-secondary mr-2" />
                  Pipeline Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Continuous monitoring of subsea pipelines and cables using intelligent robotic systems 
                  capable of detecting leaks, corrosion, and structural anomalies.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Leak detection and monitoring</li>
                  <li>• Corrosion assessment</li>
                  <li>• Burial depth verification</li>
                  <li>• Predictive maintenance alerts</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 text-accent mr-2" />
                  Environmental Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced environmental monitoring using autonomous underwater vehicles equipped 
                  with multiple sensors for ocean health assessment and compliance monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Water quality assessment</li>
                  <li>• Marine ecosystem monitoring</li>
                  <li>• Pollution detection</li>
                  <li>• Biodiversity tracking</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  Search & Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency response and search & recovery operations using AI-powered navigation 
                  and advanced manipulation capabilities for complex underwater missions.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Object location and identification</li>
                  <li>• Emergency response support</li>
                  <li>• Precision manipulation tasks</li>
                  <li>• Coordinated multi-vehicle operations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Future Developments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Future Developments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upcoming innovations and strategic initiatives for our marine robotics partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  2024-2025 Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Launch swarm robotics capabilities</li>
                  <li>• Extend operational depth to 8000m</li>
                  <li>• Deploy AI-powered decision making</li>
                  <li>• Establish global service network</li>
                  <li>• Complete commercial certification</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 text-secondary mr-2" />
                  Long-term Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Create autonomous marine ecosystem</li>
                  <li>• Develop next-gen manipulation systems</li>
                  <li>• Establish underwater research stations</li>
                  <li>• Lead ocean exploration initiatives</li>
                  <li>• Build sustainable marine technology</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dive into the Future of Marine Technology</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore partnership opportunities in underwater robotics and autonomous marine systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Start Collaboration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit BlueCore Industries
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
