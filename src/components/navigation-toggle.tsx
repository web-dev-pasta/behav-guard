"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import NavigationMenu from "./navigation-menu";

function NavigationToggle() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [menuRef]);

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div
        ref={menuRef}
        className={cn(
          "absolute top-full right-0 z-10 flex w-fit transform transition-all duration-300",
          open && "-translate-y-full",
        )}
      >
        <Button
          variant="outline"
          className="focus-visible:border-input sticky top-0 rounded-t-none focus-visible:ring-0 dark:border-t-0"
          size="icon"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Settings className={"h-[1.2rem] w-[1.2rem]"} />
        </Button>
      </div>
      <NavigationMenu open={open} />
    </div>
  );
}

export default NavigationToggle;
