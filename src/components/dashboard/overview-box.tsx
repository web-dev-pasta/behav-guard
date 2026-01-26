import React from "react";
import { formatScore, getRiskColor } from "@/lib/helper";

function OverviewBox({ item }: any) {
  const isNumber = typeof item.score === "number";
  const color =
    item.isRisk && isNumber
      ? getRiskColor(item.score)
      : (item.iconColor ?? "#8892B0");

  const Icon = item.icon;

  return (
    <div
      key={item.label}
      className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4 shadow md:space-y-3"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-black dark:text-[#8892B0]">{item.label}</p>

        <div
          className="rounded-md p-2"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-3xl font-semibold" style={{ color }}>
          {formatScore(item.score)}
        </span>
        <span className="text-xs text-black dark:text-[#8892B0]">
          {item.description}
        </span>
      </div>
    </div>
  );
}

export default OverviewBox;
