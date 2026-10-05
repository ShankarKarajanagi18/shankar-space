import { process as steps } from "../lib/content";

export default function Process() {
  return (
    <section id="process" className="sec process-section">
      <div className="wrap">
        <h2 className="h2">How a project runs</h2>
        <div className="steps-wrap">
          <div className="steps-track" aria-hidden="true">
            <svg viewBox="0 0 1000 180" preserveAspectRatio="none">
              <path d="M20 82 C52 82 68 82 100 82 C170 82 220 145 300 145 C380 145 430 82 500 82 C570 82 620 145 700 145 C780 145 830 82 900 82 C932 82 948 82 980 82" />
              <circle cx="20" cy="82" r="6" />
              <circle cx="980" cy="82" r="6" />
            </svg>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <span className="step-node" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
