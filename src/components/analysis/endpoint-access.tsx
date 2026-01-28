"use client";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { endpointData } from "@/constants/constants";
import { useDarkMode } from "@/hooks/use-dark-mode";
import BoxWrapper from "../box-wrapper";

function EndpointAccess() {
  const isDark = useDarkMode();
  return (
    <BoxWrapper>
      <p className="font-bold">Endpoint Access Pattern</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={endpointData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis type="number" stroke="#8892B0" tick={{ fill: "#8892B0" }} />
          <YAxis
            dataKey="endpoint"
            type="category"
            stroke="#8892B0"
            tick={{ fill: "#8892B0", fontSize: 10 }}
            width={120}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#fff" : "#fafafa",
              border: "1px solid gray",
              borderRadius: "8px",
              color: "black",
            }}
            cursor={false}
          />
          <Legend />

          <Bar dataKey="normal" stackId="a" fill="#00C896" name="Normal" />
          <Bar
            dataKey="suspicious"
            stackId="a"
            fill="#FF3366"
            name="Suspicious"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between rounded border border-[#FF3366]/30 bg-[#FF3366]/10 p-2 text-sm">
          <span className="dark:text-white">/admin/dashboard</span>
          <Badge
            variant="outline"
            className="border-[#FF3366]/30 bg-[#FF3366]/20 text-[#FF3366]"
          >
            High Risk
          </Badge>
        </div>
        <p className="pl-2 text-xs text-[#8892B0]">
          Unusual access to admin endpoints - 94% of requests flagged as
          suspicious
        </p>
      </div>
    </BoxWrapper>
  );
}

export default EndpointAccess;
