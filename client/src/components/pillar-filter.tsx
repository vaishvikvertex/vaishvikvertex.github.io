import { Button } from "@/components/ui/button";
import { PILLARS } from "@/data/pillar-content";

interface PillarFilterProps {
  selectedPillars: string[];
  onFilterChange: (pillarIds: string[]) => void;
  projectCounts?: Record<string, number>;
}

export default function PillarFilter({
  selectedPillars,
  onFilterChange,
  projectCounts = {},
}: PillarFilterProps) {
  const totalProjects = Object.values(projectCounts).reduce((sum, count) => sum + count, 0);

  const handleToggle = (pillarId: string) => {
    const newSelected = selectedPillars.includes(pillarId)
      ? selectedPillars.filter((id) => id !== pillarId)
      : [...selectedPillars, pillarId];

    onFilterChange(newSelected);
  };

  const handleClearAll = () => {
    onFilterChange([]);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Pillar</h3>
      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedPillars.length === 0 ? "default" : "outline"}
          onClick={handleClearAll}
          className="transition-all"
        >
          All Pillars
          {totalProjects > 0 && (
            <span className="ml-2 text-xs opacity-70">({totalProjects})</span>
          )}
        </Button>

        {PILLARS.map((pillar) => {
          const isSelected = selectedPillars.includes(pillar.id);
          const count = projectCounts[pillar.id] || 0;

          return (
            <Button
              key={pillar.id}
              variant={isSelected ? "default" : "outline"}
              onClick={() => handleToggle(pillar.id)}
              className={`transition-all ${
                isSelected
                  ? `bg-gradient-to-r ${pillar.gradient} text-white hover:opacity-90`
                  : ""
              }`}
            >
              {pillar.shortTitle}
              {count > 0 && (
                <span className="ml-2 text-xs opacity-70">({count})</span>
              )}
            </Button>
          );
        })}
      </div>

      {selectedPillars.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing projects from {selectedPillars.length} pillar(s)
        </div>
      )}
    </div>
  );
}
