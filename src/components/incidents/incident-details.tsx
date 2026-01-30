import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Eye, Clock, User, FileText } from "lucide-react";
import { Incident } from "@/types";
import BoxWrapper from "../box-wrapper";
import { getSeverityColor, getStatusColor } from "@/lib/helper";
import IncidentGenerate from "./incident-generate";
import ViewIncident from "./view-incident";
import Link from "next/link";
import { overviewSections } from "@/constants/constants";

function IncidentDetails({ selectedIncident }: { selectedIncident: Incident }) {
  return (
    <BoxWrapper className="space-y-4 lg:col-span-2">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
        <div>
          <div className="flex items-center gap-2">
            {selectedIncident.title}
          </div>
          <p className="mt-1 text-sm text-[#8892B0] max-sm:text-center">
            {selectedIncident.id}
          </p>
        </div>
        <div className="flex gap-2">
          <ViewIncident selectedIncident={selectedIncident} />
          <IncidentGenerate selectedIncident={selectedIncident} />
        </div>
      </div>
      <div className="tiny:grid-cols-2 grid grid-cols-1 gap-4">
        <div className="rounded-lg border p-3 dark:bg-white/5">
          <p className="text-[#88 92B0] text-xs">Severity</p>
          <Badge
            variant="outline"
            className={`mt-1 ${getSeverityColor(selectedIncident.severity)}`}
          >
            {selectedIncident.severity}
          </Badge>
        </div>
        <div className="rounded-lg border bg-white/5 p-3">
          <p className="text-xs text-[#8892B0]">Status</p>
          <Badge className={`mt-1 ${getStatusColor(selectedIncident.status)}`}>
            {selectedIncident.status}
          </Badge>
        </div>
        <div className="rounded-lg border bg-white/5 p-3">
          <p className="text-xs text-[#8892B0]">Attack Type</p>
          <p className="mt-1 text-sm">{selectedIncident.attackType}</p>
        </div>
        <div className="rounded-lg border bg-white/5 p-3">
          <p className="text-xs text-[#8892B0]">Total Attacks</p>
          <p className="mt-1 text-sm">{selectedIncident.attackCount}</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="gap-4">
        <div className="flex max-lg:justify-center">
          <TabsList className="flex-wrap border bg-white/5 max-sm:h-[initial]!">
            {[
              { value: "overview", label: "Overview" },
              { value: "timeline", label: "Timeline" },
              { value: "notes", label: "Notes" },
              { value: "evidence", label: "Evidence" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="max-sm:h-[initial]!"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-4">
          {overviewSections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-lg border bg-gray-100 p-4 dark:bg-white/5"
              >
                <h4 className="mb-2 flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4 text-[#00D4FF]" />}
                  {section.title}
                </h4>

                {section.content(selectedIncident)}
              </div>
            );
          })}

          <div className="rounded-lg border border-[#FFB800]/30 bg-[#FFB800]/10 p-4">
            <h4 className="mb-2">Recommended Actions</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-[#8892B0]">
              <li>Review and block suspicious IP addresses</li>
              <li>Implement rate limiting on affected endpoints</li>
              <li>Update WAF rules to prevent similar attacks</li>
              <li>Notify affected users if data was compromised</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="timeline">
          <div className="space-y-3">
            {[
              {
                time: "14:45:00",
                action: "Investigation started by Sarah Chen",
                type: "update",
              },
              {
                time: "14:32:15",
                action: "Attack pattern detected - SQL injection",
                type: "detection",
              },
              {
                time: "14:31:45",
                action: "Multiple failed login attempts",
                type: "event",
              },
              {
                time: "14:30:00",
                action: "Incident created automatically",
                type: "creation",
              },
            ].map((event, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      event.type === "detection"
                        ? "bg-[#FF3366]"
                        : event.type === "update"
                          ? "bg-[#00D4FF]"
                          : event.type === "creation"
                            ? "bg-[#00C896]"
                            : "bg-[#8892B0]"
                    }`}
                  />
                  {index < 3 && (
                    <div className="h-12 w-0.5 bg-gray-200 dark:bg-white/10" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm">{event.action}</p>
                  <p className="text-xs text-[#8892B0]">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notes">
          <div className="space-y-3">
            <div className="rounded-lg border bg-white/30 p-3 dark:bg-white/5">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <p className="text-sm">Sarah Chen</p>
                  <p className="text-xs text-[#8892B0]">2024-11-01 14:45:00</p>
                </div>
              </div>
              <p className="text-sm text-[#8892B0]">
                Coordinated attack from multiple IPs. Pattern suggests automated
                tool usage. Implementing additional rate limiting on affected
                endpoints.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <Input placeholder="Add a note..." className="mb-2" />
              <Button
                size="sm"
                className="bg-[#00D4FF] text-[#0A0E27] hover:bg-[#00D4FF]/80"
              >
                Add Note{/* Add after implemnting backend */}
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="evidence">
          <div className="space-y-2">
            {[
              {
                name: "attack_logs_14-30-00.json",
                size: "2.4 MB",
                type: "JSON",
                file: "/data/attack_logs.json",
              },
              {
                name: "network_capture.pcap",
                size: "15.8 MB",
                type: "PCAP",
                file: "/data/network_capture.txt",
              },
              {
                name: "sql_injection_samples.txt",
                size: "124 KB",
                type: "Text",
                file: "/data/sql_injection_samples.txt",
              },
            ].map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border bg-white/5 p-3 dark:border-white/10"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#00D4FF]" />
                  <div>
                    <p className="text-sm">{file.name}</p>
                    <p className="text-xs text-[#8892B0]">
                      {file.type} • {file.size}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hover:bg-white/5"
                >
                  <Link href={file.file} download>
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </BoxWrapper>
  );
}

export default IncidentDetails;
