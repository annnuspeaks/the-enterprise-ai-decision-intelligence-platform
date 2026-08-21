import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "../../../theme/ThemeModeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <button
      type="button"
      className="nexora-theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
