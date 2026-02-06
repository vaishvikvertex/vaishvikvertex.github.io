import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PillarCard from "@/components/pillar-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PILLARS } from "@/data/pillar-content";
import { getPillarStats } from "@/lib/pillar-utils";

export default function WhatWeDo() {
  const stats = getPillarStats();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-indigo-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our 5 Pillars of Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Comprehensive engineering and technology solutions organized into five strategic pillars,
              delivering innovation, expertise, and measurable results across {stats.totalDomains} specialized domains.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/60 backdrop-blur-sm border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stats.totalPillars}</div>
                <p className="text-gray-600 text-sm">Strategic Pillars</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stats.totalDomains}</div>
                <p className="text-gray-600 text-sm">Specialized Domains</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stats.totalProjects}</div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-2">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stats.avgSatisfaction}</div>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pillar Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each pillar represents a core area of expertise, delivering specialized solutions
              tailored to your industry's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PILLARS.map((pillar) => (
              <PillarCard
                key={pillar.id}
                title={pillar.title}
                shortTitle={pillar.shortTitle}
                description={pillar.tagline}
                icon={pillar.icon}
                gradient={pillar.gradient}
                slug={pillar.slug}
                domainCount={pillar.domains.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              An Integrated Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our five pillars work together seamlessly, providing comprehensive solutions
              that address every aspect of your operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Cross-Pillar Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Complex challenges often require expertise from multiple domains. Our integrated
                  approach ensures seamless collaboration across pillars for comprehensive solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unified project teams</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Shared best practices</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Holistic problem-solving</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  End-to-End Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  From initial assessment through design, implementation, and ongoing support,
                  we provide complete lifecycle solutions across all our pillars.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive assessments</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Turnkey implementation</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Continuous optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Industry-Specific Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  While our pillars represent core capabilities, we tailor our approach to your
                  industry's specific requirements and regulatory environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Industry best practices</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our pillars in detail or contact us to discuss how we can help
            achieve your goals with our integrated solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
