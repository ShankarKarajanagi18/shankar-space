"use client";

import { useEffect, useRef, useState } from "react";
import { work } from "../lib/content";
import SampleTag from "./SampleTag";

const filters = [
  { id: "all", label: "All" },
  { id: "writing", label: "Writing" },
  { id: "social", label: "Social media" },
  { id: "marketing", label: "Marketing" },
  { id: "web", label: "Web development" },
];

const typeName = { writing: "Writing", social: "Social media", marketing: "Marketing", web: "Web development" };

export default function Work() {
  const [f, setF] = useState("all");
  const [item, setItem] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);

  const items = work.filter((w) => f === "all" || w.type === f);

  return (
    <section id="work" className="sec sec-tint">
      <div className="wrap">
        <h2 className="h2">Selected work</h2>
        <p className="lede">Pick a piece to read it in full.</p>

        <div className="filters">
          {filters.map((x) => (
            <button key={x.id} className="chip" aria-pressed={f === x.id} onClick={() => setF(x.id)}>
              {x.label}
            </button>
          ))}
        </div>

        <ul className="rows">
          {items.map((w) => (
            <li key={w.id}>
              <button className="row" onClick={() => setItem(w)}>
                <span className="row-title">
                  {w.title}
                  <SampleTag item={w} />
                </span>
                <span className="row-meta">{w.client}</span>
                <span className="row-meta">{typeName[w.type]}</span>
                <span className="row-meta">{w.year}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={ref}
        className="modal"
        onClose={() => setItem(null)}
        onClick={(e) => {
          if (e.target === ref.current) setItem(null);
        }}
        aria-label={item ? item.title : "Work sample"}
      >
        {item && (
          <div className="modal-in">
            <button className="modal-close" onClick={() => setItem(null)}>
              Close
            </button>
            <h3>{item.title}</h3>
            <p className="modal-meta">
              {item.client}, {item.year}
              <SampleTag item={item} />
            </p>
            <p className="modal-summary">{item.summary}</p>

            {item.body && item.body.map((p, k) => <p key={k}>{p}</p>)}

            {item.posts && (
              <div className="phone">
                {item.posts.map((p, k) => (
                  <div className="post" key={k}>
                    <small>{p.kind}</small>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            )}

            {item.results && (
              <dl className="results">
                {item.results.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {item.stack?.length > 0 && (
              <div className="modal-list">
                <h4>Stack</h4>
                <ul>
                  {item.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            )}

            {item.features?.length > 0 && (
              <div className="modal-list">
                <h4>Features</h4>
                <ul>
                  {item.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
            )}

            {(item.liveUrl || item.repoUrl) && (
              <div className="modal-links">
                {item.liveUrl && <a className="btn btn-solid" href={item.liveUrl} target="_blank" rel="noreferrer">View live site</a>}
                {item.repoUrl && <a className="btn btn-line" href={item.repoUrl} target="_blank" rel="noreferrer">View code</a>}
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
