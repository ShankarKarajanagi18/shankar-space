"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/content";

export default function Nav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="wordmark">
          {site.name}
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <button className="theme-btn" onClick={toggle} aria-label="Switch colour theme">
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
        <a className="btn btn-solid" href="#brief">
          Start a project
        </a>
      </div>
    </header>
  );
}
