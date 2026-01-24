import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Tab {
  id: number;
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
}

function NavigationItems({ tabs }: NavigationTabsProps) {
  return (
    <>
      {tabs.map(({ id, icon, label, href }) => (
        <Link
          key={id}
          className={cn(
            "flex items-center justify-center gap-2 p-4",
            id > 2 && "border-t",
            id % 2 === 0 && "border-l",
          )}
          href={href}
        >
          <span>{icon}</span>
          <span>{label}</span>
        </Link>
      ))}
    </>
  );
}

export default NavigationItems;
