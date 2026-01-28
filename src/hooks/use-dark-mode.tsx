import { useTheme } from "next-themes";
import { useEffect, useLayoutEffect, useState } from "react";

export function useDarkMode() {
  const { theme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);

    let mode: "light" | "dark" = "light";

    switch (theme) {
      case "light":
        mode = "light";
        break;
      case "dark":
        mode = "dark";
        break;
      case "system":
        mode = systemTheme === "dark" ? "dark" : "light";
        break;
      default:
        mode = "light";
        break;
    }

    setIsDark(mode === "dark");
  }, [theme, systemTheme]);

  return mounted ? isDark : false;
}
