// =============================================
// AI Quiz Challenge
// Question Types
// =============================================

export type Difficulty =
  | "easy"
  | "medium"
  | "hard"
  | "mixed";

  
export type Category =
  | "machine-learning"
  | "deep-learning"
  | "computer-vision"
  | "transformers"
  | "llms"
  | "rag"
  | "diffusion"
  | "prompt-engineering"
  | "python"
  | "pytorch"
  | "tensorflow"
  | "cuda"
  | "ai-agents"
  | "langchain"
  | "vector-databases"
  | "mlops"
  | "model-deployment"
  | "nlp"
  | "gans"
  | "reinforcement-learning"
  | "statistics"
  | "mathematics-for-ai"
  | "data-structures-for-ai"
  | "ai-ethics";

export interface Question {
  id: number;

  category: Category;

  difficulty: Difficulty;

  question: string;

  options: string[];

  correctAnswer: number;

  explanation: string;

  points: number;

  tags?: string[];

  image?: string;

  code?: string;

  timeLimit?: number;
}

export interface UserAnswer {
  questionId: number;

  selectedAnswer: number;

  isCorrect: boolean;

  timeTaken: number;
}

export interface QuizQuestion extends Question {
  selectedAnswer?: number;

  answered: boolean;

  skipped: boolean;
}