"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", totalRequests: 372, blocked: 72 },
  { date: "2024-04-02", totalRequests: 277, blocked: 47 },
  { date: "2024-04-03", totalRequests: 287, blocked: 87 },
  { date: "2024-04-04", totalRequests: 502, blocked: 102 },
  { date: "2024-04-05", totalRequests: 663, blocked: 163 },
  { date: "2024-04-06", totalRequests: 641, blocked: 141 },
  { date: "2024-04-07", totalRequests: 425, blocked: 125 },
  { date: "2024-04-08", totalRequests: 729, blocked: 229 },
  { date: "2024-04-09", totalRequests: 169, blocked: 69 },
  { date: "2024-04-10", totalRequests: 451, blocked: 151 },
  { date: "2024-04-11", totalRequests: 677, blocked: 177 },
  { date: "2024-04-12", totalRequests: 502, blocked: 102 },
  { date: "2024-04-13", totalRequests: 722, blocked: 222 },
  { date: "2024-04-14", totalRequests: 357, blocked: 57 },
  { date: "2024-04-15", totalRequests: 290, blocked: 90 },
  { date: "2024-04-16", totalRequests: 328, blocked: 128 },
  { date: "2024-04-17", totalRequests: 806, blocked: 206 },
  { date: "2024-04-18", totalRequests: 774, blocked: 174 },
  { date: "2024-04-19", totalRequests: 423, blocked: 123 },
  { date: "2024-04-20", totalRequests: 239, blocked: 39 },
  { date: "2024-04-21", totalRequests: 337, blocked: 137 },
  { date: "2024-04-22", totalRequests: 394, blocked: 94 },
  { date: "2024-04-23", totalRequests: 368, blocked: 68 },
  { date: "2024-04-24", totalRequests: 677, blocked: 177 },
  { date: "2024-04-25", totalRequests: 465, blocked: 165 },
  { date: "2024-04-26", totalRequests: 205, blocked: 105 },
  { date: "2024-04-27", totalRequests: 803, blocked: 203 },
  { date: "2024-04-28", totalRequests: 302, blocked: 102 },
  { date: "2024-04-29", totalRequests: 555, blocked: 155 },
  { date: "2024-04-30", totalRequests: 834, blocked: 234 },
  { date: "2024-05-01", totalRequests: 385, blocked: 85 },
  { date: "2024-05-02", totalRequests: 603, blocked: 103 },
  { date: "2024-05-03", totalRequests: 437, blocked: 137 },
  { date: "2024-05-04", totalRequests: 805, blocked: 205 },
  { date: "2024-05-05", totalRequests: 871, blocked: 171 },
  { date: "2024-05-06", totalRequests: 1018, blocked: 218 },
  { date: "2024-05-07", totalRequests: 688, blocked: 188 },
  { date: "2024-05-08", totalRequests: 359, blocked: 59 },
  { date: "2024-05-09", totalRequests: 407, blocked: 107 },
  { date: "2024-05-10", totalRequests: 623, blocked: 123 },
  { date: "2024-05-11", totalRequests: 605, blocked: 105 },
  { date: "2024-05-12", totalRequests: 437, blocked: 137 },
  { date: "2024-05-13", totalRequests: 357, blocked: 157 },
  { date: "2024-05-14", totalRequests: 938, blocked: 238 },
  { date: "2024-05-15", totalRequests: 853, blocked: 153 },
  { date: "2024-05-16", totalRequests: 738, blocked: 138 },
  { date: "2024-05-17", totalRequests: 919, blocked: 219 },
  { date: "2024-05-18", totalRequests: 665, blocked: 165 },
  { date: "2024-05-19", totalRequests: 415, blocked: 115 },
  { date: "2024-05-20", totalRequests: 407, blocked: 107 },
  { date: "2024-05-21", totalRequests: 222, blocked: 22 },
  { date: "2024-05-22", totalRequests: 201, blocked: 101 },
  { date: "2024-05-23", totalRequests: 542, blocked: 142 },
  { date: "2024-05-24", totalRequests: 514, blocked: 114 },
  { date: "2024-05-25", totalRequests: 451, blocked: 151 },
  { date: "2024-05-26", totalRequests: 383, blocked: 83 },
  { date: "2024-05-27", totalRequests: 880, blocked: 180 },
  { date: "2024-05-28", totalRequests: 423, blocked: 123 },
  { date: "2024-05-29", totalRequests: 208, blocked: 108 },
  { date: "2024-05-30", totalRequests: 620, blocked: 120 },
  { date: "2024-05-31", totalRequests: 408, blocked: 108 },
  { date: "2024-06-01", totalRequests: 378, blocked: 78 },
  { date: "2024-06-02", totalRequests: 880, blocked: 180 },
  { date: "2024-06-03", totalRequests: 263, blocked: 63 },
  { date: "2024-06-04", totalRequests: 819, blocked: 119 },
  { date: "2024-06-05", totalRequests: 228, blocked: 28 },
  { date: "2024-06-06", totalRequests: 544, blocked: 144 },
  { date: "2024-06-07", totalRequests: 693, blocked: 193 },
  { date: "2024-06-08", totalRequests: 705, blocked: 105 },
  { date: "2024-06-09", totalRequests: 918, blocked: 218 },
  { date: "2024-06-10", totalRequests: 355, blocked: 55 },
  { date: "2024-06-11", totalRequests: 242, blocked: 42 },
  { date: "2024-06-12", totalRequests: 912, blocked: 212 },
  { date: "2024-06-13", totalRequests: 211, blocked: 111 },
  { date: "2024-06-14", totalRequests: 806, blocked: 106 },
  { date: "2024-06-15", totalRequests: 657, blocked: 157 },
  { date: "2024-06-16", totalRequests: 681, blocked: 181 },
  { date: "2024-06-17", totalRequests: 995, blocked: 195 },
  { date: "2024-06-18", totalRequests: 277, blocked: 77 },
  { date: "2024-06-19", totalRequests: 631, blocked: 131 },
  { date: "2024-06-20", totalRequests: 858, blocked: 158 },
  { date: "2024-06-21", totalRequests: 379, blocked: 79 },
  { date: "2024-06-22", totalRequests: 587, blocked: 87 },
  { date: "2024-06-23", totalRequests: 1010, blocked: 210 },
  { date: "2024-06-24", totalRequests: 312, blocked: 112 },
  { date: "2024-06-25", totalRequests: 331, blocked: 131 },
  { date: "2024-06-26", totalRequests: 814, blocked: 214 },
  { date: "2024-06-27", totalRequests: 938, blocked: 138 },
  { date: "2024-06-28", totalRequests: 349, blocked: 149 },
  { date: "2024-06-29", totalRequests: 263, blocked: 63 },
  { date: "2024-06-30", totalRequests: 846, blocked: 246 },
];

const chartConfig = {
  totalRequests: {
    label: "Total Requests",
    color: "var(--chart-1)",
  },
  blocked: {
    label: "Blocked",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");

    let daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;
    if (timeRange === "7d") daysToSubtract = 7;

    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    return date >= startDate;
  });

  return (
    <section className="mb-10 px-4">
      <Card className="page-container dark:bg-navy pt-0">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardDescription>
              Request Traffic & Blocked Attempts
            </CardDescription>
          </div>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillBlocked" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--chart-2)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-2)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />

              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                    indicator="dot"
                  />
                }
              />

              <Area
                dataKey="blocked"
                type="natural"
                fill="url(#fillBlocked)"
                stroke="var(--chart-2)"
                stackId="a"
              />
              <Area
                dataKey="totalRequests"
                type="natural"
                fill="url(#fillTotal)"
                stroke="var(--chart-1)"
                stackId="a"
              />

              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
}
