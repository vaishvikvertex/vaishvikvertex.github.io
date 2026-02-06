import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Brain,
  Ship,
  Activity,
  Shield,
  Bot,
  ArrowRight,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Ship,
  Activity,
  Shield,
  Bot,
};

interface PillarCardProps {
  title: string;
  shortTitle?: string;
  description: string;
  icon: string;
  gradient: string;
  slug: string;
  domainCount?: number;
  className?: string;
}

export default function PillarCard({
  title,
  shortTitle,
  description,
  icon,
  gradient,
  slug,
  domainCount,
  className = "",
}: PillarCardProps) {
  const Icon = iconMap[icon] || Brain;

  return (
    <Link href={`/pillars/${slug}`}>
      <Card
        className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-transparent ${className}`}
      >
        {/* Gradient Header */}
        <CardHeader className="p-0">
          <div
            className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center rounded-t-xl relative overflow-hidden`}
          >
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

            <Icon className="h-24 w-24 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {shortTitle || title}
            </h3>
            {domainCount && (
              <Badge variant="outline" className="ml-2">
                {domainCount} domains
              </Badge>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          {/* Learn More Arrow */}
          <div className="flex items-center text-primary font-medium text-sm">
            <span>Explore Pillar</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
