export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  portfolio: string;
  linkedin: string;

  summary: string;

  skills: {
    category: string;
    items: string[];
  }[];

  experience: {
    company: string;
    role: string;
    duration: string;
  }[];

  education: {
    institution: string;
    degree: string;
    duration: string;
  }[];

  projects: string[];

  certifications: string[];
}

export const resume: ResumeData = {
  name: "Abhinand Subramanian",

  title:
    "Generative AI & Machine Learning Engineer",

  email: "abhinands105@gmail.com",

  phone: "+91 92070 29155",

  location: "Malappuram, Kerala, India",

  github: "https://github.com/abhinands105",

  portfolio:
    "https://abhinands105.github.io/abhinand-portfolio/",

  linkedin:
    "https://www.linkedin.com/in/abhinand-s-48154a318/",

  summary:
    "Generative AI and Deep Learning Engineer specializing in Computer Vision, Diffusion Models, Large Language Models, and Retrieval-Augmented Generation. Experienced in building end-to-end AI systems from dataset preparation and model training to deployment using PyTorch, TensorFlow, Stable Diffusion, LoRA, ControlNet, FastAPI, and React.",

  skills: [
    {
      category: "Programming",
      items: [
        "Python",
        "SQL",
        "C",
        "R",
        "Bash",
      ],
    },

    {
      category: "Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "CNN",
        "LSTM",
        "GANs",
        "Transformers",
      ],
    },

    {
      category: "Generative AI",
      items: [
        "Stable Diffusion",
        "LoRA",
        "ControlNet",
        "DreamBooth",
        "Prompt Engineering",
      ],
    },

    {
      category: "Computer Vision",
      items: [
        "OpenCV",
        "Image Processing",
        "Video Analytics",
      ],
    },

    {
      category: "LLMs & RAG",
      items: [
        "Gemini API",
        "FAISS",
        "Sentence Transformers",
        "RAG",
      ],
    },

    {
      category: "Frameworks",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "FastAPI",
        "Gradio",
        "Streamlit",
        "React",
        "TypeScript",
      ],
    },
  ],

  experience: [
    {
      company: "Agratas Academy Pvt. Ltd.",
      role: "Artificial Intelligence Intern",
      duration: "Jul 2024 – Sep 2024",
    },

    {
      company: "MES College of Engineering",
      role: "AI & Data Science Engineer (Academic Projects)",
      duration: "Oct 2022 – Present",
    },
  ],

  education: [
    {
      institution:
        "MES College of Engineering, Kuttippuram",
      degree:
        "B.Tech Artificial Intelligence & Data Science",
      duration: "2022 – 2026",
    },

    {
      institution: "GHSS Edappal",
      degree: "Higher Secondary Education (Science)",
      duration: "2020 – 2022",
    },

    {
      institution:
        "Government Technical High School, Kuttippuram",
      degree: "Mechanical / Automobile",
      duration: "2017 – 2020",
    },
  ],

  projects: [
    "CARTOONIX – Prompt-to-Cartoon Generator",
    "Violence Detection using CNN + LSTM",
    "RAG Chatbot using Gemini API + FAISS",
    "AI Portfolio",
    "Spider-Verse LoRA Research",
  ],

  certifications: [
    "Google Cloud Compute Skill Badge",
    "Industrial Training – Artificial Intelligence",
    "Artificial Intelligence",
    "Dataiku Advanced Designer",
    "Dataiku ML Practitioner",
    "Dataiku Generative AI Practitioner",
    "Python for Data Science",
    "Data Visualization with Python",
    "Data Analysis with Python",
    "Data Science with Scala",
    "Introduction to Cloud Computing",
    "R Programming for Beginners",
  ],
};