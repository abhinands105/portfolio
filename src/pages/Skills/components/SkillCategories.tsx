import type { SkillCategory } from "../data/categories";
import { categories } from "../data/categories";

interface SkillCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function SkillCategories({
  selectedCategory,
  onSelectCategory,
}: SkillCategoriesProps) {
  return (
    <div className="skill-categories">
      {categories.map((category: SkillCategory) => (
        <button
          key={category.id}
          type="button"
          className={`category-btn ${
            selectedCategory === category.id ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}