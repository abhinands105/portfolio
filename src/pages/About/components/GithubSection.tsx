import {
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaCode,
} from "react-icons/fa";

const featuredProjects = [
  {
    name: "AI Portfolio",
    description:
      "Modern React + TypeScript portfolio showcasing AI projects and research.",
  },
  {
    name: "CARTOONIX",
    description:
      "Offline Stable Diffusion + LoRA + ControlNet image generation platform.",
  },
  {
    name: "Violence Detection",
    description:
      "CNN + LSTM video violence detection using TensorFlow and OpenCV.",
  },
  {
    name: "Spider-Verse Dataset",
    description:
      "Dataset engineering, caption generation and multimodal AI pipeline.",
  },
];

export default function GithubSection() {
  return (
    <section className="github-section">

      <div className="section-heading">

        <span className="section-label">
          OPEN SOURCE
        </span>

        <h2>
          GitHub & Portfolio
        </h2>

        <p className="section-description">
          I actively build AI applications, research projects,
          computer vision systems and Generative AI tools.
          Most of my work is available publicly on GitHub.
        </p>

      </div>

      <div className="github-layout">

        <div className="glass github-profile-card">

          <FaGithub className="github-logo" />

          <h3>GitHub</h3>

          <p>
            github.com/abhinands105
          </p>

          <a
            href="https://github.com/abhinands105"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            <FaExternalLinkAlt />

            Visit GitHub
          </a>

        </div>

        <div className="glass github-profile-card">

          <FaCode className="github-logo" />

          <h3>Portfolio</h3>

          <p>
            AI Engineer Portfolio
          </p>

          <a
            href="https://abhinands105.github.io/abhinand-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            <FaExternalLinkAlt />

            View Portfolio
          </a>

        </div>

      </div>

      <div className="featured-projects">

        {featuredProjects.map((project) => (

          <article
            key={project.name}
            className="glass featured-card"
          >

            <FaCodeBranch className="repo-icon" />

            <h3>{project.name}</h3>

            <p>{project.description}</p>

          </article>

        ))}

      </div>

    </section>
  );
}