import { Suspense, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Incident } from "@/types";
import { mockIncidents } from "@/constants/constants";
import BoxWrapper from "../box-wrapper";
import { getSeverityColor, getStatusColor } from "@/lib/helper";
import IncidentsSearch from "./incidents-search";

function IncidentsData({
  selectedIncident,
  setSelectedIncident,
}: {
  selectedIncident: Incident;
  setSelectedIncident: (i: Incident) => void;
}) {
  const [filteredIncidents, setFilteredIncidents] =
    useState<Incident[]>(mockIncidents);

  return (
    <BoxWrapper className="space-y-4">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-[#FF3366]" />
          Incidents
        </div>
        <Suspense>
          <IncidentsSearch setFilteredIncidents={setFilteredIncidents} />
        </Suspense>
      </div>
      <ScrollArea className="h-70 md:h-150">
        <div className="space-y-2">
          {filteredIncidents.map((incident) => (
            <div
              key={incident.id}
              onClick={() => setSelectedIncident(incident)}
              className={`cursor-pointer rounded-lg border p-3 transition-all ${
                selectedIncident.id === incident.id
                  ? "border-[#00B4D8] bg-[#00B4D8]/10 dark:border-[#00D4FF] dark:bg-[#00D4FF]/20"
                  : "border-gray-200 bg-white hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              }`}
            >
              <div className="mb-2 flex items-start justify-between">
                <span className="text-sm text-[#00D4FF]">{incident.id}</span>
                <div className="flex gap-1">
                  <Badge
                    variant="outline"
                    className={getSeverityColor(incident.severity)}
                  >
                    {incident.severity}
                  </Badge>
                  <Badge className={getStatusColor(incident.status)}>
                    {incident.status}
                  </Badge>
                </div>
              </div>
              <p className="mb-2 text-sm dark:text-white">{incident.title}</p>
              <div className="flex items-center justify-between text-xs text-[#8892B0]">
                <span>{incident.attackType}</span>
                <span>{incident.attackCount} attacks</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BoxWrapper>
  );
}

export default IncidentsData;
