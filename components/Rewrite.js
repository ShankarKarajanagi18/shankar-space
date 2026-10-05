"use client";

import { useState } from "react";
import { rewrite } from "../lib/content";

export default function Rewrite() {
  const [p, setP] = useState(50);

  return (
    <section id="rewrite" className="sec">
      <div className="wrap">
        <h2 className="h2">Same brand, two versions of the same paragraph</h2>
        <p className="lede">Drag the red line. Left is what most candle sites say. Right is what I'd write.</p>

        <div className="rw" style={{ "--p": p + "%" }}>
          <div className="rw-pane rw-after">
            <span className="rw-tag">After</span>
            <p>{rewrite.after}</p>
          </div>
          <div className="rw-pane rw-before">
            <span className="rw-tag">Before</span>
            <p>{rewrite.before}</p>
          </div>
          <div className="rw-handle" aria-hidden="true" />
          <input
            className="rw-range"
            type="range"
            min="0"
            max="100"
            value={p}
            onChange={(e) => setP(Number(e.target.value))}
            aria-label="Reveal the rewritten paragraph"
          />
        </div>
        <p className="rw-hint">Use the left and right arrow keys if you're not on a touch screen.</p>
      </div>
    </section>
  );
}
