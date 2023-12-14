import { useContext } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export function useThemeContext() {
  const context = useContext(ThemeProvider);
  if (!context) {
    throw new Error("useThemeContent must be used in ThemeContextProvider");
  }
  return context;
}
