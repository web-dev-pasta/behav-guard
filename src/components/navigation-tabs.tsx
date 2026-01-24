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
            "flex items-center justify-center gap-2 p-2 max-sm:border-b max-sm:last:border-b-0 sm:p-4",
            id > 2 && "sm:border-t",
            id % 2 === 0 && "sm:border-l",
          )}
          href={href}
        >
          <span>{icon}</span>
          <span className="max-sm:text-sm">{label}</span>
        </Link>
      ))}
    </>
  );
}

export default NavigationItems;
