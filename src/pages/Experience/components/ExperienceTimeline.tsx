import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="experience-timeline">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="timeline-item"
        >
          <div className="timeline-dot" />

          <ExperienceCard
            company={experience.company}
            role={experience.role}
            duration={experience.duration}
            location={experience.location}
            type={experience.type}
            description={experience.description}
            achievements={experience.achievements}
            technologies={experience.technologies}
          />
        </div>
      ))}
    </section>
  );
}