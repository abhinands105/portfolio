export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Detect Technologies",
    role: "AI Engineering Intern",
    duration: "Sep 2026 – Present",
    location: "Chennai, Tamil Nadu, India",
    type: "Full-time",
    logo: "experience/detect-technologies.png",
    description:
      "Contributing to AI engineering initiatives for industrial computer-vision workflows, with a focus on reliable visual intelligence, model evaluation, and production-oriented experimentation.",
    achievements: [
      "Developing and evaluating YOLO-based object detection workflows.",
      "Exploring multimodal LLM approaches for visual understanding and reasoning.",
      "Working with computer-vision datasets, annotations, and model-performance analysis.",
      "Supporting robust AI solutions for real-world visual inspection use cases.",
    ],
    technologies: [
      "Python",
      "Computer Vision",
      "YOLO",
      "Multimodal LLMs",
      "OpenCV",
      "Deep Learning",
      "Model Evaluation",
    ],
  },

  {
    id: 2,
    company: "Agratas Academy Pvt. Ltd.",
    role: "Artificial Intelligence Intern",
    duration: "Jul 2024 – Sep 2024",
    location: "India",
    type: "Internship",
    logo: "experience/agratas-academy.png",

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
    id: 3,
    company: "MES College of Engineering",
    role: "AI & Data Science Engineer (Academic Projects)",
    duration: "Oct 2022 – Present",
    location: "Kerala, India",
    type: "Academic",
    logo: "experience/mes-college.png",

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
