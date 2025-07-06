import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building,
  Users,
  MessageSquare,
  ArrowRight
} from "lucide-react";

type NewsletterFormData = z.infer<typeof insertNewsletterSchema>;

const contactInfo = [
  {
    icon: Building,
    title: "Headquarters",
    details: ["123 Innovation Drive", "Tech District", "San Francisco, CA 94105"],
    color: "bg-primary-100 text-primary"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Support)"],
    color: "bg-secondary-100 text-secondary"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@techcorp.com", "support@techcorp.com"],
    color: "bg-accent-100 text-accent"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    color: "bg-blue-100 text-blue-600"
  }
];

const officeLocations = [
  {
    city: "San Francisco",
    country: "USA",
    address: "123 Innovation Drive, Tech District, CA 94105",
    phone: "+1 (555) 123-4567",
    type: "Headquarters"
  },
  {
    city: "London",
    country: "UK",
    address: "45 Tech Square, Canary Wharf, E14 5AB",
    phone: "+44 20 7123 4567",
    type: "European Office"
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "88 Marina Bay Street, #15-01, 018981",
    phone: "+65 6123 4567",
    type: "Asia Pacific Office"
  }
];

const quickLinks = [
  { title: "Career Opportunities", href: "/about", description: "Join our growing team" },
  { title: "Partner with Us", href: "/about", description: "Strategic partnerships" },
  { title: "Technical Support", href: "/knowledge-hub", description: "24/7 assistance" },
  { title: "Media Inquiries", href: "/media", description: "Press and media relations" }
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubscribing, setIsSubscribing] = useState(false);

  const newsletterForm = useForm<NewsletterFormData>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeNewsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      newsletterForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onNewsletterSubmit = async (data: NewsletterFormData) => {
    setIsSubscribing(true);
    await subscribeNewsletterMutation.mutateAsync(data);
    setIsSubscribing(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your next project? Contact our team of experts for personalized solutions 
              and discover how we can help transform your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Main Office</h4>
                      <p className="text-gray-600">123 Innovation Drive<br/>Tech District, San Francisco<br/>CA 94105, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567<br/>+1 (555) 123-4568 (Support)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@techcorp.com<br/>support@techcorp.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-secondary mr-2" />
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href} 
                        className="text-primary hover:text-primary/80 text-sm block p-2 rounded hover:bg-primary/5 transition-colors"
                      >
                        <div className="font-medium">{link.title}</div>
                        <div className="text-xs text-gray-500">{link.description}</div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices around the world to serve our global clients with local expertise and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{office.city}</CardTitle>
                      <p className="text-gray-600">{office.country}</p>
                    </div>
                    <span className="bg-primary-100 text-primary text-xs px-2 py-1 rounded-full">
                      {office.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest updates, insights, and industry news.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              className="flex-1"
                              {...field} 
                            />
                          </FormControl>
                          <Button 
                            type="submit" 
                            className="bg-primary hover:bg-primary/90 px-8"
                            disabled={isSubscribing}
                          >
                            {isSubscribing ? "Subscribing..." : "Subscribe"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time. No spam, just valuable insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For urgent technical support or emergency situations, our 24/7 support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Send Urgent Email
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
