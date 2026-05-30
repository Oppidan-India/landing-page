import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Ventures" },
  { to: "/internship", label: "Internship" },
  { to: "/contact", label: "Contact" },
];

function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="brand-link" aria-label="Oppidan India home">
        <img src={logo} alt="Oppidan India" className="logo-img" />
      </Link>

      <button
        type="button"
        className={`mobile-nav-toggle${isOpen ? " is-open" : ""}`}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="site-navigation"
        className={`nav-links${isOpen ? " is-open" : ""}`}
      >
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="nav-contact-link">
        <button className="nav-btn">Connect With Us</button>
      </Link>
    </nav>
  );
}

export default SiteNav;
