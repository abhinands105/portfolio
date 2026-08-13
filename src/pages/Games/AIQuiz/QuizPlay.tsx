import { useState } from "react";

import type { useQuiz } from "./hooks/useQuiz";

interface Props {
  quiz: ReturnType<typeof useQuiz>;
}

export default function QuizPlay({ quiz }: Props) {
  const {
    currentQuestion,
    currentIndex,
    questions,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finished,
    result,
  } = quiz;

  const [selected, setSelected] = useState<number | null>(null);

  if (finished) {
    return (
      <div className="quiz-result">
        <h1>🎉 Quiz Completed</h1>

        <h2>{result.rank}</h2>

        <div className="result-grid">
          <div>Score: {result.score}</div>
          <div>Accuracy: {result.accuracy}%</div>
          <div>Correct: {result.correct}</div>
          <div>Wrong: {result.wrong}</div>
          <div>Skipped: {result.skipped}</div>
          <div>XP Earned: +{result.xpEarned}</div>
        </div>

        <button onClick={() => window.location.reload()}>
          Play Again
        </button>
      </div>
    );
  }

  if (!currentQuestion) {
    return <h2>No Questions Found.</h2>;
  }

  const submit = () => {
    if (selected === null) return;

    answerQuestion(selected);

    setTimeout(() => {
      setSelected(null);
      nextQuestion();
    }, 400);
  };

  return (
    <div className="quiz-play glass neon-border">

      <div className="progress">

        <span>
          Question {currentIndex + 1} / {questions.length}
        </span>

        <progress
          value={currentIndex + 1}
          max={questions.length}
        />

      </div>

      <div className="question-card">

        <h2>{currentQuestion.question}</h2>

        <div className="options">

          {currentQuestion.options.map((option, index) => (

            <button
              key={index}
              className={
                selected === index
                  ? "selected-option"
                  : ""
              }
              onClick={() => setSelected(index)}
            >
              {option}
            </button>

          ))}

        </div>

      </div>

      <div className="navigation">

        <button
          disabled={currentIndex === 0}
          onClick={previousQuestion}
        >
          Previous
        </button>

        <button
          disabled={selected === null}
          onClick={submit}
        >
          {currentIndex === questions.length - 1
            ? "Finish"
            : "Next"}
        </button>

      </div>

    </div>
  );
}