interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  type,
  description,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3>{role}</h3>
          <h4>{company}</h4>
        </div>

        <span className="experience-type">
          {type}
        </span>
      </div>

      <div className="experience-meta">
        <span>{duration}</span>
        <span>•</span>
        <span>{location}</span>
      </div>

      <p className="experience-description">
        {description}
      </p>

      <div className="experience-achievements">
        <h5>Key Achievements</h5>

        <ul>
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="experience-technologies">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="tech-chip"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}