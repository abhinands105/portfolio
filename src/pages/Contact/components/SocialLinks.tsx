import { socials } from "../data/socials";

export default function SocialLinks() {
  return (
    <section className="social-links-section">
      <div className="section-title">
        <h2>Connect With Me</h2>

        <p>
          Feel free to reach out through any of the platforms below.
        </p>
      </div>

      <div className="social-grid">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target={
              social.url.startsWith("http") ? "_blank" : undefined
            }
            rel={
              social.url.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="social-card"
          >
            <div
              className="social-icon"
              style={{
                backgroundColor: social.color,
              }}
            >
              {social.icon}
            </div>

            <div className="social-info">
              <h3>{social.name}</h3>
              <p>{social.username}</p>
            </div>

            <span className="social-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}