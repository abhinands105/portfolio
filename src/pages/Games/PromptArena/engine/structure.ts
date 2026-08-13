export function analyseStructure(prompt: string) {
  const text = prompt.toLowerCase();

  return {
    subject: /(robot|person|cat|dog|car|dragon|castle|city)/.test(text),

    action: /(walking|running|flying|standing|looking|holding)/.test(text),

    environment: /(forest|city|street|mountain|ocean|room|space)/.test(text),

    style: /(pixar|anime|realistic|cyberpunk|ghibli)/.test(text),

    lighting: /(lighting|sunset|neon|volumetric|backlight)/.test(text),

    camera: /(35mm|50mm|low angle|wide angle|close up)/.test(text),
  };
}