"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/content";

const services = ["Content writing", "Social media", "Digital marketing", "Website or web app", "Not sure yet"];
const timelines = ["This week", "Within a month", "Flexible"];
const serviceNames = {
  writing: "Content writing",
  social: "Social media",
  marketing: "Digital marketing",
  web: "Website or web app",
};

export default function Brief() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ service: "", goal: "", timeline: "", name: "", email: "", site: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleService = (event) => {
      const service = serviceNames[event.detail];
      if (!service) return;
      setD((current) => ({ ...current, service }));
      setStep(0);
      setSent(false);
    };
    const handlePrefill = (event) => {
      const { service, note } = event.detail || {};
      setD((current) => ({ ...current, service: service || current.service, goal: note || current.goal }));
      setStep(service || note ? 1 : 0);
      setSent(false);
    };
    window.addEventListener("pick-service", handleService);
    window.addEventListener("prefill-brief", handlePrefill);
    return () => {
      window.removeEventListener("pick-service", handleService);
      window.removeEventListener("prefill-brief", handlePrefill);
    };
  }, []);

  const set = (k, v) => setD((p) => ({ ...p, [k]: v }));

  const valid = [
    !!d.service,
    d.goal.trim().length > 9,
    !!d.timeline,
    d.name.trim().length > 0 && /^\S+@\S+\.\S+$/.test(d.email),
  ][step];

  const summary = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    d.site ? `Website or profile: ${d.site}` : null,
    `Service: ${d.service}`,
    `Goal: ${d.goal}`,
    `Timeline: ${d.timeline}`,
  ]
    .filter(Boolean)
    .join("\n");

  const subject = `Project enquiry: ${d.service || "General"}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(subject + "\n\n" + summary)}`;

  function submit(e) {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
    window.location.href = mailto;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
    } catch (e) {}
  }

  return (
    <section id="brief" className="sec sec-cta">
      <div className="wrap brief">
        <div>
          <h2 className="h2">Tell me what you need</h2>
          <p className="lede">Four short questions. I reply within one working day with a clear plan.</p>
        </div>

        <div className="form-card">
          {sent ? (
            <div>
              <h3 style={{ margin: "0 0 0.4em", fontFamily: "var(--display)" }}>Your email is ready to send</h3>
              <p>
                Your email app should have opened with the brief filled in. If it didn't, use one of the buttons below.
              </p>
              <div className="sent-actions">
                <a className="btn btn-solid" href={mailto}>
                  Open email again
                </a>
                <a className="btn btn-line" href={wa} target="_blank" rel="noreferrer">
                  Send on WhatsApp
                </a>
                <button type="button" className="btn btn-line" onClick={copy}>
                  {copied ? "Copied" : "Copy brief"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p className="form-step">Step {step + 1} of 4</p>

              {step === 0 && (
                <fieldset>
                  <legend>What do you need help with?</legend>
                  {services.map((s) => (
                    <label className="opt" key={s}>
                      <input type="radio" name="service" checked={d.service === s} onChange={() => set("service", s)} />
                      {s}
                    </label>
                  ))}
                </fieldset>
              )}

              {step === 1 && (
                <fieldset>
                  <legend>What should this work achieve?</legend>
                  <label className="field-label" htmlFor="goal">
                    A sentence or two is enough
                  </label>
                  <textarea
                    id="goal"
                    className="input"
                    value={d.goal}
                    onChange={(e) => set("goal", e.target.value)}
                    placeholder="Example: We want more weekday bookings for our café."
                  />
                </fieldset>
              )}

              {step === 2 && (
                <fieldset>
                  <legend>When do you need it?</legend>
                  {timelines.map((t) => (
                    <label className="opt" key={t}>
                      <input type="radio" name="timeline" checked={d.timeline === t} onChange={() => set("timeline", t)} />
                      {t}
                    </label>
                  ))}
                </fieldset>
              )}

              {step === 3 && (
                <fieldset>
                  <legend>Where should I reply?</legend>
                  <label className="field-label" htmlFor="name">
                    Your name
                  </label>
                  <input id="name" className="input" value={d.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
                  <label className="field-label" htmlFor="email">
                    Email
                  </label>
                  <input id="email" type="email" className="input" value={d.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
                  <label className="field-label" htmlFor="site">
                    Website or Instagram (optional)
                  </label>
                  <input id="site" className="input" value={d.site} onChange={(e) => set("site", e.target.value)} />
                </fieldset>
              )}

              <div className="form-nav">
                {step > 0 && (
                  <button type="button" className="btn btn-line" onClick={() => setStep(step - 1)}>
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" className="btn btn-solid" disabled={!valid} onClick={() => setStep(step + 1)}>
                    Next
                  </button>
                ) : (
                  <button type="submit" className="btn btn-solid" disabled={!valid}>
                    Send brief
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
