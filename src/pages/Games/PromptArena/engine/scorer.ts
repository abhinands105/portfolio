import KEYWORDS from "./keywordAnalyzer";
import { analyseStructure } from "./structure";
import { generateSuggestions } from "./suggestions";
import { improvePrompt } from "./improver";

export function scorePrompt(prompt: string) {
  const words = prompt.trim().split(/\s+/).filter(Boolean);

  //------------------------
  // Clarity
  //------------------------

  let clarity = 0;

  if (words.length > 40) clarity = 100;
  else if (words.length > 25) clarity = 85;
  else if (words.length > 15) clarity = 70;
  else if (words.length > 8) clarity = 50;
  else clarity = 20;

  //------------------------
  // Keyword Score
  //------------------------

  const lower = prompt.toLowerCase();

  let keywordCount = 0;

  Object.values(KEYWORDS)
    .flat()
    .forEach((keyword) => {
      if (lower.includes(keyword)) keywordCount++;
    });

  const specificity = Math.min(keywordCount * 12, 100);

  //------------------------
  // Structure
  //------------------------

  const structureResult = analyseStructure(prompt);

  const structure =
    Object.values(structureResult).filter(Boolean).length * 16;

  //------------------------
  // Creativity
  //------------------------

  const uniqueWords = new Set(
    words.map((w) => w.toLowerCase())
  );

  const creativity = Math.min(uniqueWords.size * 4, 100);

  //------------------------
  // Final Score
  //------------------------

  const overallScore = Math.round(
    (clarity +
      specificity +
      structure +
      creativity) / 4
  );

  //------------------------
  // Grade
  //------------------------

  let grade = "D";

  if (overallScore >= 95)
    grade = "S";
  else if (overallScore >= 85)
    grade = "A";
  else if (overallScore >= 70)
    grade = "B";
  else if (overallScore >= 55)
    grade = "C";

  //------------------------
  // Stars
  //------------------------

  const stars = Math.ceil(overallScore / 20);

  //------------------------
  // Return
  //------------------------

  return {
    prompt,

    overallScore,

    clarity,

    specificity,

    creativity,

    structure,

    grade,

    stars,

    improvedPrompt: improvePrompt(prompt),

    suggestions: generateSuggestions(structureResult),

    missingKeywords: [],
  };
}