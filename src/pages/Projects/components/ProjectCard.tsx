import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

interface Props { project: Project; }

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card glass">
      <div className="project-card-topline">
        <span className="project-category">{project.category}</span>
        <span className="project-year">{project.year}</span>
      </div>

      <div className="project-card-visual">
        <div className="visual-grid" />
        <span className="visual-kicker">{project.heroLabel}</span>
        <strong>{project.shortTitle}</strong>
        <span className="visual-arrow">↗</span>
      </div>

      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>

        <div className="project-micro-metrics">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="project-tech">
          {project.tech.slice(0, 6).map((item) => <span className="tech-chip" key={item}>{item}</span>)}
          {project.tech.length > 6 && <span className="tech-chip muted-chip">+{project.tech.length - 6}</span>}
        </div>

        <div className="project-card-footer">
          <span className="project-status"><span className="status-dot" />{project.status}</span>
          <Link to={`/projects/${project.slug}`} className="primary-btn">
            Case Study <FaArrowRight />
          </Link>
        </div>

        <div className="project-card-links">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> Source</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Demo</a>}
        </div>
      </div>
    </article>
  );
}
