import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Database,
  Eye,
  Map,
  TrendingUp,
  Cpu,
  Anchor,
  Box,
  Wind,
  Settings,
  ClipboardCheck,
  Gauge,
  AlertTriangle,
  Search,
  GitCommit,
  Home,
  Zap,
  ShieldAlert,
  AlertCircle,
  Leaf,
  Copy,
  Waves,
  Cog,
  Navigation,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Database,
  Eye,
  Map,
  TrendingUp,
  Cpu,
  Anchor,
  Box,
  Wind,
  Settings,
  ClipboardCheck,
  Gauge,
  AlertTriangle,
  Search,
  GitCommit,
  Home,
  Zap,
  ShieldAlert,
  AlertCircle,
  Leaf,
  Copy,
  Waves,
  Cog,
  Navigation,
  RefreshCw,
};

interface DomainCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  capabilities: string[];
  applications: string[];
  technologies: string[];
  pillarColor?: string;
}

export default function DomainCard({
  id,
  name,
  description,
  icon,
  capabilities,
  applications,
  technologies,
  pillarColor = "text-primary",
}: DomainCardProps) {
  const Icon = iconMap[icon] || Cpu;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={id} className="border rounded-xl">
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-4 text-left w-full">
            <div className={`p-3 rounded-lg bg-gray-100`}>
              <Icon className={`h-6 w-6 ${pillarColor}`} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <Card className="border-0 shadow-none">
            <CardContent className="pt-0 px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Capabilities */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    Key Capabilities
                  </h5>
                  <ul className="space-y-2">
                    {capabilities.map((capability, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Settings className="h-4 w-4 mr-2 text-primary" />
                    Applications
                  </h5>
                  <ul className="space-y-2">
                    {applications.map((application, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Cpu className="h-4 w-4 mr-2 text-primary" />
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
