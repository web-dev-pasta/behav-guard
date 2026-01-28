"use client";
import BoxWrapper from "../box-wrapper";
import { useState } from "react";
import { sessions } from "@/constants/constants";
import AnalysisTitle from "./analysis-title";
import SessionData from "./session-data";
function SessionAnalysis() {
  const [selectedSession, setSelectedSession] = useState(sessions[0]);

  return (
    <BoxWrapper className="space-y-6">
      <AnalysisTitle
        selectedSession={selectedSession}
        setSelectedSession={setSelectedSession}
      />
      <SessionData selectedSession={selectedSession} />
    </BoxWrapper>
  );
}

export default SessionAnalysis;
