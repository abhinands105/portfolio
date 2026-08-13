export function improvePrompt(prompt: string): string {
  let improved = prompt.trim();

  const lower = improved.toLowerCase();

  if (!lower.includes("pixar")) {
    improved += ", Pixar style";
  }

  if (!lower.includes("lighting")) {
    improved += ", cinematic lighting";
  }

  if (!lower.includes("35mm")) {
    improved += ", 35mm camera";
  }

  if (!lower.includes("detailed")) {
    improved += ", ultra detailed";
  }

  if (!lower.includes("fog")) {
    improved += ", volumetric fog";
  }

  return improved;
}