import { Card, CardContent } from "@/components/ui/card";
import { Brain, Box, Network } from "lucide-react";

const innovations = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms for predictive maintenance, anomaly detection, and performance optimization.",
    features: ["Machine Learning & Deep Learning", "Computer Vision & NLP", "Predictive Analytics"],
    color: "bg-primary-100 text-primary-600"
  },
  {
    icon: Box,
    title: "Digital Twin Technology",
    description: "Real-time digital replicas of physical systems for simulation, monitoring, and optimization.",
    features: ["Real-time Monitoring", "Simulation & Modeling", "System Optimization"],
    color: "bg-secondary-100 text-secondary-600"
  },
  {
    icon: Network,
    title: "IoT & Industry 4.0",
    description: "Connected systems and smart manufacturing solutions for enhanced productivity and efficiency.",
    features: ["Smart Sensors & Devices", "Process Automation", "Data Integration"],
    color: "bg-accent-100 text-accent-600"
  }
];

export default function InnovationShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovation at the Core</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering AI-driven solutions, digital twin technology, and advanced analytics to transform industrial operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${innovation.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{innovation.title}</h3>
                  <p className="text-gray-600 mb-4">{innovation.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {innovation.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
