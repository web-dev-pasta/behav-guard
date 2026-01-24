import { cn } from "@/lib/utils";
import React from "react";
import {
  ChartSpline,
  CircleAlert,
  LayoutDashboard,
  Power,
  Search,
  Settings,
  X,
} from "lucide-react";
import NavigationItems from "./navigation-tabs";
import { Button } from "./ui/button";
interface NavigationMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavigationMenu({ open, setOpen }: NavigationMenuProps) {
  const tabs = [
    { id: 1, icon: <LayoutDashboard />, label: "SOC Dashboard", href: "/" },
    { id: 2, icon: <Search />, label: "Investigation", href: "/investigation" },
    {
      id: 3,
      icon: <ChartSpline />,
      label: "Behabioral Analysis",
      href: "/analysis",
    },
    { id: 4, icon: <CircleAlert />, label: "Incidents", href: "/incidents" },
    { id: 5, icon: <Power />, label: "Performance", href: "/performance" },
    {
      id: 6,
      icon: <Settings />,
      label: "Configuration",
      href: "/configuration",
    },
  ];
  return (
    <div
      className={cn(
        "absolute bottom-0 left-1/2 z-5 mx-auto grid w-full max-w-7xl -translate-x-1/2 transform grid-cols-2 rounded-b-md border bg-white transition-all duration-300",
        open && "translate-y-full",
      )}
    >
      <Button
        className="absolute top-2 right-2"
        size="icon-sm"
        variant="outline"
      >
        <X className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <NavigationItems tabs={tabs} />
    </div>
  );
}

export default NavigationMenu;
