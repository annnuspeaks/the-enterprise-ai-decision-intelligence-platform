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

      // Global typography hierarchy
      h1: {
        fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: "-0.035em",
      },

      h2: {
        fontSize: "clamp(2.1rem, 4vw, 3.25rem)",
        fontWeight: 800,
        lineHeight: 1.12,
        letterSpacing: "-0.025em",
      },

      h3: {
        fontSize: "clamp(1.65rem, 3vw, 2.25rem)",
        fontWeight: 700,
        lineHeight: 1.18,
        letterSpacing: "-0.02em",
      },

      h4: {
        fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
        fontWeight: 700,
        lineHeight: 1.25,
      },

      h5: {
        fontSize: "1.2rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },

      h6: {
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: 1.35,
      },

      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.7,
      },

      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.6,
      },

      subtitle1: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },

      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.45,
      },

      button: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: "0.01em",
        textTransform: "none",
      },

      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.45,
      },

      overline: {
        fontSize: "0.7rem",
        fontWeight: 700,
        lineHeight: 1.4,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      },
    },
  });

export * from "./constants";
export * from "./utils";
