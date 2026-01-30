import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { debounce, useQueryState } from "nuqs";
import { Incident } from "@/types";
import { mockIncidents } from "@/constants/constants";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { filterIncidents } from "@/lib/helper";

function IncidentsSearch({
  setFilteredIncidents,
}: {
  setFilteredIncidents: (incidents: Incident[]) => void;
}) {
  const paramsIncident = useSearchParams().get("incident");
  const [searchValue, setSearchValue] = useQueryState("incident", {
    defaultValue: paramsIncident || "",
    shallow: false,
    limitUrlUpdates: debounce(300),
  });

  const [filterStatus, setFilterStatus] = useQueryState("status", {
    defaultValue: "all",
    shallow: false,
  });

  const [filterSeverity, setFilterSeverity] = useQueryState("severity", {
    defaultValue: "all",
    shallow: false,
  });

  useEffect(() => {
    const query = (searchValue || "").trim().toLowerCase();
    const results = filterIncidents(
      mockIncidents,
      query,
      filterStatus,
      filterSeverity,
    );
    setFilteredIncidents(results);
  }, [paramsIncident, filterSeverity, filterStatus]);

  return (
    <>
      <Input
        placeholder="Search incidents..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div className="flex gap-2 max-sm:justify-center">
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="investigating">Investigating</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterSeverity} onValueChange={setFilterSeverity}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Severity</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default IncidentsSearch;
