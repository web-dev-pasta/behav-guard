"use client";
import IncidentDetails from "./incident-details";
import IncidentsData from "./incidents-data";
import { useState } from "react";
import { Incident } from "@/types";
import { mockIncidents } from "@/constants/constants";

function IncidentsMain() {
  const [selectedIncident, setSelectedIncident] = useState<Incident>(
    mockIncidents[0],
  );

  return (
    <section className="my-10">
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <IncidentsData
          selectedIncident={selectedIncident}
          setSelectedIncident={setSelectedIncident}
        />
        <IncidentDetails selectedIncident={selectedIncident} />
      </div>
    </section>
  );
}

export default IncidentsMain;
