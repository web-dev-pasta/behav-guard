import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { cn } from "@/lib/utils";
import { FilterAttacksProps } from "@/types";
function FilterAttacks({
  selectedAttack,
  setSelectedAttack,
  filteredData,
}: FilterAttacksProps) {
  const isDark = useDarkMode();
  return (
    <div>
      <ScrollArea className="h-100 sm:h-150">
        <div className="space-y-2">
          {filteredData.map((attack) => (
            <div
              key={attack.id}
              onClick={() => setSelectedAttack(attack)}
              className={`cursor-pointer rounded-lg border p-3 transition-all ${
                selectedAttack.id === attack.id &&
                "border-[#00D4FF] bg-[#00D4FF]/20"
              }`}
            >
              <div className="mb-2 flex items-start justify-between">
                <span
                  className={cn(
                    "text-sm font-bold",
                    isDark ? "text-[#00D4FF]" : "text-black",
                  )}
                >
                  {attack.id}
                </span>
                <Badge
                  variant="outline"
                  className={
                    attack.severity === "critical"
                      ? "border-[#FF3366]/30 bg-[#FF3366]/20 text-[#FF3366]"
                      : attack.severity === "high"
                        ? "border-[#FFB800]/30 bg-[#FFB800]/20 text-[#FFB800]"
                        : "border-[#00D4FF]/30 bg-[#00D4FF]/20 text-[#00D4FF]"
                  }
                >
                  {attack.severity}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-1 text-sm">
                {attack.type}
              </p>
              <p className="text-xs text-[#8892B0]">{attack.timestamp}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-[#8892B0]">{attack.ip}</span>
                <span className="text-sm text-[#FF3366]">
                  Risk: {attack.riskScore}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default FilterAttacks;
