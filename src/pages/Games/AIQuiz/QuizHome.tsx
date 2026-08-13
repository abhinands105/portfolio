import { useState } from "react";
import "./AIQuiz.css";

import {
  CATEGORIES,
  DIFFICULTIES,
  QUESTION_OPTIONS,
} from "./utils/constants";

import type {
  Category,
  Difficulty,
} from "./types/Question";

interface Props {
  onStart: (
    category: Category,
    difficulty: Difficulty,
    totalQuestions: number
  ) => void;
}

export default function QuizHome({
  onStart,
}: Props) {
  const [category, setCategory] =
    useState<Category>("machine-learning");

  const [difficulty, setDifficulty] =
    useState<Difficulty>("easy");

  const [questions, setQuestions] =
    useState(10);

  return (
    <div className="quiz-home glass neon-border">

      <h1 className="gradient-text">
        🧠 AI Quiz Challenge
      </h1>

      <p>
        Test your Artificial Intelligence knowledge.
      </p>

      <section>

        <h2>Category</h2>

        <div className="grid">

          {CATEGORIES.map((item) => (

            <button
              key={item.id}
              className={
                category === item.id
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setCategory(item.id)
              }
            >
              <h3>{item.title}</h3>

              <small>
                {item.description}
              </small>

            </button>

          ))}

        </div>

      </section>

      <section>

        <h2>Difficulty</h2>

        <div className="difficulty">

          {DIFFICULTIES.map((item) => (

            <button
              key={item}
              className={
                difficulty === item
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setDifficulty(item)
              }
            >
              {item.toUpperCase()}
            </button>

          ))}

        </div>

      </section>

      <section>

        <h2>Questions</h2>

        <div className="difficulty">

          {QUESTION_OPTIONS.map((item) => (

            <button
              key={item}
              className={
                questions === item
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setQuestions(item)
              }
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      <button
        className="start-btn"
        onClick={() =>
          onStart(
            category,
            difficulty,
            questions
          )
        }
      >
        Start Quiz
      </button>

    </div>
  );
}