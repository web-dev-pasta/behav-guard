import Image from "next/image";
import logoLight from "@/../public/assets/logo-light.svg";
import logoDark from "@/../public/assets/logo-dark.svg";
import { ModeToggle } from "./mode-toggle";
import LastUpdate from "./last-update";
import NavigationToggle from "@/components/navigation-toggle";
import Link from "next/link";

function Header() {
  return (
    <header className="relative border-b px-4">
      <div className="page-container dark:bg-navy relative z-50 flex items-center justify-between border-x bg-white px-2 py-2 md:px-4 md:py-4">
        <div className="image">
          <Link href="/" className="outline-0">
            <Image
              className="w-30 md:w-40 dark:hidden"
              src={logoDark}
              priority
              alt="logo"
            />
            <Image
              className="hidden w-30 md:w-40 dark:block"
              src={logoLight}
              priority
              alt="logo"
            />
          </Link>
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
