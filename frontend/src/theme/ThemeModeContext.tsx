import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { getTheme, DEFAULT_THEME_MODE } from "./index";

type ThemeMode = "light" | "dark";

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
  undefined,
);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem("nexora-theme");
    return stored === "light" || stored === "dark"
      ? stored
      : DEFAULT_THEME_MODE;
  });

  const theme = useMemo(() => getTheme(mode), [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => {
        setMode((current) => {
          const next = current === "dark" ? "light" : "dark";
          localStorage.setItem("nexora-theme", next);
          document.documentElement.setAttribute("data-theme", next);
          return next;
        });
      },
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeModeProvider");
  }

  return context;
};
