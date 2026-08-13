import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";

interface Props { projects: Project[]; }

export default function ProjectGrid({ projects }: Props) {
  return (
    <section className="project-grid-section">
      <div className="section-heading">
        <span className="section-label">PROJECT LIBRARY</span>
        <h2>Projects built as systems, not screenshots.</h2>
        <p className="section-description">
          Each case study opens the full engineering trail: problem, data, preprocessing, model, training, inference, experiments and outputs.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
