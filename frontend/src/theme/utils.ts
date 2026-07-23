import type { PaletteMode } from "@mui/material";

export function getOppositeThemeMode(mode: PaletteMode): PaletteMode {
  return mode === "light" ? "dark" : "light";
}