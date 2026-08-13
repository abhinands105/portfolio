import { useState } from "react";
import challenges from "../data/challenges";
import { scorePrompt } from "../engine/scorer";
import type { PromptResult } from "../types/Prompt";



export default function usePromptArena() {
  const [prompt, setPrompt] = useState("");

  const [result, setResult] = useState<PromptResult | null>(null);

  const [challenge] = useState(
    challenges[Math.floor(Math.random() * challenges.length)]
  );

  function evaluate() {
    setResult(scorePrompt(prompt));
  }

  return {
    prompt,
    setPrompt,
    challenge,
    result,
    evaluate,
  };
}