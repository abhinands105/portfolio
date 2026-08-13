import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

interface SkillGridProps {
  selectedCategory: string;
}

export default function SkillGrid({
  selectedCategory,
}: SkillGridProps) {
  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter(
          (skill) => skill.category === selectedCategory
        );

  return (
    <div className="skills-grid">
      {filteredSkills.map((skill) => (
        <SkillCard
          key={skill.id}
          name={skill.name}
          description={skill.description}
          level={skill.level}
          icon={skill.icon}
        />
      ))}
    </div>
  );
}