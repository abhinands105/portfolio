import type { Difficulty } from "../types/Question";

export const QUIZ_TITLE = "AI Quiz Challenge";

export const DEFAULT_TIME = 30;

export const PASS_PERCENTAGE = 60;

export const XP_PER_CORRECT = 10;

export const XP_PER_PERFECT = 50;

export const MAX_QUESTIONS = 50;

export const QUESTION_OPTIONS = [10, 20, 50];

export const DIFFICULTIES: Difficulty[] = [
  "easy",
  "medium",
  "hard",
  "mixed",
];
export const CATEGORIES = [
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Regression, Classification, Clustering",
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "ANN, CNN, RNN, Optimization",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Image Processing and Detection",
  },
  {
    id: "transformers",
    title: "Transformers",
    description: "Attention, BERT, GPT",
  },
  {
    id: "llms",
    title: "LLMs",
    description: "GPT, Llama, Claude, Gemma, Qwen",
  },
  {
    id: "rag",
    title: "RAG",
    description: "Embeddings and Vector Search",
  },
  {
    id: "diffusion",
    title: "Diffusion Models",
    description: "Stable Diffusion, FLUX, SDXL",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Prompt Design Techniques",
  },
  {
    id: "python",
    title: "Python",
    description: "Programming Fundamentals",
  },
  {
    id: "pytorch",
    title: "PyTorch",
    description: "Deep Learning Framework",
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    description: "TensorFlow Ecosystem",
  },
  {
    id: "cuda",
    title: "CUDA",
    description: "GPU Programming",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Planning, Memory, Tool Calling",
  },
  {
    id: "langchain",
    title: "LangChain",
    description: "Chains, Agents, LCEL",
  },
  {
    id: "vector-databases",
    title: "Vector Databases",
    description: "FAISS, Chroma, Pinecone, Milvus",
  },
  {
    id: "mlops",
    title: "MLOps",
    description: "CI/CD, Monitoring, Versioning",
  },
  {
    id: "model-deployment",
    title: "Model Deployment",
    description: "FastAPI, Docker, Triton",
  },
  {
    id: "nlp",
    title: "NLP",
    description: "NER, POS, Tokenization",
  },
  {
    id: "gans",
    title: "GANs",
    description: "Generator vs Discriminator",
  },
  {
    id: "reinforcement-learning",
    title: "Reinforcement Learning",
    description: "Q-Learning, PPO, DQN",
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Probability and Hypothesis Testing",
  },
  {
    id: "mathematics-for-ai",
    title: "Mathematics for AI",
    description: "Linear Algebra, Calculus",
  },
  {
    id: "data-structures-for-ai",
    title: "Data Structures for AI",
    description: "Arrays, Trees, Graphs",
  },
  {
    id: "ai-ethics",
    title: "AI Ethics",
    description: "Bias, Fairness, Privacy",
  },
] as const;

export const RANKS = [
  {
    minXP: 0,
    rank: "AI Beginner",
  },
  {
    minXP: 100,
    rank: "ML Explorer",
  },
  {
    minXP: 300,
    rank: "Neural Engineer",
  },
  {
    minXP: 600,
    rank: "Vision Expert",
  },
  {
    minXP: 1000,
    rank: "Prompt Master",
  },
  {
    minXP: 2000,
    rank: "AI Architect",
  },
  {
    minXP: 5000,
    rank: "AI Grandmaster",
  },
]; 