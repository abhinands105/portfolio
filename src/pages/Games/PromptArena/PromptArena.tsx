import "./PromptArena.css";

import ChallengeCard from "./components/ChallengeCard";
import PromptEditor from "./components/PromptEditor";
import ScoreCard from "./components/ScoreCard";
import SuggestionList from "./components/SuggestionList";
import PromptPreview from "./components/PromptPreview";

import usePromptArena from "./hooks/usePromptArena";

export default function PromptArena() {
  const {
    challenge,
    prompt,
    setPrompt,
    result,
    evaluate,
  } = usePromptArena();

  return (
    <div className="prompt-arena">

      <h1>Prompt Engineering Arena</h1>

      <ChallengeCard challenge={challenge} />

      <PromptEditor
        value={prompt}
        onChange={setPrompt}
        onEvaluate={evaluate}
      />

      {result && (
        <>

          <h2>
            Overall Score {result.overallScore}/100
          </h2>

          <ScoreCard
            title="Clarity"
            score={result.clarity}
          />

          <ScoreCard
            title="Specificity"
            score={result.specificity}
          />

          <ScoreCard
            title="Creativity"
            score={result.creativity}
          />

          <ScoreCard
            title="Structure"
            score={result.structure}
          />

          <SuggestionList
            suggestions={result.suggestions}
          />

          <PromptPreview
                original={prompt}
                improved={result.improvedPrompt}
            />

        </>
      )}

    </div>
  );
}