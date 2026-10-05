import { site } from "../lib/content";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <p style={{ margin: 0 }}>
          {site.name}, {site.role.toLowerCase()} in {site.city}.
        </p>
        <p style={{ margin: 0 }}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {"  "}
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </p>
      </div>
    </footer>
  );
}
