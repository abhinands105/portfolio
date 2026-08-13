import "./Resume.css";

import ResumeHero from "./components/ResumeHero";
import ResumeStats from "./components/ResumeStats";
import ResumePreview from "./components/ResumePreview";
import DownloadResume from "./components/DownloadResume";

export default function Resume() {
  return (
    <div className="resume-page page-container">
      {/* ================= HERO ================= */}

      <ResumeHero />

      {/* ================= TECHNICAL SKILLS ================= */}

      <ResumeStats />

      {/* ================= RESUME PREVIEW ================= */}

      <ResumePreview />

      {/* ================= DOWNLOAD ================= */}

      <DownloadResume />

      {/* ================= CAREER SUMMARY ================= */}

      <section className="career-summary">
        <div className="career-summary-card">
          <span className="section-badge">
            Career Highlights
          </span>

          <h2>Building Intelligent AI Systems</h2>

          <p>
            I specialize in designing and developing modern Artificial
            Intelligence solutions with a strong focus on Generative AI,
            Computer Vision, Machine Learning, and Retrieval-Augmented
            Generation (RAG). My work combines research, engineering, and
            deployment to build scalable, production-ready AI applications.
          </p>

          <div className="career-grid">
            <div className="career-item">
              <h3>🤖 Generative AI</h3>
              <p>
                Stable Diffusion, SDXL, LoRA, ControlNet,
                DreamBooth, Prompt Engineering
              </p>
            </div>

            <div className="career-item">
              <h3>👁 Computer Vision</h3>
              <p>
                OpenCV, CNN, LSTM, Video Analytics,
                Image Processing
              </p>
            </div>

            <div className="career-item">
              <h3>🧠 LLM & RAG</h3>
              <p>
                Gemini API, FAISS, Sentence Transformers,
                Semantic Search
              </p>
            </div>

            <div className="career-item">
              <h3>⚡ Software Engineering</h3>
              <p>
                React, TypeScript, FastAPI,
                Python, Git, Docker
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="resume-cta">
        <div className="resume-cta-card">
          <h2>Interested in Working Together?</h2>

          <p>
            I'm actively looking for opportunities in Artificial Intelligence,
            Machine Learning, Computer Vision, Generative AI, and Software
            Engineering. Feel free to connect if you'd like to collaborate on
            research, internships, freelance work, or full-time opportunities.
          </p>

          <div className="resume-cta-buttons">
            <a
              href="mailto:abhinands105@gmail.com"
              className="primary-btn"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/abhinands105"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}