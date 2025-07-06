import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Atom, 
  Award, 
  Calendar, 
  Users, 
  Target,
  ArrowRight,
  ExternalLink,
  Beaker,
  Microscope
} from "lucide-react";

const collaborationHighlights = [
  {
    title: "Advanced Materials Research",
    description: "Joint development of next-generation composite materials for marine applications",
    status: "Active",
    duration: "2023 - 2025"
  },
  {
    title: "Nanotechnology Integration",
    description: "Incorporating nanomaterials into digital twin modeling for enhanced accuracy",
    status: "Development",
    duration: "2024 - 2026"
  },
  {
    title: "Smart Coatings Project",
    description: "AI-powered self-healing coatings for offshore platform protection",
    status: "Research",
    duration: "2024 - 2027"
  }
];

const keyAchievements = [
  {
    year: "2024",
    title: "Breakthrough Material Discovery",
    description: "Developed revolutionary composite material with 40% improved strength-to-weight ratio"
  },
  {
    year: "2023",
    title: "Partnership Launch",
    description: "Established strategic alliance for advanced materials and nanotechnology research"
  },
  {
    year: "2023",
    title: "First Joint Patent",
    description: "Filed patent for innovative nanomaterial-enhanced predictive maintenance system"
  }
];

const researchAreas = [
  {
    icon: Atom,
    title: "Nanomaterials",
    description: "Advanced nanomaterials for industrial applications",
    applications: ["Self-healing Materials", "Smart Sensors", "Enhanced Coatings"]
  },
  {
    icon: Beaker,
    title: "Composite Materials",
    description: "Next-generation composite materials for extreme environments",
    applications: ["Marine Structures", "Offshore Platforms", "Aerospace Components"]
  },
  {
    icon: Microscope,
    title: "Material Testing",
    description: "Advanced testing and characterization of new materials",
    applications: ["Stress Analysis", "Fatigue Testing", "Environmental Testing"]
  }
];

export default function Synergia() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Atom className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Synergia Technologies</h1>
                  <p className="text-xl text-gray-600 mt-2">Advanced Materials & Nanotechnology</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Strategic partnership focused on developing cutting-edge materials and nanotechnology solutions 
                for industrial applications. Together, we're pioneering the next generation of smart materials 
                that revolutionize how industries operate and maintain their assets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Synergia
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Partner with Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">AI-Powered Solutions</h3>
                  <p className="text-sm text-white/80">Advanced Technology Partnership</p>
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
                      <p className="font-medium">Materials & Nanotech</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Active Projects:</span>
                      <p className="font-medium">5+</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Joint Patents:</span>
                      <p className="font-medium">3 Filed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research & Development Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative research spanning advanced materials science and nanotechnology applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">{area.title}</CardTitle>
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
              Current joint projects pushing the boundaries of materials science and industrial applications.
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
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones and breakthroughs from our collaborative research and development efforts.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="ml-16">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-sm font-medium text-purple-600">{achievement.year}</div>
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
      
      {/* Impact & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes and benefits delivered through our strategic collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <p className="text-gray-600">Joint Patents Filed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
                <p className="text-gray-600">Performance Improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <p className="text-gray-600">Joint Research Team</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">2+</div>
                <p className="text-gray-600">Years of Partnership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technology Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual demonstration of our collaborative innovations and breakthrough technologies.
            </p>
          </div>
          
          {/* Technology Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">AI Neural Networks</h3>
                <p className="text-sm text-white/80">Deep Learning Systems</p>
              </div>
            </div>
            
            <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Smart Materials</h3>
                <p className="text-sm text-white/80">Nanotechnology</p>
              </div>
            </div>
            
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Predictive Analytics</h3>
                <p className="text-sm text-white/80">Data Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Future Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upcoming initiatives and long-term vision for our collaborative partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  2024-2025 Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Complete smart coatings research phase</li>
                  <li>• File 2 additional joint patents</li>
                  <li>• Launch commercial pilot program</li>
                  <li>• Expand research team by 50%</li>
                  <li>• Establish testing facility partnership</li>
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
                  <li>• Become leading materials innovation hub</li>
                  <li>• Launch joint venture for commercialization</li>
                  <li>• Establish global research network</li>
                  <li>• Develop next-gen smart materials platform</li>
                  <li>• Create industry standards and protocols</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore partnership opportunities with our advanced materials and nanotechnology initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Contact Partnership Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Synergia Technologies
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
