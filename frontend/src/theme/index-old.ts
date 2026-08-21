import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#9c27b0",
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
      h3: {
        fontWeight: 700,
      },
    },
  });

export * from "./constants";
export * from "./utils";