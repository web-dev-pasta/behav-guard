"use client";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface AttackType {
  name: string;
  value: number;
  color: string;
}

interface ChartProps {
  attackTypes: AttackType[];
}

function Chart({ attackTypes }: ChartProps) {
  const isDark = useDarkMode();

  return (
    <ResponsiveContainer width="100%" height={200}>
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
    </ResponsiveContainer>
  );
}

export default Chart;
