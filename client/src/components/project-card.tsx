import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  sector: string;
  year: string;
  image?: string;
  className?: string;
}

export default function ProjectCard({ title, description, sector, year, image, className }: ProjectCardProps) {
  return (
    <Card className={`hover:shadow-xl transition-shadow overflow-hidden ${className}`}>
      {image && (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Project Image</span>
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {sector}
          </Badge>
          <span className="text-gray-500 text-xs">{year}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-medium text-sm">View Case Study</span>
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
