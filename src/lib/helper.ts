import { Incident } from "@/types";

export const getRiskColor = (score: number) => {
  if (score >= 85) return "#FF3366";
  if (score >= 70) return "#FFB800";
  return "#00C896";
};

export const formatScore = (score: string | number) => {
  if (typeof score === "number") return score.toFixed(0);
  return score;
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-[#FF3366]";
    case "investigating":
      return "bg-[#FFB800] text-[#0A0E27]";
    case "resolved":
      return "bg-[#00C896]";
    case "closed":
      return "bg-[#8892B0]";
    default:
      return "bg-white/10";
  }
};

export const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "bg-[#FF3366]/20 text-[#FF3366] border-[#FF3366]/30";
    case "high":
      return "bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/30";
    case "medium":
      return "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30";
    case "low":
      return "bg-[#00C896]/20 text-[#00C896] border-[#00C896]/30";
    default:
      return "bg-white/10 text-white border-white/20";
  }
};

export function filterIncidents(
  incidents: Incident[],
  query: string,
  filterStatus: string,
  filterSeverity: string,
): Incident[] {
  return incidents.filter((incident) => {
    const statusMatch =
      filterStatus === "all" || incident.status === filterStatus;

    const severityMatch =
      filterSeverity === "all" || incident.severity === filterSeverity;

    const searchMatch =
      !query ||
      incident.title.toLowerCase().includes(query) ||
      String(incident.id).toLowerCase().includes(query) ||
      incident.attackType.toLowerCase().includes(query);

    return statusMatch && severityMatch && searchMatch;
  });
}
