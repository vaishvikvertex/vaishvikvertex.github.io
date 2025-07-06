import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ship, 
  Fuel, 
  Factory, 
  Plane, 
  Wind, 
  Anchor,
  Blocks
} from "lucide-react";

interface SectorCardProps {
  title: string;
  description: string;
  image?: string;
  badge?: string;
  className?: string;
}

const getSectorIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'marine operations':
      return Ship;
    case 'oil & gas':
      return Fuel;
    case 'manufacturing':
      return Factory;
    case 'aerospace':
      return Plane;
    case 'bim & digital construction':
    case 'bim':
      return Blocks;
    case 'renewables':
      return Wind;
    case 'ports & harbours':
      return Anchor;
    default:
      return Factory;
  }
};

const getSectorGradient = (title: string) => {
  switch (title.toLowerCase()) {
    case 'marine operations':
      return 'from-blue-500 to-cyan-600';
    case 'oil & gas':
      return 'from-orange-500 to-red-600';
    case 'manufacturing':
      return 'from-gray-500 to-slate-600';
    case 'aerospace':
      return 'from-indigo-500 to-purple-600';
    case 'bim & digital construction':
    case 'bim':
      return 'from-purple-500 to-pink-600';
    case 'renewables':
      return 'from-green-500 to-emerald-600';
    case 'ports & harbours':
      return 'from-teal-500 to-blue-600';
    default:
      return 'from-gray-500 to-slate-600';
  }
};

export default function SectorCard({ title, description, image, badge, className }: SectorCardProps) {
  const Icon = getSectorIcon(title);
  const gradient = getSectorGradient(title);
  
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${className}`}>
      <CardContent className="p-0">
        {/* Header Image Section */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden rounded-t-lg`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
          </div>
          {badge && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-800">
                {badge}
              </Badge>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
