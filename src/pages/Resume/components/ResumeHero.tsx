import { resume } from "../data/resume";

export default function ResumeHero() {
  return (
    <section className="resume-hero">
      <span className="section-badge">
        Resume
      </span>

      <h1>
        {resume.name}
      </h1>

      <h2>
        {resume.title}
      </h2>

      <p className="resume-summary">
        {resume.summary}
      </p>

      <div className="resume-contact">
        <span>📧 {resume.email}</span>
        <span>📱 {resume.phone}</span>
        <span>📍 {resume.location}</span>
      </div>

      <div className="resume-actions">
        <a
          href="/resume.pdf"
          download
          className="primary-btn"
        >
          Download Resume
        </a>

        <a
          href={resume.github}
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          GitHub
        </a>

        <a
          href={resume.portfolio}
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          Portfolio
        </a>

        <a
          href={resume.linkedin}
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          LinkedIn
        </a>
      </div>

      <div className="resume-hero-stats">
        <div className="resume-stat">
          <h3>15+</h3>
          <span>AI Projects</span>
        </div>

        <div className="resume-stat">
          <h3>17+</h3>
          <span>Certifications</span>
        </div>

        <div className="resume-stat">
          <h3>6+</h3>
          <span>AI Domains</span>
        </div>

        <div className="resume-stat">
          <h3>2026</h3>
          <span>Graduation</span>
        </div>
      </div>
    </section>
  );
}