export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  // ===== Generative AI =====
  {
    id: 1,
    name: "Generative AI",
    category: "genai",
    level: 95,
    icon: "✨",
    description: "Building AI applications using diffusion models and LLMs.",
  },
  {
    id: 2,
    name: "Stable Diffusion",
    category: "genai",
    level: 95,
    icon: "🎨",
    description: "Custom image generation pipelines.",
  },
  {
    id: 3,
    name: "LoRA Fine-Tuning",
    category: "genai",
    level: 92,
    icon: "🧠",
    description: "Training LoRA adapters for custom styles.",
  },
  {
    id: 4,
    name: "ControlNet",
    category: "genai",
    level: 90,
    icon: "🎯",
    description: "Conditioned image generation.",
  },
  {
    id: 5,
    name: "Diffusion Models",
    category: "genai",
    level: 92,
    icon: "🖼️",
    description: "SDXL, DreamShaper, LCM workflows.",
  },

  // ===== LLM & RAG =====
  {
    id: 6,
    name: "Retrieval-Augmented Generation",
    category: "llm",
    level: 93,
    icon: "📚",
    description: "Production-ready RAG systems.",
  },
  {
    id: 7,
    name: "LangChain",
    category: "llm",
    level: 90,
    icon: "🔗",
    description: "LLM application framework.",
  },
  {
    id: 8,
    name: "FAISS",
    category: "llm",
    level: 88,
    icon: "🗂️",
    description: "Vector similarity search.",
  },
  {
    id: 9,
    name: "Prompt Engineering",
    category: "llm",
    level: 95,
    icon: "💬",
    description: "Designing high-quality prompts.",
  },

  // ===== Machine Learning =====
  {
    id: 10,
    name: "Machine Learning",
    category: "ml",
    level: 90,
    icon: "🤖",
    description: "Model training and evaluation.",
  },
  {
    id: 11,
    name: "Deep Learning",
    category: "ml",
    level: 90,
    icon: "🧠",
    description: "CNN, LSTM, Transformers.",
  },

  // ===== Computer Vision =====
  {
    id: 12,
    name: "Computer Vision",
    category: "cv",
    level: 90,
    icon: "👁️",
    description: "Image and video understanding.",
  },
  {
    id: 13,
    name: "OpenCV",
    category: "cv",
    level: 92,
    icon: "📷",
    description: "Image processing and video analytics.",
  },

  // ===== Programming =====
  {
    id: 14,
    name: "Python",
    category: "languages",
    level: 95,
    icon: "🐍",
    description: "Primary programming language.",
  },
  {
    id: 15,
    name: "SQL",
    category: "languages",
    level: 82,
    icon: "🗄️",
    description: "Database querying.",
  },
  {
    id: 16,
    name: "C",
    category: "languages",
    level: 75,
    icon: "💻",
    description: "Core programming concepts.",
  },

  // ===== Frameworks =====
  {
    id: 17,
    name: "PyTorch",
    category: "frameworks",
    level: 92,
    icon: "🔥",
    description: "Deep learning framework.",
  },
  {
    id: 18,
    name: "TensorFlow",
    category: "frameworks",
    level: 88,
    icon: "🟧",
    description: "Machine learning framework.",
  },
  {
    id: 19,
    name: "FastAPI",
    category: "frameworks",
    level: 88,
    icon: "⚡",
    description: "REST API development.",
  },
  {
    id: 20,
    name: "Streamlit",
    category: "frameworks",
    level: 90,
    icon: "📊",
    description: "Interactive AI dashboards.",
  },

  // ===== Tools =====
  {
    id: 21,
    name: "Git",
    category: "tools",
    level: 88,
    icon: "🔀",
    description: "Version control.",
  },
  {
    id: 22,
    name: "Docker",
    category: "cloud",
    level: 80,
    icon: "🐳",
    description: "Containerized deployment.",
  },
  {
    id: 23,
    name: "GitHub",
    category: "tools",
    level: 90,
    icon: "🐙",
    description: "Source code hosting.",
  },

  // ===== Databases =====
  {
    id: 24,
    name: "MongoDB",
    category: "database",
    level: 82,
    icon: "🍃",
    description: "NoSQL database.",
  },
  {
    id: 25,
    name: "PostgreSQL",
    category: "database",
    level: 78,
    icon: "🐘",
    description: "Relational database.",
  },

  // ===== Data Science =====
  {
    id: 26,
    name: "NumPy",
    category: "data",
    level: 90,
    icon: "📈",
    description: "Numerical computing.",
  },
  {
    id: 27,
    name: "Pandas",
    category: "data",
    level: 90,
    icon: "🐼",
    description: "Data analysis library.",
  },
  {
    id: 28,
    name: "Matplotlib",
    category: "data",
    level: 85,
    icon: "📊",
    description: "Data visualization.",
  },
];