import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions", className }: FAQProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {filteredItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {filteredItems.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No FAQs found matching your search.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
