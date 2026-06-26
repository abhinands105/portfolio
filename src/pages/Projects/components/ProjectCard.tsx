import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

interface Project {

  title: string;

  category: string;

  description: string;

  tech: string[];

  github?: string;

  demo?: string;

  featured?: boolean;

  status?: string;

}

interface Props {

  project: Project;

}

export default function ProjectCard({
  project,
}: Props) {

  return (

    <article className="project-card glass">

      {/* Badge */}

      <div className="project-top">

        <span className="project-category">

          {project.category}

        </span>

        {project.featured && (

          <span className="featured-badge">

            <FaStar />

            Featured

          </span>

        )}

      </div>

      {/* Title */}

      <h3>

        {project.title}

      </h3>

      {/* Description */}

      <p>

        {project.description}

      </p>

      {/* Tech */}

      <div className="project-tech">

        {project.tech.map((item) => (

          <span
            key={item}
            className="tech-chip"
          >

            {item}

          </span>

        ))}

      </div>

      {/* Status */}

      {project.status && (

        <div className="project-status">

          <span className="status-dot" />

          {project.status}

        </div>

      )}

      {/* Buttons */}

      <div className="project-links">

        {project.github && (

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >

            <FaGithub />

            GitHub

          </a>

        )}

        {project.demo && (

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >

            <FaExternalLinkAlt />

            Live Demo

          </a>

        )}

      </div>

    </article>

  );

}