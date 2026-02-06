import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PillarHero from "@/components/pillar-hero";
import WhyChooseSection from "@/components/why-choose-section";
import DomainBrochure from "@/components/domain-brochure";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getPillarBySlug } from "@/data/pillar-content";

export default function AICognitive() {
  const pillar = getPillarBySlug("ai-cognitive-computing");

  if (!pillar) {
    return <div>Pillar not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <PillarHero pillar={pillar} />

      {/* Why Choose Us */}
      <WhyChooseSection whyChooseUs={pillar.whyChooseUs} />

      {/* Domains Brochure */}
      <DomainBrochure domains={pillar.domains} pillarColor={pillar.color} />

      {/* Case Studies */}
      {pillar.caseStudies && pillar.caseStudies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world results demonstrating our expertise and commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {pillar.caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-gray-600">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${pillar.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team of experts to discuss how our {pillar.shortTitle} solutions can drive innovation and efficiency in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
