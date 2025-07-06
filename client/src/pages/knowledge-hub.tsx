import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import DownloadCard from "@/components/download-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { 
  BookOpen, 
  FileText, 
  Download, 
  Search,
  Clock,
  ArrowRight
} from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Industrial AI: Trends and Predictions",
    excerpt: "Exploring how artificial intelligence is reshaping industrial operations and what to expect in the coming years.",
    category: "AI & Technology",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "Dr. Sarah Chen"
  },
  {
    title: "Digital Twin Implementation: A Step-by-Step Guide",
    excerpt: "Comprehensive guide to implementing digital twin technology in your industrial operations.",
    category: "Digital Transformation",
    readTime: "12 min read",
    date: "March 10, 2024",
    author: "Michael Rodriguez"
  },
  {
    title: "Predictive Maintenance: ROI Calculator and Best Practices",
    excerpt: "How to calculate the return on investment for predictive maintenance systems and implementation strategies.",
    category: "Maintenance",
    readTime: "6 min read",
    date: "March 5, 2024",
    author: "Dr. James Wilson"
  },
  {
    title: "Marine Engineering in the Age of Automation",
    excerpt: "The impact of automation on marine engineering and the opportunities it creates for the industry.",
    category: "Marine",
    readTime: "10 min read",
    date: "February 28, 2024",
    author: "Emma Thompson"
  }
];

const whitepapers = [
  {
    title: "Digital Twin Technology for Industrial Operations",
    description: "Comprehensive analysis of digital twin implementation strategies and ROI calculations.",
    fileType: "pdf" as const,
    fileSize: "2.5 MB",
    downloadUrl: "#",
    category: "Digital Transformation"
  },
  {
    title: "AI in Predictive Maintenance: Industry Report 2024",
    description: "Latest trends and insights on artificial intelligence applications in predictive maintenance.",
    fileType: "pdf" as const,
    fileSize: "3.2 MB",
    downloadUrl: "#",
    category: "AI & Technology"
  },
  {
    title: "Marine Safety Standards and Compliance Guide",
    description: "Essential guide to marine safety regulations and compliance requirements.",
    fileType: "pdf" as const,
    fileSize: "1.8 MB",
    downloadUrl: "#",
    category: "Marine"
  },
  {
    title: "IoT Implementation Framework for Manufacturing",
    description: "Step-by-step framework for implementing IoT solutions in manufacturing environments.",
    fileType: "pdf" as const,
    fileSize: "2.1 MB",
    downloadUrl: "#",
    category: "IoT & Industry 4.0"
  }
];

const faqItems = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including marine, oil & gas, aerospace, manufacturing, renewables, and more. Our solutions are designed to address the specific challenges of each sector."
  },
  {
    question: "How long does it take to implement a digital twin solution?",
    answer: "Implementation time varies depending on the complexity of your system and requirements. Typically, basic digital twin implementations take 3-6 months, while complex industrial systems may take 6-12 months."
  },
  {
    question: "What is the ROI of predictive maintenance systems?",
    answer: "Most clients see ROI within 6-18 months. Benefits include 20-40% reduction in maintenance costs, 10-20% increase in equipment uptime, and 15-25% reduction in spare parts inventory."
  },
  {
    question: "Do you provide training for your solutions?",
    answer: "Yes, we provide comprehensive training programs for all our solutions. This includes on-site training, online courses, and ongoing support to ensure your team can effectively use and maintain the systems."
  },
  {
    question: "Can your solutions integrate with existing systems?",
    answer: "Absolutely. Our solutions are designed to integrate seamlessly with existing industrial systems, SCADA systems, ERP platforms, and other business applications."
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive support including 24/7 technical support, regular system updates, preventive maintenance, and performance optimization services."
  }
];

export default function KnowledgeHub() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Knowledge Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, resources, and technical expertise to help you stay ahead in the evolving industrial landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Technical Articles</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <p className="text-gray-600">White Papers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <p className="text-gray-600">Resources Downloaded</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Content Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="blog" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="blog">Blog</TabsTrigger>
                <TabsTrigger value="whitepapers">White Papers</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="blog" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Blog</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Latest insights on AI, digital twins, and engineering innovations from our expert team.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          <span>{post.author}</span> • <span>{post.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="whitepapers" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">White Papers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  In-depth research and analysis on industry trends, technologies, and best practices.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whitepapers.map((paper, index) => (
                  <DownloadCard key={index} {...paper} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="downloads" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download Center</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access our comprehensive library of resources, guides, and documentation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DownloadCard
                  title="Implementation Checklist"
                  description="Complete checklist for digital twin implementation projects."
                  fileType="pdf"
                  fileSize="1.2 MB"
                  downloadUrl="#"
                  category="Implementation"
                />
                <DownloadCard
                  title="ROI Calculator Template"
                  description="Excel template for calculating return on investment for predictive maintenance."
                  fileType="other"
                  fileSize="856 KB"
                  downloadUrl="#"
                  category="Financial"
                />
                <DownloadCard
                  title="System Requirements Guide"
                  description="Technical requirements and specifications for our software solutions."
                  fileType="pdf"
                  fileSize="2.3 MB"
                  downloadUrl="#"
                  category="Technical"
                />
                <DownloadCard
                  title="Training Materials"
                  description="Comprehensive training materials and user guides for our platforms."
                  fileType="other"
                  fileSize="5.1 MB"
                  downloadUrl="#"
                  category="Training"
                />
                <DownloadCard
                  title="Case Study Collection"
                  description="Collection of detailed case studies from successful implementations."
                  fileType="pdf"
                  fileSize="4.2 MB"
                  downloadUrl="#"
                  category="Case Studies"
                />
                <DownloadCard
                  title="Product Brochures"
                  description="Detailed brochures for all our products and solutions."
                  fileType="pdf"
                  fileSize="3.8 MB"
                  downloadUrl="#"
                  category="Marketing"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="faq" className="space-y-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Answers to common questions about our services, technologies, and implementation processes.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <FAQ items={faqItems} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights, updates, and technical resources.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-primary hover:bg-primary/90 px-8 py-3">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
