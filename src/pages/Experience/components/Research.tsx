const researchProjects = [
  {
    title: "CARTOONIX – Prompt-to-Cartoon Generator",
    period: "2025 – Present",
    description:
      "Developed an offline Generative AI platform capable of converting natural language prompts into high-quality cartoon, sketch and comic-style images using Stable Diffusion and LoRA fine-tuning.",

    highlights: [
      "Fine-tuned Stable Diffusion using custom LoRA models.",
      "Integrated ControlNet for structural consistency.",
      "Built an offline image generation pipeline.",
      "Optimized inference for RTX 3050 GPUs.",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "Stable Diffusion",
      "LoRA",
      "ControlNet",
      "Gradio",
      "OpenCV",
    ],
  },

  {
    title: "RAG Chatbot using Gemini API + FAISS",
    period: "2026 – Present",
    description:
      "Built a Retrieval-Augmented Generation system capable of answering questions from uploaded PDF documents using semantic search.",

    highlights: [
      "Document chunking",
      "Sentence Transformers",
      "FAISS Vector Database",
      "Gemini API integration",
    ],

    technologies: [
      "Python",
      "FAISS",
      "Gemini API",
      "Sentence Transformers",
      "Streamlit",
    ],
  },

  {
    title: "Spider-Verse Style LoRA Research",
    period: "2025 – Present",
    description:
      "Researching style-consistent image and video generation using custom datasets, LoRA fine-tuning, caption generation, and diffusion models.",

    highlights: [
      "Dataset preparation",
      "Automatic caption generation",
      "Character-aware training",
      "Style transfer research",
    ],

    technologies: [
      "LoRA",
      "Diffusion Models",
      "Qwen-VL",
      "Python",
    ],
  },
];

export default function Research() {
  return (
    <section className="research-section">
      <div className="section-title">
        <h2>Research & AI Projects</h2>

        <p>
          Applied research focused on Generative AI, Computer Vision,
          Retrieval-Augmented Generation, and intelligent systems.
        </p>
      </div>

      <div className="research-grid">
        {researchProjects.map((project) => (
          <div
            key={project.title}
            className="research-card"
          >
            <div className="research-header">
              <h3>{project.title}</h3>

              <span>{project.period}</span>
            </div>

            <p>{project.description}</p>

            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="research-tags">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-chip"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}