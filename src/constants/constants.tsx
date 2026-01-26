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
