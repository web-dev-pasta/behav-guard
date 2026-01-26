"use client";
import { useRiskScore } from "@/hooks/use-risk-score";
import { useState } from "react";
import OverviewBox from "@/components/dashboard/overview-box";
import { overviewData } from "@/constants/constants";

function Overview() {
  const [isPaused, setIsPaused] = useState(false);

  const { score } = useRiskScore({
    paused: isPaused,
  });
  const data = overviewData(score);

  return (
    <section className="my-10 px-4">
      <div className="page-container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {data.map((item) => (
          <OverviewBox key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Overview;
