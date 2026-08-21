import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Technology", to: "/technology" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nexora-navbar">
      <div className="nexora-navbar__inner">
        <NavLink to="/" end className="nexora-navbar__brand" aria-label="Nexora Home">
          <img
            src={new URL("../../../assets/nexora-logo.png", import.meta.url).href}
            alt="Nexora"
            className="nexora-navbar__logo"
          />
        </NavLink>

        <nav className="nexora-navbar__nav" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nexora-navbar__link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nexora-navbar__menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="nexora-mobile-navigation"
        >
          {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>

        <nav
          id="nexora-mobile-navigation"
          className={`nexora-navbar__mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nexora-navbar__mobile-link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
