"use client";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import BoxWrapper from "../box-wrapper";

function ParameterVariations() {
  const isDark = useDarkMode();
  const parameterData = Array.from({ length: 30 }, (_, i) => ({
    time: i,
    paramCount: Math.floor(Math.random() * 5) + 2 + (i > 20 ? 10 : 0),
    uniqueValues: Math.floor(Math.random() * 10) + 5 + (i > 20 ? 15 : 0),
  }));
  return (
    <BoxWrapper className="space-y-4">
      <p className="font-bold">Parameter Variations</p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={parameterData}>
          <defs>
            <linearGradient id="colorParams" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorValues" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFB800" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FFB800" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="time" stroke="#8892B0" tick={{ fill: "#8892B0" }} />
          <YAxis stroke="#8892B0" tick={{ fill: "#8892B0" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#fff" : "#fafafa",
              border: "1px solid gray",
              borderRadius: "8px",
              color: "black",
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="paramCount"
            stroke="#00D4FF"
            fillOpacity={1}
            fill="url(#colorParams)"
            name="Parameter Count"
          />
          <Area
            type="monotone"
            dataKey="uniqueValues"
            stroke="#FFB800"
            fillOpacity={1}
            fill="url(#colorValues)"
            name="Unique Values"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 rounded-lg border border-[#FFB800]/30 bg-[#FFB800]/10 p-3">
        <p className="text-sm dark:text-white">
          <TrendingUp className="mr-2 inline h-4 w-4 text-[#FFB800]" />
          Parameter fuzzing detected
        </p>
        <p className="mt-1 text-xs text-[#8892B0]">
          Rapid increase in parameter variations suggests automated attack tool
          usage
        </p>
      </div>
    </BoxWrapper>
  );
}

export default ParameterVariations;
