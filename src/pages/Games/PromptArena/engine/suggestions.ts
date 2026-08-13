export function generateSuggestions(structure: any) {
  const suggestions: string[] = [];

  if (!structure.subject)
    suggestions.push("Describe the main subject.");

  if (!structure.action)
    suggestions.push("Add an action.");

  if (!structure.environment)
    suggestions.push("Describe the environment.");

  if (!structure.style)
    suggestions.push("Specify an artistic style.");

  if (!structure.lighting)
    suggestions.push("Add lighting details.");

  if (!structure.camera)
    suggestions.push("Include a camera angle.");

  return suggestions;
}