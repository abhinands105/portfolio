import type { Dispatch, SetStateAction } from "react";
import { projectCategories } from "../data/projects";

interface Props { active: string; setActive: Dispatch<SetStateAction<string>>; }

export default function ProjectFilters({ active, setActive }: Props) {
  return (
    <section className="project-filters-section">
      <div className="section-heading compact-heading">
        <span className="section-label">FILTER</span>
        <h2>Explore the engineering domains</h2>
      </div>
      <div className="project-filters" role="tablist" aria-label="Project categories">
        {projectCategories.map((filter) => (
          <button key={filter} className={`filter-btn ${active === filter ? "active" : ""}`} onClick={() => setActive(filter)}>
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
