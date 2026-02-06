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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {whyChooseUs.subheading}
          </p>
        </div>

        {/* Reasons Grid - Simplified to first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {whyChooseUs.reasons.slice(0, 3).map((reason, index) => {
            const Icon = iconMap[reason.icon] || Award;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
