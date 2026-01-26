import { useTheme } from "next-themes";

export function useDarkMode() {
  const { theme, systemTheme } = useTheme();

  let mode: "light" | "dark" = "light";

  switch (theme) {
    case "light":
      mode = "light";
      break;
    case "dark":
      mode = "dark";
    case "system":
      if (systemTheme === "dark") {
        mode = "dark";
      } else {
        mode = "light";
      }
    default:
      break;
  }

  return mode === "dark";
}
