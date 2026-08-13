interface SkillProgressProps {
  title: string;
  percentage: number;
  color?: string;
}

export default function SkillProgress({
  title,
  percentage,
  color = "#8B5CF6",
}: SkillProgressProps) {
  return (
    <div className="skill-progress-card">
      <div className="skill-progress-header">
        <h4>{title}</h4>
        <span>{percentage}%</span>
      </div>

      <div className="skill-progress-track">
        <div
          className="skill-progress-bar"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}, #22d3ee)`,
          }}
        />
      </div>
    </div>
  );
}