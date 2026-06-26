export interface SkillCategory {
  id: string;
  label: string;
  color?: string;
}

export const categories: SkillCategory[] = [
  {
    id: "all",
    label: "All",
    color: "#8B5CF6",
  },
  {
    id: "genai",
    label: "Generative AI",
    color: "#A855F7",
  },
  {
    id: "llm",
    label: "LLMs & RAG",
    color: "#7C3AED",
  },
  {
    id: "cv",
    label: "Computer Vision",
    color: "#2563EB",
  },
  {
    id: "ml",
    label: "Machine Learning",
    color: "#06B6D4",
  },
  {
    id: "languages",
    label: "Programming",
    color: "#10B981",
  },
  {
    id: "frameworks",
    label: "Frameworks",
    color: "#F59E0B",
  },
  {
    id: "tools",
    label: "Tools",
    color: "#EC4899",
  },
  {
    id: "database",
    label: "Databases",
    color: "#14B8A6",
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#3B82F6",
  },
  {
    id: "data",
    label: "Data Science",
    color: "#F97316",
  },
];