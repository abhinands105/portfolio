import "./Contact.css";

import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import Availability from "./components/Availability";

export default function Contact() {
  return (
    <div className="contact-page page-container">
      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <span className="section-badge">
          Let's Connect
        </span>

        <h1>
          Get In
          <span> Touch</span>
        </h1>

        <p>
          Whether you're looking for an AI Engineer, Machine Learning
          Developer, Generative AI Specialist, or want to collaborate on
          research, open-source projects, or innovative AI products,
          I'd love to hear from you.
        </p>

        <div className="contact-stats">
          <div className="contact-stat-card">
            <h2>24h</h2>
            <span>Average Response</span>
          </div>

          <div className="contact-stat-card">
            <h2>Remote</h2>
            <span>Available Worldwide</span>
          </div>

          <div className="contact-stat-card">
            <h2>AI</h2>
            <span>Research & Development</span>
          </div>

          <div className="contact-stat-card">
            <h2>2026</h2>
            <span>B.Tech Graduation</span>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL ================= */}

      <SocialLinks />

      {/* ================= AVAILABILITY ================= */}

      <Availability />

      {/* ================= CONTACT FORM ================= */}

      <ContactForm />

      {/* ================= CTA ================= */}

      <section className="contact-cta">
        <div className="cta-card">
          <h2>Let's Build Something Amazing Together</h2>

          <p>
            I'm passionate about Artificial Intelligence, Computer Vision,
            Generative AI, Large Language Models, and building scalable
            intelligent systems that solve real-world problems.
          </p>

          <div className="cta-buttons">
            <a
              href="mailto:abhinands105@gmail.com"
              className="primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://github.com/abhinands105"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}