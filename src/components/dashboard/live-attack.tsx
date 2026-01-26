"use client";
import React, { useState } from "react";
import { AlertTriangle, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AttackFeed } from "@/components/attack-feed";
import BoxWrapper from "@/components/box-wrapper";

function LiveAttack() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <BoxWrapper className="space-y-6">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-[#FF3366]" />
          <p>Live Attack Feed</p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsPaused(!isPaused)}
          className="border-white/10 hover:bg-white/5"
        >
          {isPaused ? (
            <Play className="h-4 w-4" />
          ) : (
            <Pause className="h-4 w-4" />
          )}
          <span className="ml-2">{isPaused ? "Resume" : "Pause"}</span>
        </Button>
      </div>
      <AttackFeed isPaused={isPaused} />
    </BoxWrapper>
  );
}

export default LiveAttack;
