import { ActivityIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { sessions } from "@/constants/constants";
import { Session } from "@/types";

interface AnalysisTitleProps {
  selectedSession: Session;
  setSelectedSession: React.Dispatch<React.SetStateAction<Session>>;
}
function AnalysisTitle({
  selectedSession,
  setSelectedSession,
}: AnalysisTitleProps) {
  return (
    <div className="flex items-center justify-between gap-4 max-sm:flex-col">
      <div className="title flex items-center gap-2">
        <ActivityIcon className="text-[#00d4ff]" />
        <p className="translate-y-px">Session Analysis</p>
      </div>
      <Select
        value={selectedSession.id}
        onValueChange={(value) => {
          const session = sessions.find((s) => s.id === value);
          if (session) setSelectedSession(session);
        }}
      >
        <SelectTrigger className="w-50">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {sessions.map((session) => (
            <SelectItem key={session.id} value={session.id}>
              {session.id} - {session.ip}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default AnalysisTitle;
