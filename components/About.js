import { site } from "../lib/content";

export default function About() {
  return (
    <section id="about" className="sec sec-tint">
      <div className="wrap about">
        <div>
          <h2 className="h2">Who you'll be working with</h2>
          {site.photo && <img className="about-photo" src={site.photo} alt={site.name} />}
          <p>
            I'm {site.name}, a writer and web developer in {site.city}. I help small brands explain what they do and
            give people a clear next step.
          </p>
          <p>
            I start with the goal, then make the words and the website support it. The work stays plain, useful, and
            easy to update.
          </p>
        </div>
        <ul className="facts">
          <li>
            <strong>Languages</strong>English, Hindi and Kannada
          </li>
          <li>
            <strong>Based in</strong>
            {site.city}, India. Working with clients worldwide.
          </li>
          <li>
            <strong>Reply time</strong>Within one working day
          </li>
          <li>
            <strong>Best fit</strong>Small brands, creators and early-stage teams
          </li>
        </ul>
      </div>
    </section>
  );
}
