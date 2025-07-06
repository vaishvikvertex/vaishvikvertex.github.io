import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SectorCardProps {
  title: string;
  description: string;
  image?: string;
  badge?: string;
  className?: string;
}

export default function SectorCard({ title, description, image, badge, className }: SectorCardProps) {
  return (
    <Card className={`hover:shadow-xl transition-shadow ${className}`}>
      <CardContent className="p-6">
        {image && (
          <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        )}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {badge && (
            <Badge variant="secondary" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
