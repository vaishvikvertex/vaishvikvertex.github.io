import type { Pillar, Domain } from "@/data/pillars";
import { PILLARS } from "@/data/pillar-content";

export function getAllPillars(): Pillar[] {
  return PILLARS;
}

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}

export function getPillarById(id: string): Pillar | undefined {
  return PILLARS.find((p) => p.id === id);
}

export function getAllDomains(): Domain[] {
  return PILLARS.flatMap((pillar) => pillar.domains);
}

export function getDomainsByPillar(pillarId: string): Domain[] {
  const pillar = getPillarById(pillarId);
  return pillar ? pillar.domains : [];
}

export function getTotalDomainCount(): number {
  return PILLARS.reduce((total, pillar) => total + pillar.domains.length, 0);
}

export function getPillarColor(pillarId: string): {
  gradient: string;
  color: string;
  bgColor: string;
  borderColor: string;
} {
  const pillar = getPillarById(pillarId);
  return pillar
    ? {
        gradient: pillar.gradient,
        color: pillar.color,
        bgColor: pillar.bgColor,
        borderColor: pillar.borderColor,
      }
    : {
        gradient: "from-gray-400 to-gray-600",
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
      };
}

export function getPillarStats() {
  const totalProjects = PILLARS.reduce((sum, p) => {
    const num = parseInt(p.stats.projectsCompleted.replace("+", ""));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);

  const totalDomains = getTotalDomainCount();

  return {
    totalProjects: `${totalProjects}+`,
    totalPillars: PILLARS.length,
    totalDomains,
    avgSatisfaction: "98%",
  };
}
