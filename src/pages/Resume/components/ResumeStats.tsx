import { resume } from "../data/resume";

export default function ResumeStats() {
  return (
    <section className="resume-stats-section">
      <div className="section-title">
        <h2>Technical Expertise</h2>

        <p>
          Core technologies and domains I specialize in across Artificial
          Intelligence, Machine Learning, Computer Vision and Software
          Engineering.
        </p>
      </div>

      <div className="resume-stats-grid">
        {resume.skills.map((skill) => (
          <div
            key={skill.category}
            className="resume-skill-card"
          >
            <div className="resume-skill-header">
              <h3>{skill.category}</h3>

              <span>{skill.items.length} Skills</span>
            </div>

            <div className="resume-skill-tags">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="resume-tag"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}