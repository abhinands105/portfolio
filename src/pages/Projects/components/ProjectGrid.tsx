import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectGrid() {
  return (
    <section className="project-grid-section">

      <div className="section-heading">

        <span className="section-label">
          ALL PROJECTS
        </span>

        <h2>
          AI Engineering Portfolio
        </h2>

        <p className="section-description">
          Explore my work across Generative AI, Computer Vision,
          Multimodal AI, Retrieval-Augmented Generation,
          Deep Learning, Dataset Engineering and modern AI
          application development.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}