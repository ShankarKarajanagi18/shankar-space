"use client";

import { useState } from "react";
import { services } from "../lib/content";

export default function Services() {
  const [id, setId] = useState(services[0].id);
  const s = services.find((x) => x.id === id);

  return (
    <section id="services" className="sec">
      <div className="wrap">
        <h2 className="h2">Four ways to work together</h2>
        <div className="svc">
          <div className="svc-tabs">
            {services.map((x) => (
              <button
                key={x.id}
                className={"svc-tab" + (x.id === id ? " on" : "")}
                aria-pressed={x.id === id}
                onClick={() => setId(x.id)}
              >
                {x.name}
              </button>
            ))}
          </div>
          <div className="svc-panel">
            <p className="svc-for">{s.for}</p>
            <ul>
              {s.delivers.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="svc-meta">
              <strong>{s.from}</strong> {s.turnaround}
            </p>
            <a
              className="btn btn-line"
              href="#brief"
              onClick={() => window.dispatchEvent(new CustomEvent("pick-service", { detail: s.id }))}
            >
              Discuss this service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
