import type {
  Category,
  Difficulty,
  QuizQuestion,
  UserAnswer,
} from "./Question";

export interface QuizSettings {
  category: Category;
  difficulty: Difficulty;
  totalQuestions: number;
  timePerQuestion: number;
}

export interface QuizState {
  questions: QuizQuestion[];

  currentQuestion: number;

  score: number;

  correctAnswers: number;

  wrongAnswers: number;

  skippedAnswers: number;

  answers: UserAnswer[];

  completed: boolean;

  started: boolean;

  startTime?: number;

  endTime?: number;

  settings: QuizSettings;
}

export interface QuizResult {
  score: number;

  totalScore: number;

  percentage: number;

  correct: number;

  wrong: number;

  skipped: number;

  totalQuestions: number;

  totalTime: number;

  accuracy: number;

  rank: string;

  xpEarned: number;
}

export interface QuizStats {
  quizzesPlayed: number;

  totalQuestionsAnswered: number;

  totalCorrectAnswers: number;

  totalWrongAnswers: number;

  averageAccuracy: number;

  highestScore: number;

  totalXP: number;

  streak: number;

  lastPlayed?: string;
}