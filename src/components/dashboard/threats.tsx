import React from "react";
import LiveAttack from "@/components/dashboard/live-attack";
import AttackSource from "@/components/dashboard/attack-source";

function Threats() {
  return (
    <section className="my-10 px-4">
      <div className="page-container grid grid-cols-1 gap-5 lg:grid-cols-[450px_1fr]">
        <AttackSource />
        <LiveAttack />
      </div>
    </section>
  );
}

export default Threats;
