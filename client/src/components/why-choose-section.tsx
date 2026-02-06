import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  Award,
  Zap,
  GitBranch,
  TrendingUp,
  Shield,
  Activity,
  Users,
  Globe,
  Layers,
  Cpu,
  Phone,
  Target,
  Monitor,
  DollarSign,
  Lightbulb,
  Link as LinkIcon,
  Heart,
  Calculator,
  FileCheck,
  Search,
  GraduationCap,
  Rocket,
  CheckCircle,
  Map,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import type { WhyChooseUs } from "@/data/pillars";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Zap,
  GitBranch,
  TrendingUp,
  Shield,
  Activity,
  Users,
  Globe,
  Layers,
  Cpu,
  Phone,
  Target,
  Monitor,
  DollarSign,
  Lightbulb,
  Link: LinkIcon,
  Heart,
  Calculator,
  FileCheck,
  Search,
  GraduationCap,
  Rocket,
  CheckCircle,
  Map,
  Handshake,
};

interface WhyChooseSectionProps {
  whyChooseUs: WhyChooseUs;
}

export default function WhyChooseSection({ whyChooseUs }: WhyChooseSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {whyChooseUs.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {whyChooseUs.subheading}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {whyChooseUs.reasons.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Award;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Differentiators */}
        <Card className="bg-white border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              What Sets Us Apart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.differentiators.map((diff, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">{diff}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
