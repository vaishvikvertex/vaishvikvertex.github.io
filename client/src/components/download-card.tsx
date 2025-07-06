import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, File, Image } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description: string;
  fileType: "pdf" | "doc" | "image" | "other";
  fileSize: string;
  downloadUrl: string;
  category?: string;
  className?: string;
}

export default function DownloadCard({
  title,
  description,
  fileType,
  fileSize,
  downloadUrl,
  category,
  className
}: DownloadCardProps) {
  const getIcon = () => {
    switch (fileType) {
      case "pdf":
        return <FileText className="h-8 w-8 text-red-500" />;
      case "doc":
        return <File className="h-8 w-8 text-blue-500" />;
      case "image":
        return <Image className="h-8 w-8 text-green-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  const getFileTypeColor = () => {
    switch (fileType) {
      case "pdf":
        return "text-red-500";
      case "doc":
        return "text-blue-500";
      case "image":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getIcon()}
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">
                {fileType.toUpperCase()} • {fileSize}
              </p>
            </div>
          </div>
          {category && (
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90"
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </CardContent>
    </Card>
  );
}
