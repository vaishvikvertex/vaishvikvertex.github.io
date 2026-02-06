import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ChevronRight, ArrowRight } from "lucide-react";
import type { Pillar } from "@/data/pillars";

interface PillarHeroProps {
  pillar: Pillar;
}

export default function PillarHero({ pillar }: PillarHeroProps) {
  return (
    <section className={`py-16 bg-gradient-to-br ${pillar.gradient} relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center text-white/80 text-sm mb-8">
          <Link href="/" className="hover:text-white transition-colors flex items-center">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/what-we-do" className="hover:text-white transition-colors">
            Our Pillars
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-white font-medium">{pillar.shortTitle}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pillar.title}
            </h1>
            <p className="text-xl text-white/90 mb-3 font-medium">
              {pillar.tagline}
            </p>
            <p className="text-base text-white/80 mb-6">
              {pillar.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {pillar.stats.projectsCompleted}
                </div>
                <p className="text-white/80 text-sm">Projects Completed</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {pillar.stats.yearsExperience}
                </div>
                <p className="text-white/80 text-sm">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {pillar.stats.clientSatisfaction}
                </div>
                <p className="text-white/80 text-sm">Client Satisfaction</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {pillar.stats.innovations}
                </div>
                <p className="text-white/80 text-sm">Innovations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
