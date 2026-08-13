export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Agratas Academy Pvt. Ltd.",
    role: "Artificial Intelligence Intern",
    duration: "Jul 2024 – Sep 2024",
    location: "India",
    type: "Internship",

    description:
      "Completed industry-oriented Artificial Intelligence and Machine Learning training focused on practical AI development and deployment.",

    achievements: [
      "Worked on real-world AI engineering workflows.",
      "Developed Machine Learning models.",
      "Learned AI deployment practices.",
      "Applied problem-solving techniques using AI.",
      "Collaborated on industry-level projects.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Cloud Computing",
      "AI",
    ],
  },

  {
    id: 2,
    company: "MES College of Engineering",
    role: "AI & Data Science Engineer (Academic Projects)",
    duration: "Oct 2022 – Present",
    location: "Kerala, India",
    type: "Academic",

    description:
      "Developing AI, Deep Learning, Computer Vision, and Generative AI systems through academic and personal projects.",

    achievements: [
      "Built CARTOONIX Prompt-to-Cartoon Generator.",
      "Developed CNN + LSTM Violence Detection System.",
      "Built Local RAG Chatbot using FAISS & Gemini API.",
      "Worked with Stable Diffusion, LoRA and ControlNet.",
      "Created AI Portfolio with React + Three.js.",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Stable Diffusion",
      "LoRA",
      "ControlNet",
      "React",
      "TypeScript",
      "FAISS",
      "Gradio",
      "Git",
    ],
  },
];