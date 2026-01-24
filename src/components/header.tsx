import Image from "next/image";
import logo from "@/../public/assets/logo.svg";
import { ModeToggle } from "./mode-toggle";
import LastUpdate from "./last-update";
import NavigationToggle from "@/components/navigation-toggle";

function Header() {
  return (
    <header className="relative border-b px-4">
      <div className="page-container relative z-99 flex items-center justify-between border-x bg-white px-2 py-4 md:px-4">
        <div className="image">
          <Image className="w-30 md:w-40" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-6">
          <ModeToggle />
          <LastUpdate />
        </div>
      </div>
      <NavigationToggle />
    </header>
  );
}

export default Header;
