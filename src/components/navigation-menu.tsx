import { cn } from "@/lib/utils";
import React from "react";
import { X } from "lucide-react";
import NavigationItems from "./navigation-tabs";
import { Button } from "./ui/button";
interface NavigationMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
import { tabs } from "@/constants/tabs";

function NavigationMenu({ open, setOpen }: NavigationMenuProps) {
  return (
    <div
      className={cn(
        "bg-background dark:bg-input/30 absolute bottom-8 left-1/2 z-5 mx-auto grid w-full max-w-7xl -translate-x-1/2 transform grid-cols-1 rounded-b-md border transition-all duration-300 sm:bottom-0 sm:grid-cols-2 dark:border-t-0",
        open && "translate-y-[calc(100%+32px)] sm:translate-y-full",
      )}
    >
      <Button
        className="max-sm-translate-x-1/2 absolute top-full transform max-sm:left-1/2 max-sm:rounded-t-none max-sm:border-t-0 sm:top-2 sm:right-2"
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
