import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Projects.css";
import FeaturedProject from "./components/FeaturedProject";
import ProjectStats from "./components/ProjectStats";
import ProjectFilters from "./components/ProjectFilters";
import ProjectGrid from "./components/ProjectGrid";
import { projects } from "./data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((p) => p.category === active), [active]);

  return (
    <main className="projects-page">
      <header className="projects-header">
        <span className="projects-tag">PROJECTS / AI LAB</span>
        <h1 className="gradient-text">Built from data to deployment.</h1>
        <p>
          A new project experience for the actual engineering behind the outputs — dataset collection, cleaning, labeling, model training, inference, experiments and the final image or video results.
        </p>
        <div className="projects-header-actions">
          <a className="primary-btn" href="#project-library">Explore case studies <FaArrowRight /></a>
          <Link className="secondary-btn" to="/contact">Work with me</Link>
        </div>
      </header>

      <ProjectStats />
      <FeaturedProject />
      <ProjectFilters active={active} setActive={setActive} />
      <div id="project-library"><ProjectGrid projects={filtered} /></div>
    </main>
  );
}
