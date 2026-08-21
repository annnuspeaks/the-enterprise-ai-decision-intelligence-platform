import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { PaletteMode } from "@mui/material";
import { getTheme } from "./index";

type ThemeModeContextValue = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
  undefined,
);

const getInitialMode = (): PaletteMode => {
  const stored = localStorage.getItem("theme-mode");

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => {
        setMode((current) => {
          const next = current === "light" ? "dark" : "light";
          localStorage.setItem("theme-mode", next);
          return next;
        });
      },
    }),
    [mode],
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <div data-theme={mode}>
        <ThemeModeMuiProvider theme={theme}>{children}</ThemeModeMuiProvider>
      </div>
    </ThemeModeContext.Provider>
  );
}

import { ThemeProvider as ThemeModeMuiProvider } from "@mui/material/styles";

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeModeProvider");
  }

  return context;
}
