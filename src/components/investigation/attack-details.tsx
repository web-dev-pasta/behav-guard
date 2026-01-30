"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Code, Clock, Shield } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  attackMeta,
  detectionLayers,
  topFeatures,
} from "@/constants/constants";
import { Attack, AttackDetailsProps } from "@/types";
import BoxWrapper from "../box-wrapper";
import { useDarkMode } from "@/hooks/use-dark-mode";
import ExportButton from "./export-button";
import TabList from "./tab-list";

function AttackDetails({
  selectedAttack,
  sessionTimeline,
  rawRequest,
  rawResponse,
}: AttackDetailsProps) {
  const data = attackMeta(selectedAttack);
  const isDark = useDarkMode();
  return (
    <BoxWrapper className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4 max-sm:flex-col">
        <div>
          <div className="flex items-center gap-1">
            <Shield className="h-5 w-5 text-[#FF3366]" />
            <p className="translate-y-px text-center">
              Attack Details: {selectedAttack.id}
            </p>
          </div>
          <p className="mt-1 text-sm text-[#8892B0] max-sm:text-center">
            {selectedAttack.timestamp}
          </p>
        </div>
        <div className="flex gap-3">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex gap-2">
                  <Eye className="h-4 w-4" />
                  <span>View Session</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                  <DialogTitle>{selectedAttack.type}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <p>Risk Score : {selectedAttack.riskScore}</p>
                  <p>Source IP : {selectedAttack.ip}</p>
                  <p>Status : {selectedAttack.status}</p>
                </div>
                <DialogFooter className="justify-center!">
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          <ExportButton selectedAttack={selectedAttack} />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
        {data.map((item) => (
          <div
            key={item.label}
            className="b g-white/5 flex flex-col justify-between rounded-lg border p-3"
          >
            <p className="text-xs text-[#8892B0]">{item.label}</p>

            {typeof item.value === "string" ||
            typeof item.value === "number" ? (
              <p className={`${item.valueClass}`}>{item.value}</p>
            ) : (
              item.value
            )}
          </div>
        ))}
      </div>

      <div className="flex-1">
        <Tabs defaultValue="layers" className="h-full gap-4">
          <TabList />
          <TabsContent value="layers" className="h-full">
            <div className="flex h-full flex-col justify-around gap-2">
              {detectionLayers.map((layer, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="max-tiny:flex-col mb-2 flex items-center justify-between">
                    <h4>{layer.layer}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[#8892B0]">
                        Weight: {layer.weight}%
                      </span>
                      <span className="text-sm text-[#00D4FF]">
                        Score: {layer.score}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full bg-linear-to-r from-[#00D4FF] to-[#00C896]"
                        style={{ width: `${layer.score}%` }}
                      />
                    </div>
                    <span className="text-sm text-white">
                      +{layer.contribution.toFixed(1)} pts
                    </span>
                  </div>
                </div>
              ))}
              <div className="rounded-lg border border-[#FF3366]/30 bg-linear-to-r from-[#FF3366]/20 to-[#FFB800]/20 p-4">
                <p className="text-muted-foreground text-sm dark:text-white">
                  <span className="text-[#FF3366]">Final Risk Score:</span>{" "}
                  {selectedAttack.riskScore} / 100
                </p>
                <p className="mt-1 text-xs text-[#8892B0]">
                  Combined score exceeds block threshold (85) - Request
                  automatically blocked
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="flex items-center">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topFeatures} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  type="number"
                  stroke="#8892B0"
                  tick={{ fill: "#8892B0" }}
                />
                <YAxis
                  dataKey="feature"
                  type="category"
                  stroke="#8892B0"
                  tick={{ fill: "#8892B0", fontSize: 12 }}
                  width={150}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#fff" : "#fafafa",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    color: "#000",
                  }}
                  cursor={false}
                />
                <Bar
                  dataKey="importance"
                  fill="#00D4FF"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent
            value="timeline"
            className="flex flex-col justify-center"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sessionTimeline}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="time"
                  stroke="#8892B0"
                  tick={{ fill: "#8892B0" }}
                />
                <YAxis stroke="#8892B0" tick={{ fill: "#8892B0" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#fff" : "#f4f4f4",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    color: "#000",
                  }}
                  cursor={false}
                />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="#00D4FF"
                  strokeWidth={2}
                  name="Requests"
                />
                <Line
                  type="monotone"
                  dataKey="anomaly"
                  stroke="#FF3366"
                  strokeWidth={2}
                  name="Anomaly Score"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 rounded-lg border border-[#FFB800]/30 bg-[#FFB800]/10 p-3">
              <p className="text-sm">
                <Clock className="mr-2 inline h-4 w-4 text-[#FFB800]" />
                <span className="inline-block translate-y-px">
                  Behavioral window: 2 minutes 15 seconds
                </span>
              </p>
              <p className="mt-1 text-xs text-[#8892B0]">
                Anomalous pattern detected at T-5s with sudden spike in requests
                and SQL-like patterns
              </p>
            </div>
          </TabsContent>

          <TabsContent value="raw" className="mt-4 space-y-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-[#00D4FF]" />
                <h4>Request</h4>
              </div>
              <ScrollArea className="h-50">
                <pre className="overflow-auto rounded-lg border border-white/10 bg-gray-100 p-4 text-xs text-[#8892B0] dark:bg-black/30">
                  {rawRequest}
                </pre>
              </ScrollArea>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-[#FF3366]" />
                <h4>Response</h4>
              </div>
              <ScrollArea className="h-50">
                <pre className="overflow-auto rounded-lg border border-white/10 bg-gray-100 p-4 text-xs text-[#8892B0] dark:bg-black/30">
                  {rawResponse}
                </pre>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </BoxWrapper>
  );
}

export default AttackDetails;
