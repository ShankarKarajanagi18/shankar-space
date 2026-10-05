"use client";

import { useEffect, useState } from "react";
import { edits, site } from "../lib/content";

export default function Hero() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState(2); // 0 original, 1 struck, 2 rewritten
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase(2);
      return;
    }
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), 1400);
    const t2 = setTimeout(() => setPhase(2), 2300);
    const t3 = setTimeout(() => setI((n) => (n + 1) % edits.length), 7000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [i, reduced]);

  const e = edits[i];

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Words and websites for small brands.</h1>
          <p className="hero-sub">
            {site.name}, a writer and web developer in {site.city}. I make clear content and useful websites in English,
            Hindi and Kannada.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#brief">
              Start a project
            </a>
            <a className="btn btn-line" href="#work">
              See the work
            </a>
          </div>
        </div>

        <div className="sheet" aria-live="polite">
          <p className={"sheet-before" + (phase >= 1 ? " struck" : "")}>{e.before}</p>
          <p className={"sheet-after" + (phase >= 2 ? " in" : "")}>
            <mark>{e.after}</mark>
          </p>
          <p className="sheet-note">{e.note}</p>
          <button className="link-btn" onClick={() => setI((i + 1) % edits.length)}>
            Show another edit
          </button>
        </div>
      </div>
    </section>
  );
}
