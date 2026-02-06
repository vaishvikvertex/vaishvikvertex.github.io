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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {domains.length} specialized domains delivering comprehensive solutions
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
