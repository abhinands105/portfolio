const focusAreas = [
  "Generative AI",
  "Multimodal AI",
  "Stable Diffusion XL",
  "LoRA Fine-Tuning",
  "ControlNet",
  "Diffusers",
  "Computer Vision",
  "PyTorch",
  "TensorFlow",
  "OpenCV",
  "FastAPI",
  "React",
  "TypeScript",
  "RAG Systems",
  "LangChain",
  "FAISS",
  "Qwen VL",
  "Local LLMs",
  "AI Agents",
  "Prompt Engineering",
  "CUDA",
  "Docker",
  "Git",
  "Dataset Engineering",
];

export default function CurrentFocus() {
  return (
    <section className="focus-section">
      <div className="section-heading">
        <span className="section-label">
          CURRENT FOCUS
        </span>

        <h2>
          Technologies I'm Working With
        </h2>

        <p className="section-description">
          My current work focuses on modern Generative AI,
          multimodal intelligence, computer vision,
          production-ready AI systems and scalable AI
          application development.
        </p>
      </div>

      <div className="focus-grid">
        {focusAreas.map((item) => (
          <div
            key={item}
            className="focus-chip"
          >
            <span className="focus-dot" />

            {item}
          </div>
        ))}
      </div>
    </section>
  );
}