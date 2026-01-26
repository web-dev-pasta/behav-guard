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
