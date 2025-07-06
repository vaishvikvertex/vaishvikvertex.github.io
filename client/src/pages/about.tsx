import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Timeline from "@/components/timeline";
import TeamCard from "@/components/team-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "AI Innovation Award",
    description: "Recognized for excellence in AI-powered industrial solutions and digital transformation.",
    type: "achievement" as const
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across multiple continents with localized support.",
    type: "milestone" as const
  },
  {
    year: "2022",
    title: "Digital Twin Platform Launch",
    description: "Launched comprehensive digital twin platform for industrial asset management.",
    type: "launch" as const
  },
  {
    year: "2021",
    title: "Strategic Partnerships",
    description: "Formed key partnerships with leading technology providers and research institutions.",
    type: "partnership" as const
  }
];

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    position: "Chief Technology Officer",
    department: "Technology",
    bio: "Leading AI research and digital twin development with 15+ years of experience in industrial automation."
  },
  {
    name: "Michael Rodriguez",
    position: "Head of Marine Services",
    department: "Marine",
    bio: "Expert in marine engineering and offshore operations with extensive experience in complex projects."
  },
  {
    name: "Dr. James Wilson",
    position: "Director of Innovation",
    department: "R&D",
    bio: "Pioneering research in machine learning applications for predictive maintenance and optimization."
  },
  {
    name: "Emma Thompson",
    position: "Head of Business Development",
    department: "Business",
    bio: "Driving strategic growth and partnerships across global markets with focus on sustainable solutions."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TechCorp Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company specializing in engineering solutions, AI-based digital twin development, 
              and comprehensive technical consulting across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Expert Team Members</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-primary mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To deliver innovative engineering solutions that drive industry transformation through advanced technology, 
                  exceptional expertise, and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-6 w-6 text-secondary mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the global leader in AI-powered industrial solutions, enabling organizations to achieve operational 
                  excellence and sustainable growth through cutting-edge technology.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 text-accent mr-2" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Innovation</Badge>
                  <Badge variant="outline">Excellence</Badge>
                  <Badge variant="outline">Integrity</Badge>
                  <Badge variant="outline">Collaboration</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements that have shaped our company and defined our commitment to excellence.
            </p>
          </div>
          
          <Timeline items={milestones} />
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence across our organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Careers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Why Work With Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cutting-edge technology projects</li>
                  <li>• Collaborative work environment</li>
                  <li>• Professional development opportunities</li>
                  <li>• Competitive compensation packages</li>
                  <li>• Global career opportunities</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Current Openings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">AI Engineer</span>
                    <Badge variant="outline">Remote</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Marine Consultant</span>
                    <Badge variant="outline">On-site</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Software Developer</span>
                    <Badge variant="outline">Hybrid</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="text-gray-600 space-y-2 text-sm">
                  <li>1. Submit your application</li>
                  <li>2. Initial screening call</li>
                  <li>3. Technical assessment</li>
                  <li>4. Team interviews</li>
                  <li>5. Offer and onboarding</li>
                </ol>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
