import { faqs } from "../lib/content";

export default function Faq() {
  return (
    <section id="faq" className="sec">
      <div className="wrap">
        <h2 className="h2">Questions people ask before hiring</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
