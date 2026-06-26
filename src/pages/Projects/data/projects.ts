export interface Project {

  title: string;

  category: string;

  description: string;

  tech: string[];

  github?: string;

  demo?: string;

  featured?: boolean;

  status?: string;

}

export const projects: Project[] = [

  {
    title: "CARTOONIX AI",

    category: "Generative AI",

    description:
      "An offline AI-powered cartoon and sketch generation platform built using Stable Diffusion XL, LoRA fine-tuning and ControlNet. Supports prompt enhancement, multiple artistic styles and privacy-first local inference.",

    tech: [
      "Python",
      "PyTorch",
      "Stable Diffusion XL",
      "LoRA",
      "ControlNet",
      "Diffusers",
      "Gradio",
      "CUDA",
    ],

    github: "https://github.com/abhinands105",

    featured: true,

    status: "Completed",
  },

  {
    title: "Spider-Verse Dataset Pipeline",

    category: "Computer Vision",

    description:
      "Created a complete dataset engineering workflow for Spider-Verse animation including clip extraction, frame generation, automatic captioning, character labeling, dataset cleaning and LoRA-ready preprocessing.",

    tech: [
      "Python",
      "OpenCV",
      "Qwen-VL",
      "FAISS",
      "NumPy",
      "Pillow",
    ],

    github: "https://github.com/abhinands105",

    featured: true,

    status: "Completed",
  },

  {
    title: "Violence Detection using CNN + LSTM",

    category: "Deep Learning",

    description:
      "Designed a deep learning system for violence detection in surveillance videos using CNN feature extraction and LSTM sequence modeling with real-time alert support.",

    tech: [
      "TensorFlow",
      "OpenCV",
      "Python",
      "CNN",
      "LSTM",
    ],

    github: "https://github.com/abhinands105",

    featured: true,

    status: "Completed",
  },

  {
    title: "Multimodal RAG System",

    category: "Generative AI",

    description:
      "Built a local Retrieval-Augmented Generation pipeline capable of understanding documents and images using embeddings, FAISS vector search and multimodal language models.",

    tech: [
      "Python",
      "FAISS",
      "RAG",
      "LangChain",
      "Qwen-VL",
    ],

    github: "https://github.com/abhinands105",

    status: "Active Development",
  },

  {
    title: "Pinterest Dataset Collector",

    category: "Data Engineering",

    description:
      "Automated large-scale image collection pipeline with Selenium, duplicate removal, quality filtering and dataset organization for AI model training.",

    tech: [
      "Python",
      "Selenium",
      "OpenCV",
      "ImageHash",
    ],

    github: "https://github.com/abhinands105",

    status: "Completed",
  },

  {
    title: "LoRA Training Pipeline",

    category: "Diffusion Models",

    description:
      "Developed an end-to-end LoRA training workflow supporting custom datasets, caption generation, preprocessing and fine-tuning for Stable Diffusion models.",

    tech: [
      "PyTorch",
      "Diffusers",
      "LoRA",
      "CUDA",
      "Accelerate",
    ],

    github: "https://github.com/abhinands105",

    status: "Active Development",
  },

  {
    title: "Local LLM Playground",

    category: "Large Language Models",

    description:
      "Experimented with local language models including Gemma, Llama and Qwen while building AI assistants and offline inference workflows.",

    tech: [
      "Python",
      "Transformers",
      "Llama",
      "Gemma",
      "Qwen",
    ],

    github: "https://github.com/abhinands105",

    status: "Research",
  },

  {
    title: "AI Portfolio Website",

    category: "Web Development",

    description:
      "Designed and developed a modern AI portfolio using React, TypeScript and Vite featuring interactive UI, responsive layouts and project showcases.",

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
    ],

    github: "https://github.com/abhinands105",

    demo: "https://abhinands105.github.io/abhinand-portfolio/",

    status: "Live",
  },

];