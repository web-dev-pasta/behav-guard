import { ThreatLocation } from "@/types";
import {
  ChartSpline,
  CircleAlert,
  LayoutDashboard,
  Power,
  Search,
  Settings,
  Shield,
  Activity,
  TrendingUp,
  Zap,
} from "lucide-react";

export const navigationTabs = [
  {
    id: 1,
    icon: <LayoutDashboard className="size-4.5 sm:size-6" />,
    label: "SOC Dashboard",
    href: "/",
  },
  {
    id: 2,
    icon: <Search className="size-4.5 sm:size-6" />,
    label: "Investigation",
    href: "/investigation",
  },
  {
    id: 3,
    icon: <ChartSpline className="size-4.5 sm:size-6" />,
    label: "Behabioral Analysis",
    href: "/analysis",
  },
  {
    id: 4,
    icon: <CircleAlert className="size-4.5 sm:size-6" />,
    label: "Incidents",
    href: "/incidents",
  },
  {
    id: 5,
    icon: <Power className="size-4.5 sm:size-6" />,
    label: "Performance",
    href: "/performance",
  },
  {
    id: 6,
    icon: <Settings className="size-4.5 sm:size-6" />,
    label: "Configuration",
    href: "/configuration",
  },
];

export const overviewData = (score: number) => {
  return [
    {
      label: "Risk Score",
      score: score,
      description: "out of 100",
      icon: Shield,
      isRisk: true,
    },
    {
      label: "Active Sessions",
      score: "1,247",
      description: "↑ 12% from avg",
      icon: Activity,
      iconColor: "#00D4FF",
    },
    {
      label: "Requests/sec",
      score: "9,842",
      description: "avg latency: 28ms",
      icon: Zap,
      iconColor: "#00C896",
    },
    {
      label: "False Positive Rate",
      score: "0.18%",
      description: "1.8 per 1000 req",
      icon: TrendingUp,
      iconColor: "#FFB800",
    },
  ];
};

export const threats: ThreatLocation[] = [
  { country: "United States", count: 145, lat: 37.0902, lng: -95.7129 },
  { country: "China", count: 234, lat: 35.8617, lng: 104.1954 },
  { country: "Russia", count: 187, lat: 61.524, lng: 105.3188 },
  { country: "Brazil", count: 98, lat: -14.235, lng: -51.9253 },
  { country: "India", count: 156, lat: 20.5937, lng: 78.9629 },
  { country: "Germany", count: 67, lat: 51.1657, lng: 10.4515 },
  { country: "France", count: 54, lat: 46.2276, lng: 2.2137 },
  { country: "United Kingdom", count: 78, lat: 55.3781, lng: -3.436 },
];

export const maxCount = Math.max(...threats.map((t) => t.count));

export const detectionData = [
  { name: "Session Behavior", value: 40, color: "#00D4FF" },
  { name: "Contract Validation", value: 30, color: "#00C896" },
  { name: "Attack Classification", value: 15, color: "#FFB800" },
  { name: "Mimic Guard", value: 5, color: "#FF3366" },
  { name: "Other", value: 10, color: "#8892B0" },
];

export const attackTypes = [
  { name: "SQL Injection", value: 45, color: "#FF3366" },
  { name: "XSS", value: 25, color: "#FFB800" },
  { name: "CSRF", value: 15, color: "#00D4FF" },
  { name: "Path Traversal", value: 10, color: "#00C896" },
  { name: "Other", value: 5, color: "#8892B0" },
];
