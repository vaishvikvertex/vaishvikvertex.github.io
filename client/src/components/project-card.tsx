import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Ship, Factory, Plane, Wind, Fuel, Anchor, Blocks } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  sector: string;
  year: string;
  image?: string;
  className?: string;
}

const getSectorIcon = (sector: string) => {
  switch (sector.toLowerCase()) {
    case 'marine':
    case 'marine operations':
      return Ship;
    case 'oil & gas':
    case 'energy':
      return Fuel;
    case 'manufacturing':
    case 'industrial':
      return Factory;
    case 'aerospace':
      return Plane;
    case 'bim':
    case 'construction':
    case 'digital modeling':
      return Blocks;
    case 'renewables':
    case 'green tech':
      return Wind;
    case 'ports':
    case 'infrastructure':
      return Anchor;
    default:
      return Factory;
  }
};

const getSectorColor = (sector: string) => {
  switch (sector.toLowerCase()) {
    case 'marine':
    case 'marine operations':
      return 'from-blue-500 to-cyan-600';
    case 'oil & gas':
    case 'energy':
      return 'from-orange-500 to-red-600';
    case 'manufacturing':
    case 'industrial':
      return 'from-gray-500 to-slate-600';
    case 'aerospace':
      return 'from-indigo-500 to-purple-600';
    case 'bim':
    case 'construction':
    case 'digital modeling':
      return 'from-purple-500 to-pink-600';
    case 'renewables':
    case 'green tech':
      return 'from-green-500 to-emerald-600';
    case 'ports':
    case 'infrastructure':
      return 'from-teal-500 to-blue-600';
    default:
      return 'from-gray-500 to-slate-600';
  }
};

export default function ProjectCard({ title, description, sector, year, image, className }: ProjectCardProps) {
  const Icon = getSectorIcon(sector);
  const gradient = getSectorColor(sector);
  
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${className}`}>
      {/* Project Header Image */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-12 w-12 text-white/70 group-hover:text-white transition-colors" />
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
            {year}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-xs">
            {sector}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
          <span className="font-medium text-sm">View Case Study</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}
