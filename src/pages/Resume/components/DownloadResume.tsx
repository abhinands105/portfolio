import { resume } from "../data/resume";

export default function DownloadResume() {
  return (
    <section className="download-resume-section">
      <div className="download-card">
        <div className="download-content">
          <span className="section-badge">
            Resume
          </span>

          <h2>Download My Resume</h2>

          <p>
            Download my latest resume or explore my GitHub, LinkedIn,
            and portfolio to learn more about my experience in
            Artificial Intelligence, Machine Learning, Computer Vision,
            and Generative AI.
          </p>

          <div className="download-buttons">
            <a
              href="/resume.pdf"
              download
              className="primary-btn"
            >
              📄 Download Resume
            </a>

            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              🐙 GitHub
            </a>

            <a
              href={resume.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              🌐 Portfolio
            </a>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              💼 LinkedIn
            </a>

            <a
              href={`mailto:${resume.email}`}
              className="secondary-btn"
            >
              ✉️ Contact Me
            </a>
          </div>
        </div>

        <div className="resume-summary-card">
          <h3>Quick Highlights</h3>

          <ul>
            <li>🎓 B.Tech AI & Data Science (2026)</li>
            <li>🤖 Generative AI Engineer</li>
            <li>🧠 Computer Vision & Deep Learning</li>
            <li>💬 LLMs & Retrieval-Augmented Generation</li>
            <li>🎨 Stable Diffusion • LoRA • ControlNet</li>
            <li>⚛️ React • TypeScript • FastAPI</li>
            <li>📊 15+ AI Projects</li>
            <li>🏆 17+ Professional Certifications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}