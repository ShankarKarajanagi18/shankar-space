"use client";

import { useEffect, useState } from "react";

const svcs = [
  ["writing", "Content writing"],
  ["social", "Social media"],
  ["marketing", "Digital marketing"],
  ["web", "Web development"],
];

const addOns = [
  ["forms", "Contact or booking form"],
  ["cms", "Blog or CMS"],
  ["store", "Online store with payments"],
  ["seo", "SEO setup"],
];

const deadlines = ["This week", "Within a month", "Flexible"];

export default function Estimator() {
  const [svc, setSvc] = useState("writing");
  const [pages, setPages] = useState(5);
  const [selected, setSelected] = useState({ forms: true, cms: true, store: false, seo: false });
  const [deadline, setDeadline] = useState("Within a month");

  useEffect(() => {
    const handleService = (event) => {
      if (svcs.some(([id]) => id === event.detail)) setSvc(event.detail);
    };
    window.addEventListener("pick-service", handleService);
    return () => window.removeEventListener("pick-service", handleService);
  }, []);

  const toggleAddOn = (id) => setSelected((current) => ({ ...current, [id]: !current[id] }));
  const selectedAddOns = addOns.filter(([id]) => selected[id]).map(([, label]) => label.toLowerCase());
  const addOnText = selectedAddOns.length === 0
    ? ""
    : selectedAddOns.length === 1
      ? ` with ${selectedAddOns[0]}`
      : ` with ${selectedAddOns.slice(0, -1).join(", ")} and ${selectedAddOns[selectedAddOns.length - 1]}`;
  const summary = `A ${pages}-page site${addOnText}, needed ${deadline.toLowerCase()}.`;

  function toBrief() {
    window.dispatchEvent(new CustomEvent("prefill-brief", { detail: { service: "Website or web app", note: summary } }));
  }

  return (
    <section id="scope" className="sec sec-tint">
      <div className="wrap">
        <h2 className="h2">Shape a project in ten seconds</h2>
        <p className="lede">Choose a service. For a website, sketch the scope and send it with your brief.</p>

        <div className="est">
          <div className="est-controls">
            <span className="est-label">Service</span>
            <div className="est-row">
              {svcs.map(([id, name]) => (
                <button key={id} className="chip" aria-pressed={svc === id} onClick={() => setSvc(id)}>
                  {name}
                </button>
              ))}
            </div>

            {svc === "web" ? (
              <>
                <label className="est-label" htmlFor="pages">
                  Number of pages: {pages}
                </label>
                <input id="pages" type="range" min="1" max="12" step="1" value={pages} onChange={(event) => setPages(Number(event.target.value))} />

                <span className="est-label">Add-ons</span>
                <div className="est-checks">
                  {addOns.map(([id, label]) => (
                    <label className="check" key={id}>
                      <input type="checkbox" checked={selected[id]} onChange={() => toggleAddOn(id)} />
                      {label}
                    </label>
                  ))}
                </div>

                <label className="est-label" htmlFor="deadline">Deadline</label>
                <select id="deadline" className="input" value={deadline} onChange={(event) => setDeadline(event.target.value)}>
                  {deadlines.map((option) => <option key={option}>{option}</option>)}
                </select>
              </>
            ) : (
              <p className="est-note">Get a quote after a short brief.</p>
            )}
          </div>

          <div className="est-out" aria-live="polite">
            {svc === "web" ? (
              <>
                <p className="est-summary">{summary}</p>
                <p className="est-small">I&apos;ll confirm the scope, timeline, and next steps after reading your brief.</p>
                <a className="btn btn-solid" href="#brief" onClick={toBrief}>Send this scope in a brief</a>
              </>
            ) : (
              <>
                <p className="est-summary">Get a quote</p>
                <p className="est-small">Tell me what you need and I&apos;ll reply with a clear plan.</p>
                <a className="btn btn-solid" href="#brief">Discuss this service</a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}