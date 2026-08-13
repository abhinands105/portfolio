import { resume } from "../data/resume";

export default function ResumePreview() {
  return (
    <section className="resume-preview">
      <div className="section-title">
        <h2>Resume Overview</h2>

        <p>
          A quick overview of my education, professional experience, projects,
          and certifications.
        </p>
      </div>

      <div className="resume-preview-grid">
        {/* ================= EXPERIENCE ================= */}

        <div className="resume-preview-card">
          <h3>Professional Experience</h3>

          {resume.experience.map((item) => (
            <div
              key={item.company}
              className="resume-item"
            >
              <h4>{item.role}</h4>

              <span>{item.company}</span>

              <small>{item.duration}</small>
            </div>
          ))}
        </div>

        {/* ================= EDUCATION ================= */}

        <div className="resume-preview-card">
          <h3>Education</h3>

          {resume.education.map((item) => (
            <div
              key={item.institution}
              className="resume-item"
            >
              <h4>{item.degree}</h4>

              <span>{item.institution}</span>

              <small>{item.duration}</small>
            </div>
          ))}
        </div>

        {/* ================= PROJECTS ================= */}

        <div className="resume-preview-card">
          <h3>Major Projects</h3>

          <ul>
            {resume.projects.map((project) => (
              <li key={project}>
                {project}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CERTIFICATIONS ================= */}

        <div className="resume-preview-card">
          <h3>Certifications</h3>

          <ul>
            {resume.certifications.map((cert) => (
              <li key={cert}>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}