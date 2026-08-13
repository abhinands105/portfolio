import "./Hero.css";
import PortraitCanvas from "../portrait/PortraitCanvas";
import Terminal from "../terminal/Terminal";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <span className="hero-badge">
            👋 Hello, I'm
          </span>

          <h1>
            Abhinand <span>Subramanian</span>
          </h1>

          <h2>
            Generative AI • Machine Learning • Computer Vision
          </h2>

          <p>
            B.Tech Artificial Intelligence & Data Science student passionate
            about Generative AI, Computer Vision, Large Language Models,
            and building intelligent software products.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="primary-btn">
              View Projects
            </a>

            <a href="/contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">

          <div className="hero-portrait">
            <PortraitCanvas />
          </div>

          <div className="hero-terminal">
            <Terminal />
          </div>

        </div>

        {/* STATS */}
        <div className="hero-stats">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}