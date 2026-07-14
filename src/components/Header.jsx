import React, { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // מעקב אחר גלילה לסימון הקישור הפעיל
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      let current = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <header>
      <div className="wrap">
        <a href="#home" className="logo">
          <span className="logo-mark">TC</span> Tal Chekol
        </a>

        <nav id="siteNav" className={isOpen ? "open" : ""}>
          <ul>
            {navItems.map((item) => {
              const target = item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={`#${target}`}
                    className={activeSection === target ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="https://github.com/talchekol"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark btn-sm gh-desktop-btn"
        >
          <FiGithub size={16} />
          View GitHub
        </a>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
