// =============================================
// AI Quiz Challenge
// Shuffle Utilities
// =============================================

import type { QuizQuestion } from "../types/Question";

/**
 * Fisher-Yates Shuffle
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * Get Random Questions
 */
export function getRandomQuestions(
  questions: QuizQuestion[],
  count: number
): QuizQuestion[] {
  return shuffleArray(questions).slice(0, count);
}

/**
 * Shuffle Question Options
 * Keeps the correct answer index updated.
 */
export function shuffleQuestion(
  question: QuizQuestion
): QuizQuestion {
  const options = [...question.options];

  const correctOption = options[question.correctAnswer];

  const shuffledOptions = shuffleArray(options);

  const newCorrectIndex = shuffledOptions.findIndex(
    (option) => option === correctOption
  );

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectIndex,
  };
}

/**
 * Shuffle Entire Quiz
 */
export function prepareQuiz(
  questions: QuizQuestion[],
  count: number
): QuizQuestion[] {
  return getRandomQuestions(questions, count).map(shuffleQuestion);
}