"use client";
import { AlertCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import BoxWrapper from "../box-wrapper";
import { useDarkMode } from "@/hooks/use-dark-mode";

function BehaviouralTimeline() {
  const sessionData = Array.from({ length: 60 }, (_, i) => ({
    time: `${i}s`,
    requestRate: Math.floor(Math.random() * 30) + (i > 45 ? 50 : 10),
    errorRate:
      i > 45
        ? Math.floor(Math.random() * 40) + 20
        : Math.floor(Math.random() * 5),
    anomalyScore:
      i > 45
        ? Math.floor(Math.random() * 60) + 40
        : Math.floor(Math.random() * 20),
    normal: 20,
  }));
  const isDark = useDarkMode();
  return (
    <BoxWrapper className="my-10 space-y-6">
      <p className="font-bold">Behavioral Timeline</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sessionData}>
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
          <Line
            type="monotone"
            dataKey="requestRate"
            stroke="#00D4FF"
            strokeWidth={2}
            name="Request Rate"
          />
          <Line
            type="monotone"
            dataKey="errorRate"
            stroke="#FFB800"
            strokeWidth={2}
            name="Error Rate %"
          />
          <Line
            type="monotone"
            dataKey="anomalyScore"
            stroke="#FF3366"
            strokeWidth={2}
            name="Anomaly Score"
          />
          <Line
            type="monotone"
            dataKey="normal"
            stroke="#00C896"
            strokeWidth={1}
            strokeDasharray="5 5"
            name="Normal Threshold"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 rounded-lg border border-[#FF3366]/30 bg-[#FF3366]/10 p-3">
        <div className="flex items-start gap-2">
          <AlertCircle className="mt-0.5 min-h-4 min-w-4 text-[#FF3366]" />
          <div>
            <p className="text-sm text-black dark:text-white">
              Anomalous Behavior Detected
            </p>
            <p className="mt-1 text-xs text-[#8892B0]">
              At T+45s: Request rate spiked 5x above baseline, error rate
              increased to 35%, and anomaly score exceeded threshold
            </p>
          </div>
        </div>
      </div>
    </BoxWrapper>
  );
}

export default BehaviouralTimeline;
