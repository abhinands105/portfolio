import "./../Skills.css";

export interface SkillCardProps {
  name: string;
  description: string;
  level: number;
  icon: string;
}

export default function SkillCard({
  name,
  description,
  level,
  icon,
}: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <div className="skill-icon">{icon}</div>

        <div className="skill-info">
          <h3>{name}</h3>
          <span>{level}%</span>
        </div>
      </div>

      <p className="skill-description">
        {description}
      </p>

      <div className="skill-progress">
        <div
          className="skill-progress-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}