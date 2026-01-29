"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sessions } from "@/constants/constants";
import { Eye, EyeOff } from "lucide-react";
import BoxWrapper from "../box-wrapper";

function SessionComparison() {
  const [hiddenSessions, setHiddenSessions] = useState<Record<string, boolean>>(
    {},
  );

  const toggleSession = (id: string) => {
    setHiddenSessions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <BoxWrapper className="my-10 space-y-3">
      <p className="font-bold">Session Comparison</p>

      <div className="space-y-3">
        {sessions.map((session) => {
          const isHidden = hiddenSessions[session.id];

          return (
            <div
              key={session.id}
              className={`rounded-lg border p-4 ${
                session.status === "blocked"
                  ? "border-[#FF3366]/30 bg-[#FF3366]/10"
                  : session.status === "challenged"
                    ? "border-[#FFB800]/30 bg-[#FFB800]/10"
                    : "border-[#00C896]/30 bg-[#00C896]/10"
              }`}
            >
              <div className="flex items-center justify-between gap-4 max-md:flex-col">
                <div className="flex items-center gap-4 max-md:w-full max-md:flex-col max-md:items-start">
                  <div>
                    <p className="text-sm dark:text-white">
                      {isHidden ? "---" : session.id}
                    </p>
                    <p className="text-xs text-[#8892B0]">
                      {isHidden
                        ? "---"
                        : `${session.ip} • ${session.startTime}`}
                    </p>
                  </div>

                  <div className="max-tiny:flex-col tiny:items-center flex gap-6 text-sm">
                    <div>
                      <span className="text-[#8892B0]">Duration:</span>
                      <span className="ml-1 dark:text-white">
                        {isHidden ? "---" : session.duration}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#8892B0]">Requests:</span>
                      <span className="ml-1 dark:text-white">
                        {isHidden ? "---" : session.requests}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#8892B0]">Score:</span>
                      <span
                        className="ml-1"
                        style={{
                          color: isHidden
                            ? "#8892B0"
                            : session.anomalyScore >= 85
                              ? "#FF3366"
                              : session.anomalyScore >= 70
                                ? "#FFB800"
                                : "#00C896",
                        }}
                      >
                        {isHidden ? "---" : session.anomalyScore}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      session.status === "blocked"
                        ? "bg-[#FF3366]"
                        : session.status === "challenged"
                          ? "bg-[#FFB800] text-[#0A0E27]"
                          : "bg-[#00C896]"
                    }
                  >
                    {isHidden ? "---" : session.status}
                  </Badge>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSession(session.id)}
                  >
                    {isHidden ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </BoxWrapper>
  );
}

export default SessionComparison;
