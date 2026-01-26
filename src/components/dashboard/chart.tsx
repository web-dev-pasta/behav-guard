"use client";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { useTheme } from "next-themes";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
interface AttackType {
  name: string;
  value: number;
  color: string;
}

interface ChartProps {
  attackTypes: AttackType[];
}

function Chart({ attackTypes }: ChartProps) {
  let isDark = useDarkMode();

  return (
    <PieChart>
      <Pie
        data={attackTypes}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        paddingAngle={2}
        dataKey="value"
      >
        {attackTypes.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: isDark ? "#fff" : "#fafafa",
          border: "1px solid gray",
          borderRadius: "8px",
        }}
      />
    </PieChart>
  );
}

export default Chart;
