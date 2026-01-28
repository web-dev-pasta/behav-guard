// type BaseOverviewItem = {
//   label: string;
//   description: string;
//   icon: React.ReactNode;
// };

// type RiskOverviewItem = BaseOverviewItem & {
//   isRisk: true;
//   score: number;
// };

// type StatOverviewItem = BaseOverviewItem & {
//   isRisk?: false;
//   score: string;
//   iconColor: string;
// };

// export type OverviewItem = RiskOverviewItem | StatOverviewItem;
export interface ThreatLocation {
  country: string;
  count: number;
  lat: number;
  lng: number;
}

export type AttackSeverity = "low" | "medium" | "high" | "critical";
export type AttackStatus = "allowed" | "challenged" | "blocked";

export interface Attack {
  id: string;
  timestamp: string;
  ip: string;
  country: string;
  type: string;
  severity: AttackSeverity;
  riskScore: number;
  endpoint: string;
  status: AttackStatus;
}
export interface SessionTimelineItem {
  time: string;
  requests: number;
  anomaly: number;
}
export interface AttackDetailsProps {
  selectedAttack: Attack;
  sessionTimeline: SessionTimelineItem[];
  rawRequest: string;
  rawResponse: string;
}
export interface GeneratePdfParams extends AttackDetailsProps {}
export interface RecentAttacksProps {
  selectedAttack: Attack;
  setSelectedAttack: React.Dispatch<React.SetStateAction<Attack>>;
}
export interface FilterAttacksProps extends RecentAttacksProps {
  filteredData: Attack[];
}
export interface SearchAttacksProps {
  filteredData: Attack[];
  setFilteredData: React.Dispatch<React.SetStateAction<Attack[]>>;
}

export interface Session {
  id: string;
  ip: string;
  startTime: string;
  duration: string;
  requests: number;
  anomalyScore: number;
  status: string;
}
