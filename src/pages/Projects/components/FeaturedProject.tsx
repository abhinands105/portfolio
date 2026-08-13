import { FaArrowRight, FaGithub, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function FeaturedProject() {
  const project = projects.find((item) => item.slug === "spiderverse") ?? projects[0];

  return (
    <section className="featured-project glass">
      <div className="featured-copy">
        <span className="featured-category">FEATURED CASE STUDY · {project.category.toUpperCase()}</span>
        <h2 className="gradient-text">{project.title}</h2>
        <p>{project.description}</p>

        <div className="featured-metrics">
          {project.metrics.slice(0, 4).map((metric) => (
            <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
          ))}
        </div>

        <div className="project-tech">
          {project.tech.slice(0, 8).map((tech) => <span className="tech-chip" key={tech}>{tech}</span>)}
        </div>

        <div className="project-links">
          <Link className="primary-btn" to={`/projects/${project.slug}`}>Open full case study <FaArrowRight /></Link>
          {project.github && <a className="secondary-btn" href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}
        </div>
      </div>

      <div className="featured-preview">
        <div className="preview-scan" />
        <div className="preview-core">
          <FaPlay className="preview-play" />
          <span>VIDEO GENERATION</span>
          <strong>DATA → WAN LoRA → VIDEO</strong>
          <small>1,239 clips · 8,969 frames · local GPU workflow</small>
        </div>
        <div className="preview-corner preview-corner-a" />
        <div className="preview-corner preview-corner-b" />
      </div>
    </section>
  );
}
