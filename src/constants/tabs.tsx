import {
  ChartSpline,
  CircleAlert,
  LayoutDashboard,
  Power,
  Search,
  Settings,
} from "lucide-react";
export const tabs = [
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
