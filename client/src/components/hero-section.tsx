import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Engineering the Future with{" "}
              <span className="text-primary">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leading provider of structural analysis, digital twin development, and AI-based solutions across marine, oil & gas, aerospace, and industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/what-we-do">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-3">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">AI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Advanced Technology</h3>
                  <p className="text-gray-600">Digital Twin & AI Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
