"use client";
import { useState } from "react";
import { mockAttacks, rawRequest, rawResponse } from "@/constants/constants";
import AttackDetails from "@/components/investigation/attack-details";
import RecentAttacks from "@/components/investigation/recent-attacks";

export function InvestigationView() {
  const [selectedAttack, setSelectedAttack] = useState(mockAttacks[0]);
  const sessionTimeline = Array.from({ length: 20 }, (_, i) => ({
    time: `T-${20 - i}s`,
    requests: Math.floor(Math.random() * 50) + 10,
    anomaly:
      i > 15
        ? Math.floor(Math.random() * 80) + 20
        : Math.floor(Math.random() * 30),
  }));

  return (
    <section className="my-10 px-4">
      <div className="page-container grid grid-cols-1 gap-5 lg:grid-cols-[450px_1fr]">
        <RecentAttacks
          selectedAttack={selectedAttack}
          setSelectedAttack={setSelectedAttack}
        />
        <AttackDetails
          selectedAttack={selectedAttack}
          rawRequest={rawRequest}
          rawResponse={rawResponse(selectedAttack)}
          sessionTimeline={sessionTimeline}
        />
      </div>
    </section>
  );
}
