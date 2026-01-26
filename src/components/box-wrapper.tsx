import { cn } from "@/lib/utils";
import React from "react";
interface BoxWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function BoxWrapper({ children, className }: BoxWrapperProps) {
  return (
    <div
      className={cn(
        "border-gray/10 rounded-2xl border bg-white/5 p-4 shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default BoxWrapper;
