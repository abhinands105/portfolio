import "./About.css";

import ProfileCard from "./components/ProfileCard";
import Summary from "./components/Summary";
import Stats from "./components/Stats";
import Expertise from "./components/Expertise";
import CurrentFocus from "./components/CurrentFocus";
import CertificationGrid from "./components/CertificationGrid";
import GithubSection from "./components/GithubSection";
import AILab from "./components/AILab";
import Education from "./components/Education";
import Timeline from "./components/Timeline";
import AchievementCards from "./components/AchievementCards";
import FutureVision from "./components/FutureVision";

export default function About() {
  return (
    <main className="about-page">
      {/* =========================
          PAGE HEADER
      ========================= */}

      <header className="about-header">
        <p className="about-tag">ABOUT ME</p>

        <h1 className="gradient-text">
          Building the Future with Artificial Intelligence
        </h1>

        <p className="about-subtitle">
          AI Engineer specializing in Generative AI, Computer Vision,
          Multimodal AI, Retrieval-Augmented Generation (RAG), AI Agents,
          and Intelligent Product Development.
        </p>
      </header>

      {/* =========================
          MAIN LAYOUT
      ========================= */}

      <section className="about-grid">
        {/* LEFT SIDEBAR */}

        <aside className="about-sidebar">
          <ProfileCard />
        </aside>

        {/* RIGHT CONTENT */}

        <section className="about-content">
          <Summary />

          <Stats />

          <Expertise />

          <CurrentFocus />

          <CertificationGrid />

          <GithubSection />

          <AILab />

          <Education />

          <Timeline />

          <AchievementCards />

          <FutureVision />
        </section>
      </section>
    </main>
  );
}