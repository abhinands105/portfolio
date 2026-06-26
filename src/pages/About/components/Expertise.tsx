const expertise = [
  {
    icon: "🧠",
    title: "Generative AI",
    description:
      "Developing AI image generation systems using Stable Diffusion, SDXL, LoRA fine-tuning, ControlNet, Diffusers, prompt engineering and multimodal workflows.",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    description:
      "Building intelligent vision systems with OpenCV, PyTorch and TensorFlow including object detection, image processing, CNN-LSTM pipelines and video understanding.",
  },
  {
    icon: "🤖",
    title: "LLMs & RAG",
    description:
      "Creating Retrieval-Augmented Generation systems with FAISS, embeddings, LangChain, local LLMs and semantic search pipelines.",
  },
  {
    icon: "🚀",
    title: "AI Product Development",
    description:
      "Designing production-ready AI software using React, FastAPI, Docker, Python and modern deployment workflows.",
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section">

      <div className="section-heading">

        <span className="section-label">
          EXPERTISE
        </span>

        <h2>
          Core Technical Expertise
        </h2>

      </div>

      <div className="expertise-grid">

        {expertise.map((item) => (

          <article
            key={item.title}
            className="glass neon-border expertise-card"
          >

            <div className="expertise-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}