const techStacks = [
  {
    title: "Generative AI",
    items: [
      "Stable Diffusion",
      "SDXL",
      "LoRA",
      "ControlNet",
      "DreamBooth",
      "Diffusers",
      "LCM",
      "Prompt Engineering",
      "Image Generation",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "LSTM",
      "GRU",
      "Transformers",
      "GANs",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "OpenCV",
      "Image Processing",
      "Object Detection",
      "Video Analytics",
      "OCR",
    ],
  },
  {
    title: "LLMs & RAG",
    items: [
      "RAG",
      "FAISS",
      "Sentence Transformers",
      "Gemini API",
      "Vector Search",
      "Prompt Engineering",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "FastAPI",
      "Streamlit",
      "Gradio",
    ],
  },
  {
    title: "Programming",
    items: [
      "Python",
      "SQL",
      "Bash",
      "C",
      "R",
    ],
  },
  {
    title: "Data Science",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "EDA",
      "Statistics",
      "Data Visualization",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "MLflow",
      "CUDA",
      "Linux",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="tech-stack-section">
      <div className="section-title">
        <h2>Technology Stack</h2>
        <p>
          Technologies, frameworks and AI tools I use to build intelligent
          systems.
        </p>
      </div>

      <div className="tech-stack-grid">
        {techStacks.map((stack) => (
          <div
            key={stack.title}
            className="tech-stack-card"
          >
            <h3>{stack.title}</h3>

            <div className="tech-tags">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="tech-tag"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}