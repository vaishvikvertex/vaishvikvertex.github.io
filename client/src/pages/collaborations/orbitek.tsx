import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Satellite, 
  Radio, 
  Globe, 
  Calendar, 
  Users, 
  Target,
  ArrowRight,
  ExternalLink,
  Antenna,
  Orbit
} from "lucide-react";

const collaborationHighlights = [
  {
    title: "Satellite-Based IoT Network",
    description: "Developing global IoT connectivity for remote industrial assets using advanced satellite technology",
    status: "Active",
    duration: "2023 - 2025"
  },
  {
    title: "Space-Based Digital Twins",
    description: "Creating digital twin models enhanced with real-time satellite imagery and data",
    status: "Development",
    duration: "2024 - 2026"
  },
  {
    title: "Global Communication Platform",
    description: "Unified communication system for offshore and remote industrial operations",
    status: "Pilot",
    duration: "2024 - 2025"
  }
];

const keyAchievements = [
  {
    year: "2024",
    title: "Global IoT Network Launch",
    description: "Successfully deployed satellite-based IoT network covering 95% of Earth's surface"
  },
  {
    year: "2023",
    title: "Strategic Partnership Signed",
    description: "Established comprehensive alliance for space technology and global connectivity solutions"
  },
  {
    year: "2023",
    title: "First Satellite Integration",
    description: "Successfully integrated AI algorithms with Orbitek's satellite communication systems"
  }
];

const technologyAreas = [
  {
    icon: Satellite,
    title: "Satellite Technology",
    description: "Advanced satellite systems for global industrial connectivity",
    applications: ["Asset Monitoring", "Remote Operations", "Global Communications"]
  },
  {
    icon: Antenna,
    title: "Communication Systems",
    description: "High-performance communication solutions for extreme environments",
    applications: ["Offshore Platforms", "Remote Mining", "Maritime Operations"]
  },
  {
    icon: Orbit,
    title: "Space-Based Analytics",
    description: "AI-powered analytics using satellite data and imagery",
    applications: ["Predictive Modeling", "Environmental Monitoring", "Asset Tracking"]
  }
];

export default function Orbitek() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Satellite className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Orbitek Systems</h1>
                  <p className="text-xl text-gray-600 mt-2">Space Technology & Global Connectivity</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Revolutionary partnership combining satellite technology with AI-powered industrial solutions. 
                Together, we're enabling global connectivity for remote assets and creating unprecedented 
                visibility into industrial operations worldwide through space-based technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Orbitek
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
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Satellite Technology</h3>
                  <p className="text-sm text-white/80">Space Systems Engineering</p>
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
                      <p className="font-medium">Space Tech & IoT</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Global Coverage:</span>
                      <p className="font-medium">95% Earth Surface</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Satellites Deployed:</span>
                      <p className="font-medium">12 Active</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining cutting-edge satellite technology with advanced AI to create global industrial solutions.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Active Collaborations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Joint projects leveraging space technology to revolutionize industrial operations globally.
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
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Connectivity Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive satellite coverage enabling industrial IoT and communication worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <p className="text-gray-600">Earth Surface Coverage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Satellite className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                <p className="text-gray-600">Active Satellites</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Radio className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <p className="text-gray-600">Real-time Connectivity</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                <p className="text-gray-600">Connected Assets</p>
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
              Key achievements and breakthroughs from our space technology collaboration.
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
      
      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our satellite-enabled solutions are transforming industrial operations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Satellite className="h-5 w-5 text-primary mr-2" />
                  Offshore Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Real-time monitoring and control of offshore oil platforms and marine assets through 
                  satellite connectivity, enabling predictive maintenance and remote operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• 24/7 asset monitoring</li>
                  <li>• Remote diagnostic capabilities</li>
                  <li>• Emergency communication systems</li>
                  <li>• Environmental compliance tracking</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 text-secondary mr-2" />
                  Remote Mining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Global connectivity for remote mining operations, enabling autonomous equipment 
                  monitoring and real-time data analytics from the most isolated locations.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Equipment health monitoring</li>
                  <li>• Production optimization</li>
                  <li>• Safety system integration</li>
                  <li>• Supply chain coordination</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Radio className="h-5 w-5 text-accent mr-2" />
                  Maritime Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced vessel tracking and communication systems providing global coverage 
                  for shipping fleets and maritime operations management.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Global fleet tracking</li>
                  <li>• Route optimization</li>
                  <li>• Weather monitoring</li>
                  <li>• Cargo status updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  Emergency Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rapid deployment communication systems for emergency response and disaster 
                  recovery operations in areas with compromised terrestrial infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Instant communication setup</li>
                  <li>• Coordination with response teams</li>
                  <li>• Real-time situation assessment</li>
                  <li>• Resource deployment tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect Globally with Space Technology</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how satellite-enabled industrial solutions can transform your remote operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Orbitek Systems
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
