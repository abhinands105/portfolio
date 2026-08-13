import type { Challenge } from "../types/Prompt";

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Pixar Robot",
    description:
      "Create a Pixar-style robot walking through a rainy cyberpunk city.",
    difficulty: "easy",
    category: "Image Generation",
  },

  {
    id: 2,
    title: "Fantasy Castle",
    description:
      "Generate a magical floating castle above the clouds during sunset.",
    difficulty: "easy",
    category: "Image Generation",
  },

  {
    id: 3,
    title: "Movie Poster",
    description:
      "Design an epic sci-fi movie poster with cinematic composition.",
    difficulty: "medium",
    category: "Design",
  },

  {
    id: 4,
    title: "Product Photography",
    description:
      "Create a premium smartwatch advertisement for a luxury brand.",
    difficulty: "medium",
    category: "Marketing",
  },

  {
    id: 5,
    title: "Anime Character",
    description:
      "Design a unique anime protagonist with dramatic lighting and dynamic action.",
    difficulty: "hard",
    category: "Character Design",
  }
];

export default challenges;