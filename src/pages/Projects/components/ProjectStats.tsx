import {
  FaProjectDiagram,
  FaRobot,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    value: "15+",
    title: "AI Projects",
    description:
      "Completed AI, Computer Vision and Generative AI projects.",
    icon: <FaProjectDiagram />,
  },
  {
    value: "6+",
    title: "AI Domains",
    description:
      "Generative AI, RAG, Computer Vision, LLMs and Multimodal AI.",
    icon: <FaBrain />,
  },
  {
    value: "17+",
    title: "Certifications",
    description:
      "Google, IBM, Dataiku, NPTEL and industry certifications.",
    icon: <FaRobot />,
  },
  {
    value: "10K+",
    title: "Lines of Code",
    description:
      "Python, React, TypeScript, TensorFlow and PyTorch.",
    icon: <FaCode />,
  },
];

export default function ProjectStats() {
  return (
    <section className="project-stats-section">

      <div className="section-heading">

        <span className="section-label">
          OVERVIEW
        </span>

        <h2>
          Project Statistics
        </h2>

        <p className="section-description">
          A quick overview of my AI engineering journey,
          highlighting projects, technical expertise,
          certifications and software development
          experience.
        </p>

      </div>

      <div className="project-stats">

        {stats.map((stat) => (

          <article
            key={stat.title}
            className="project-stat-card glass"
          >

            <div className="project-stat-icon">

              {stat.icon}

            </div>

            <h2 className="gradient-text">

              {stat.value}

            </h2>

            <h3>

              {stat.title}

            </h3>

            <p>

              {stat.description}

            </p>

          </article>

        ))}

      </div>

    </section>
  );
}