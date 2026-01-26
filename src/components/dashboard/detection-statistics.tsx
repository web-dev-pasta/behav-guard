"use client";
import {
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BoxWrapper from "../box-wrapper";
import { detectionData } from "@/constants/constants";
import { useDarkMode } from "@/hooks/use-dark-mode";
function DetectionStatistics() {
  const isDark = useDarkMode();
  return (
    <BoxWrapper className="flex flex-col justify-between space-y-3">
      <p className="text-center">Detection Statistics</p>

      <ResponsiveContainer width="100%" height={330} className="-translate-x-6">
        <BarChart data={detectionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />
          <XAxis
            dataKey="name"
            stroke="#8892B0"
            tick={{ fill: "#8892B0", fontSize: 12 }}
          />
          <YAxis stroke="#8892B0" tick={{ fill: "#8892B0" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#fff" : "#fafafa",
              border: "1px solid gray",
              borderRadius: "8px",
              color: "#000",
            }}
            cursor={false}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {detectionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </BoxWrapper>
  );
}

export default DetectionStatistics;
