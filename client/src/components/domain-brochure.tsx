import DomainCard from "@/components/domain-card";
import type { Domain } from "@/data/pillars";

interface DomainBrochureProps {
  domains: Domain[];
  pillarColor?: string;
}

export default function DomainBrochure({
  domains,
  pillarColor,
}: DomainBrochureProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Domains of Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive capabilities across {domains.length} specialized domains, delivering end-to-end solutions tailored to your needs
          </p>
        </div>

        {/* Domain Cards */}
        <div className="space-y-4">
          {domains.map((domain) => (
            <DomainCard
              key={domain.id}
              {...domain}
              pillarColor={pillarColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
