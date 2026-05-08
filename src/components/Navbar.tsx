import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import companyLogo from "../assets/company-logo.svg";

const links = [
  { label: "Blog", to: "/blog" },
  { label: "Career", to: "/Career" },
  { label: "Software Enquiry", href: "/enquiry" },
  { label: "Online Classes", href: "/classes" },
  { label: "Login", to: "/login", cta: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={close}>
          <img
            src={companyLogo}
            alt="AIGETAI logo"
            className="navbar-logo-image"
          />
          <span className="navbar-logo-text">AIGETAI</span>
        </Link>

        <button
          className={`hamburger ${isOpen ? "hamburger--open" : ""}`}
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        <div
          className={`navbar-links ${isOpen ? "open" : ""}`}
          aria-hidden={!isOpen}
        >
          {links.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={link.cta ? "cta-btn" : ""}
                onClick={close}
              >
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} onClick={close}>
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div className="navbar-backdrop" onClick={close} aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
