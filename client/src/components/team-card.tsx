import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  department: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
  className?: string;
}

export default function TeamCard({ 
  name, 
  position, 
  department, 
  bio, 
  image, 
  linkedin, 
  email, 
  className 
}: TeamCardProps) {
  return (
    <Card className={`hover:shadow-xl transition-shadow ${className}`}>
      <CardContent className="p-6 text-center">
        {image ? (
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-400">Photo</span>
          </div>
        ) : (
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-primary text-2xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-2">{position}</p>
        <Badge variant="secondary" className="text-xs mb-4">
          {department}
        </Badge>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        
        <div className="flex justify-center space-x-3">
          {linkedin && (
            <a href={linkedin} className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
