import "./Projects.css";

import FeaturedProject from "./components/FeaturedProject";
import ProjectStats from "./components/ProjectStats";
import ProjectFilters from "./components/ProjectFilters";
import ProjectGrid from "./components/ProjectGrid";

export default function Projects() {
  return (
    <div className="projects-page">

      <header className="projects-header">

        <span className="projects-tag">
          PORTFOLIO
        </span>

        <h1 className="gradient-text">
          AI Projects & Research
        </h1>

        <p>
          A collection of Generative AI, Computer Vision,
          Multimodal AI, RAG and Deep Learning projects
          developed during my engineering journey.
        </p>

      </header>

      <ProjectStats />

      <FeaturedProject />

      <ProjectFilters />

      <ProjectGrid />

    </div>
  );
}