import { useMemo, useState } from "react";

import QuizHome from "./QuizHome";

// (Create this component next)
import QuizPlay from "./QuizPlay";

import { useQuiz } from "./hooks/useQuiz";

import type {
  Category,
  Difficulty,
  QuizQuestion,
} from "./types/Question";

import type { QuizSettings } from "./types/Quiz";

import datasets from "./data";

export default function AIQuiz() {
  const [started, setStarted] = useState(false);

  const [settings, setSettings] =
    useState<QuizSettings>({
      category: "machine-learning",
      difficulty: "easy",
      totalQuestions: 10,
      timePerQuestion: 30,
    });

  const questions = useMemo(() => {
    const categoryQuestions =
      datasets[settings.category as keyof typeof datasets] ?? [];

    const allQuestions = categoryQuestions as QuizQuestion[];

    if (settings.difficulty === "mixed") {
      return allQuestions;
    }

    return allQuestions.filter(
      (q) => q.difficulty === settings.difficulty
    );
  }, [settings]);

  const quiz = useQuiz(questions, settings);

  const startQuiz = (
    category: Category,
    difficulty: Difficulty,
    totalQuestions: number
  ) => {
    setSettings({
      category,
      difficulty,
      totalQuestions,
      timePerQuestion: 30,
    });

    setStarted(true);
  };

  if (!started) {
    return (
      <div className="glass neon-border">
        <QuizHome onStart={startQuiz} />
      </div>
    );
  }

  return (
    <div className="glass neon-border">
      <QuizPlay quiz={quiz} />
    </div>
  );
}