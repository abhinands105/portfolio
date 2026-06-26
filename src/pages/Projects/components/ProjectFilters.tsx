import { useState } from "react";

const filters = [
  "All",
  "Generative AI",
  "Computer Vision",
  "Deep Learning",
  "Large Language Models",
  "Diffusion Models",
  "Data Engineering",
  "Web Development",
];

export default function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="project-filters-section">

      <div className="section-heading">

        <span className="section-label">
          FILTER PROJECTS
        </span>

        <h2>
          Explore by Technology
        </h2>

        <p className="section-description">
          Browse projects by AI domain, research area,
          or development technology.
        </p>

      </div>

      <div className="project-filters">

        {filters.map((filter) => (

          <button
            key={filter}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>

        ))}

      </div>

    </section>
  );
}