import { useMemo, useState } from "react";

import type {
  QuizQuestion,
  UserAnswer,
} from "../types/Question";

import type {
  QuizSettings,
  QuizResult,
} from "../types/Quiz";

import { prepareQuiz } from "../utils/shuffle";

import {
  PASS_PERCENTAGE,
  XP_PER_CORRECT,
  XP_PER_PERFECT,
} from "../utils/constants";

export function useQuiz(
  allQuestions: QuizQuestion[],
  settings: QuizSettings
) {
  const questions = useMemo(
    () => prepareQuiz(allQuestions, settings.totalQuestions),
    [allQuestions, settings]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const answerQuestion = (
    selectedAnswer: number,
    timeTaken = 0
  ) => {
    if (!currentQuestion) return;

    if (
      answers.some(
        (a) => a.questionId === currentQuestion.id
      )
    ) {
      return;
    }

    const isCorrect =
      selectedAnswer === currentQuestion.correctAnswer;

    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeTaken,
    };

    setAnswers((prev) => [...prev, answer]);

    if (isCorrect) {
      setScore((prev) => prev + currentQuestion.points);
    }
  };

  const nextQuestion = () => {
    if (currentIndex >= questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;

    setCurrentIndex((prev) => prev - 1);
  };

  const restartQuiz = () => {
    window.location.reload();
  };

  const result: QuizResult = useMemo(() => {
    const correct = answers.filter(
      (a) => a.isCorrect
    ).length;

    const wrong = answers.filter(
      (a) => !a.isCorrect
    ).length;

    const skipped =
      questions.length - answers.length;

    const totalScore = questions.reduce(
      (sum, q) => sum + q.points,
      0
    );

    const percentage =
      totalScore === 0
        ? 0
        : Math.round((score / totalScore) * 100);

    const accuracy =
      questions.length === 0
        ? 0
        : Math.round(
            (correct / questions.length) * 100
          );

    let xpEarned = correct * XP_PER_CORRECT;

    if (accuracy === 100) {
      xpEarned += XP_PER_PERFECT;
    }

    let rank = "AI Beginner";

    if (accuracy >= 95) rank = "AI Grandmaster";
    else if (accuracy >= 90) rank = "AI Architect";
    else if (accuracy >= 80) rank = "Prompt Master";
    else if (accuracy >= 70) rank = "Vision Expert";
    else if (accuracy >= PASS_PERCENTAGE)
      rank = "ML Explorer";

    return {
      score,
      totalScore,
      percentage,
      correct,
      wrong,
      skipped,
      totalQuestions: questions.length,
      totalTime: answers.reduce(
        (sum, a) => sum + a.timeTaken,
        0
      ),
      accuracy,
      rank,
      xpEarned,
    };
  }, [answers, questions, score]);

  return {
    questions,

    currentQuestion,

    currentIndex,

    finished,

    score,

    answers,

    settings,

    result,

    answerQuestion,

    nextQuestion,

    previousQuestion,

    restartQuiz,
  };
}