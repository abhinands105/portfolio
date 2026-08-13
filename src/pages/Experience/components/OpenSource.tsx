const repositories = [
  {
    title: "AI Portfolio",
    description:
      "Modern AI portfolio built with React, TypeScript, Three.js and modular architecture showcasing AI projects and research.",

    technologies: [
      "React",
      "TypeScript",
      "Three.js",
      "Vite",
      "CSS",
    ],

    github: "https://github.com/abhinands105/abhinand-portfolio",
  },

  {
    title: "CARTOONIX",
    description:
      "Offline Generative AI system for prompt-to-cartoon and sketch generation using Stable Diffusion, LoRA and ControlNet.",

    technologies: [
      "Python",
      "PyTorch",
      "Stable Diffusion",
      "LoRA",
      "ControlNet",
      "Gradio",
    ],

    github: "https://github.com/abhinands105",
  },

  {
    title: "Violence Detection using CNN + LSTM",
    description:
      "Real-time violence detection pipeline using CNN-LSTM, OpenCV and TensorFlow with Telegram alert integration.",

    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
    ],

    github: "https://github.com/abhinands105",
  },

  {
    title: "RAG Chatbot",
    description:
      "Document-aware chatbot using FAISS vector search, Gemini API and semantic retrieval.",

    technologies: [
      "Python",
      "FAISS",
      "Gemini",
      "Streamlit",
    ],

    github: "https://github.com/abhinands105",
  },
];

export default function OpenSource() {
  return (
    <section className="opensource-section">
      <div className="section-title">
        <h2>Open Source & GitHub</h2>

        <p>
          A selection of AI, machine learning and software engineering projects
          published on GitHub.
        </p>
      </div>

      <div className="opensource-grid">
        {repositories.map((repo) => (
          <div
            key={repo.title}
            className="opensource-card"
          >
            <h3>{repo.title}</h3>

            <p>{repo.description}</p>

            <div className="opensource-tags">
              {repo.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-chip"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={repo.github}
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}