import "./Experience.css";

import ExperienceTimeline from "./components/ExperienceTimeline";
import Research from "./components/Research";
import OpenSource from "./components/OpenSource";

export default function Experience() {
  return (
    <div className="experience-page page-container">
      {/* ================= HERO ================= */}

      <section className="experience-hero">
        <span className="section-badge">
          Professional Journey
        </span>

        <h1>
          Experience &
          <span> Research</span>
        </h1>

        <p>
          My journey combines Artificial Intelligence research, academic
          projects, industry training, and open-source development. I focus on
          building scalable AI systems in Generative AI, Computer Vision,
          Retrieval-Augmented Generation (RAG), and Machine Learning.
        </p>

        <div className="experience-stats">
          <div className="experience-stat-card">
            <h2>2+</h2>
            <span>Years Learning AI</span>
          </div>

          <div className="experience-stat-card">
            <h2>15+</h2>
            <span>AI Projects</span>
          </div>

          <div className="experience-stat-card">
            <h2>17+</h2>
            <span>Certifications</span>
          </div>

          <div className="experience-stat-card">
            <h2>4+</h2>
            <span>Research Areas</span>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="experience-section">
        <div className="section-heading">
          <h2>Professional Experience</h2>

          <p>
            Academic projects, internships and professional AI development
            experience.
          </p>
        </div>

        <ExperienceTimeline />
      </section>

      {/* ================= RESEARCH ================= */}

      <Research />

      {/* ================= OPEN SOURCE ================= */}

      <OpenSource />

      {/* ================= HIGHLIGHTS ================= */}

      <section className="career-highlights">
        <div className="highlight-card">
          <h3>Generative AI</h3>

          <p>
            Developing production-ready image generation systems using Stable
            Diffusion, LoRA and ControlNet.
          </p>
        </div>

        <div className="highlight-card">
          <h3>Computer Vision</h3>

          <p>
            Building intelligent video analytics, CNN-LSTM pipelines and
            real-time AI applications.
          </p>
        </div>

        <div className="highlight-card">
          <h3>LLMs & RAG</h3>

          <p>
            Creating Retrieval-Augmented Generation systems using FAISS,
            embeddings and modern Large Language Models.
          </p>
        </div>

        <div className="highlight-card">
          <h3>Full Stack AI</h3>

          <p>
            Developing complete AI products using React, TypeScript, FastAPI,
            Python and modern deployment workflows.
          </p>
        </div>
      </section>
    </div>
  );
}