import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink,
  Users,
  Video,
  Newspaper,
  ArrowRight
} from "lucide-react";

const newsItems = [
  {
    title: "TechCorp Solutions Wins AI Innovation Award 2024",
    summary: "Recognized for excellence in AI-powered industrial solutions and digital transformation initiatives.",
    date: "March 20, 2024",
    category: "Awards",
    readTime: "3 min read"
  },
  {
    title: "Strategic Partnership with Global Maritime Leader",
    summary: "New collaboration will advance digital twin technology for offshore operations worldwide.",
    date: "March 15, 2024",
    category: "Partnerships",
    readTime: "4 min read"
  },
  {
    title: "Breakthrough in Predictive Maintenance Technology",
    summary: "Latest AI algorithms achieve 95% accuracy in equipment failure prediction across industrial sectors.",
    date: "March 10, 2024",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    title: "Expansion into European Markets",
    summary: "Opening new offices in London and Amsterdam to serve growing European client base.",
    date: "March 5, 2024",
    category: "Business",
    readTime: "2 min read"
  }
];

const upcomingEvents = [
  {
    title: "AI in Industrial Operations Summit",
    type: "Conference",
    date: "April 15-16, 2024",
    location: "San Francisco, CA",
    description: "Leading experts discuss the future of AI in industrial automation and optimization.",
    status: "Speaking"
  },
  {
    title: "Digital Twin Technology Webinar",
    type: "Webinar",
    date: "April 25, 2024",
    location: "Online",
    description: "Learn how digital twins are transforming asset management and predictive maintenance.",
    status: "Hosting"
  },
  {
    title: "Marine Technology Expo 2024",
    type: "Exhibition",
    date: "May 8-10, 2024",
    location: "Rotterdam, Netherlands",
    description: "Showcase of latest marine engineering innovations and digital solutions.",
    status: "Exhibiting"
  },
  {
    title: "Manufacturing Excellence Workshop",
    type: "Workshop",
    date: "May 20, 2024",
    location: "Detroit, MI",
    description: "Hands-on workshop on implementing IoT and AI in manufacturing processes.",
    status: "Presenting"
  }
];

const pastEvents = [
  {
    title: "Industry 4.0 Conference 2024",
    date: "February 28, 2024",
    location: "Chicago, IL",
    description: "Presented case studies on successful digital transformation implementations."
  },
  {
    title: "Maritime Safety Symposium",
    date: "February 15, 2024",
    location: "Houston, TX",
    description: "Demonstrated AI-powered inspection systems for marine vessel safety."
  },
  {
    title: "Offshore Technology Conference",
    date: "January 30, 2024",
    location: "Aberdeen, UK",
    description: "Showcased digital twin solutions for offshore platform optimization."
  }
];

const webinars = [
  {
    title: "Getting Started with Digital Twins",
    duration: "45 minutes",
    presenter: "Dr. Sarah Chen, CTO",
    description: "Introduction to digital twin technology and its industrial applications.",
    registrations: "1,200+"
  },
  {
    title: "Predictive Maintenance ROI Calculator",
    duration: "30 minutes",
    presenter: "Michael Rodriguez, Head of Marine Services",
    description: "How to calculate and maximize ROI from predictive maintenance investments.",
    registrations: "950+"
  },
  {
    title: "AI in Quality Control",
    duration: "40 minutes",
    presenter: "Dr. James Wilson, Director of Innovation",
    description: "Implementing AI-powered quality control systems in manufacturing.",
    registrations: "1,400+"
  }
];

export default function Media() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Media & Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest news, industry events, and thought leadership content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Press Releases</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <p className="text-gray-600">Events Annually</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <p className="text-gray-600">Webinars Hosted</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Content Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="news" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="news">Newsroom</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="news" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay informed about our latest developments, partnerships, and industry insights.
                </p>
              </div>
              
              <div className="space-y-8">
                {newsItems.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-3">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline">{item.category}</Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {item.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                          <p className="text-gray-600 mb-4">{item.summary}</p>
                          <Button variant="ghost" className="p-0">
                            Read Full Article
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                        <div className="lg:col-span-1 flex lg:flex-col justify-between lg:justify-start">
                          <div className="text-sm text-gray-500">{item.date}</div>
                          <Button size="sm" className="mt-0 lg:mt-4">
                            Share
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join us at upcoming industry events and conferences where we share insights and showcase innovations.
                </p>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Events</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingEvents.map((event, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <Badge variant="outline">{event.type}</Badge>
                            <Badge 
                              variant={event.status === 'Hosting' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {event.status}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {event.location}
                            </div>
                            <p className="text-gray-600 text-sm">{event.description}</p>
                          </div>
                          <Button className="w-full mt-4">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Past Events</h3>
                  <div className="space-y-4">
                    {pastEvents.map((event, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-4 md:mb-0">
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h4>
                              <p className="text-gray-600 text-sm">{event.description}</p>
                            </div>
                            <div className="text-sm text-gray-500 md:text-right">
                              <div className="flex items-center md:justify-end mb-1">
                                <Calendar className="h-4 w-4 mr-1" />
                                {event.date}
                              </div>
                              <div className="flex items-center md:justify-end">
                                <MapPin className="h-4 w-4 mr-1" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="webinars" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Webinars & Online Events</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access our library of educational webinars and online presentations from industry experts.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webinars.map((webinar, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">Webinar</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {webinar.duration}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{webinar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {webinar.presenter}
                        </div>
                        <p className="text-gray-600 text-sm">{webinar.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{webinar.registrations} attended</span>
                          <Button size="sm">
                            Watch Recording
                            <Video className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media Gallery</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Visual highlights from our events, projects, and company activities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Event Photos</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Industry Conference 2024</h3>
                      <p className="text-gray-600 text-sm">Highlights from our latest conference presentation</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Project Videos</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Digital Twin Demo</h3>
                      <p className="text-gray-600 text-sm">See our digital twin technology in action</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Team Photos</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Team Innovation Day</h3>
                      <p className="text-gray-600 text-sm">Our team collaborating on breakthrough solutions</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Facility Tour</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Research Lab Tour</h3>
                      <p className="text-gray-600 text-sm">Inside look at our AI research facility</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Award Ceremony</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Innovation Award 2024</h3>
                      <p className="text-gray-600 text-sm">Receiving recognition for AI excellence</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Client Visits</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Client Site Visit</h3>
                      <p className="text-gray-600 text-sm">Implementing solutions at client facilities</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Press Kit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Press Kit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resources for media professionals including logos, images, and company information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Press Releases</h3>
                <p className="text-gray-600 text-sm mb-4">Latest announcements and news</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Company Logos</h3>
                <p className="text-gray-600 text-sm mb-4">High-resolution logo files</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Executive Bios</h3>
                <p className="text-gray-600 text-sm mb-4">Leadership team information</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Media Assets</h3>
                <p className="text-gray-600 text-sm mb-4">Photos and video materials</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Media */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For press inquiries, interview requests, or additional information, please contact our media team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Contact Media Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              media@techcorp.com
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
