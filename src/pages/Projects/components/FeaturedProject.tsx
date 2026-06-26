import {
  FaArrowRight,
  FaGithub,
  FaMagic,
} from "react-icons/fa";

export default function FeaturedProject() {
  return (
    <section className="featured-project glass">

      <div className="featured-left">

        <span className="featured-category">
          FEATURED PROJECT
        </span>

        <h2 className="gradient-text">
          CARTOONIX AI
        </h2>

        <p>
          CARTOONIX is an offline AI-powered cartoon and
          sketch generation platform built using Stable
          Diffusion XL, LoRA Fine-Tuning and ControlNet.
          The platform transforms natural language prompts
          into high-quality stylized illustrations while
          maintaining complete privacy through local
          inference.
        </p>

        <div className="featured-highlights">

          <div className="highlight-item">

            <FaMagic />

            <span>
              Prompt-to-Cartoon Generation
            </span>

          </div>

          <div className="highlight-item">

            <FaMagic />

            <span>
              LoRA Fine-Tuning
            </span>

          </div>

          <div className="highlight-item">

            <FaMagic />

            <span>
              Stable Diffusion XL
            </span>

          </div>

          <div className="highlight-item">

            <FaMagic />

            <span>
              ControlNet Integration
            </span>

          </div>

          <div className="highlight-item">

            <FaMagic />

            <span>
              Offline AI Inference
            </span>

          </div>

          <div className="highlight-item">

            <FaMagic />

            <span>
              Multi-Style Image Generation
            </span>

          </div>

        </div>

        <div className="project-tech">

          {[
            "Python",
            "PyTorch",
            "Stable Diffusion XL",
            "LoRA",
            "ControlNet",
            "CUDA",
            "Diffusers",
            "Gradio",
          ].map((tech) => (

            <span
              key={tech}
              className="tech-chip"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="project-links">

          <a
            href="https://github.com/abhinands105"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >

            <FaGithub />

            GitHub

          </a>

          <a
            href="https://abhinands105.github.io/abhinand-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >

            <FaArrowRight />

            View Portfolio

          </a>

        </div>

      </div>

      <div className="featured-right">

        <div className="featured-preview">

          <div className="preview-glow" />

          <div className="preview-content">

            <FaMagic className="preview-icon" />

            <h3>
              AI Image Generation
            </h3>

            <p>
              Prompt ➜ LoRA ➜ ControlNet ➜
              Stable Diffusion XL ➜ Final Artwork
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}