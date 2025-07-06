import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type?: "milestone" | "achievement" | "launch" | "partnership";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  const getTypeColor = (type: TimelineItem["type"]) => {
    switch (type) {
      case "milestone":
        return "bg-primary";
      case "achievement":
        return "bg-secondary";
      case "launch":
        return "bg-accent";
      case "partnership":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-start">
              <div className={`absolute left-6 w-4 h-4 rounded-full ${getTypeColor(item.type)}`}></div>
              <div className="ml-16">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-sm font-medium text-primary">{item.year}</div>
                  {item.type && (
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
