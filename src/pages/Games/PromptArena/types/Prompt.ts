export interface PromptResult {
  prompt: string;

  overallScore: number;

  clarity: number;

  specificity: number;

  creativity: number;

  structure: number;

  grade: string;

  stars: number;

  improvedPrompt: string;

  suggestions: string[];

  missingKeywords: string[];
}

export interface Challenge {
  id: number;

  title: string;

  description: string;

  difficulty: "easy" | "medium" | "hard";

  category: string;
}