import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import "./theme/layout.css"
import App from "./App";
import { ThemeModeProvider } from "./theme/ThemeModeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeModeProvider>
        <CssBaseline />
        <App />
      </ThemeModeProvider>
    </BrowserRouter>
  </StrictMode>,
);
