import { useState } from "react";
import "./Skills.css";

import SkillCategories from "./components/SkillCategories";
import SkillGrid from "./components/SkillGrid";
import SkillProgress from "./components/SkillProgress";
import TechStack from "./components/TechStack";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="skills-page page-container">
      {/* ================= HERO ================= */}

      <section className="skills-hero">
        <span className="section-badge">Technical Expertise</span>

        <h1>
          Skills &
          <span> Technology Stack</span>
        </h1>

        <p>
          My expertise spans Artificial Intelligence, Machine Learning,
          Computer Vision, Generative AI, Large Language Models, Retrieval
          Augmented Generation, and modern software development. I enjoy
          building intelligent systems that solve real-world problems through
          scalable AI solutions.
        </p>

        <div className="skills-overview">
          <div className="overview-card">
            <h3>25+</h3>
            <span>Core Technologies</span>
          </div>

          <div className="overview-card">
            <h3>6+</h3>
            <span>AI Projects</span>
          </div>

          <div className="overview-card">
            <h3>17+</h3>
            <span>Certifications</span>
          </div>

          <div className="overview-card">
            <h3>2022</h3>
            <span>Learning Journey</span>
          </div>
        </div>
      </section>

      {/* ================= FILTERS ================= */}

      <section className="skills-section">
        <h2>Browse Skills</h2>

        <SkillCategories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <SkillGrid selectedCategory={selectedCategory} />
      </section>

      {/* ================= CORE SKILLS ================= */}

      <section className="skills-section">
        <h2>Core Proficiency</h2>

        <div className="progress-grid">
          <SkillProgress
            title="Python"
            percentage={95}
          />

          <SkillProgress
            title="Generative AI"
            percentage={95}
          />

          <SkillProgress
            title="Stable Diffusion"
            percentage={94}
          />

          <SkillProgress
            title="PyTorch"
            percentage={92}
          />

          <SkillProgress
            title="Computer Vision"
            percentage={90}
          />

          <SkillProgress
            title="TensorFlow"
            percentage={88}
          />

          <SkillProgress
            title="LLMs & RAG"
            percentage={90}
          />

          <SkillProgress
            title="FastAPI"
            percentage={85}
          />
        </div>
      </section>

      {/* ================= TECH STACK ================= */}

      <TechStack />
    </div>
  );
}