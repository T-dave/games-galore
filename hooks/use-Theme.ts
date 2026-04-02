import { Colors } from "@/constants/theme";
import { Appearance, useColorScheme } from "react-native";
export default function useAppTheme() {
  const scheme = useColorScheme() ?? "light";
  const colour = Colors[scheme];
  const toggleTheme = () => {
    // Determine the next theme
    const nextScheme = scheme === "dark" ? "light" : "dark";

    // Manually set the appearance override
    Appearance.setColorScheme(nextScheme);
  };

  return {
    scheme,
    isDark: scheme === "dark",
    toggleTheme,
    colour,
  };
}
