import {
  FaRocket,
  FaBrain,
  FaRobot,
  FaGlobe,
  FaLightbulb,
  FaGithub,
} from "react-icons/fa";

const visions = [
  {
    icon: <FaBrain />,
    title: "Artificial General Intelligence",
    description:
      "Continuously exploring large language models, multimodal reasoning, world models and future AI architectures.",
  },
  {
    icon: <FaRobot />,
    title: "AI Products",
    description:
      "Building practical AI software that combines image generation, video generation, speech, language models and autonomous AI agents.",
  },
  {
    icon: <FaRocket />,
    title: "Research & Innovation",
    description:
      "Experimenting with diffusion models, LoRA training, multimodal AI, dataset engineering and next-generation generative systems.",
  },
  {
    icon: <FaGlobe />,
    title: "Open Source",
    description:
      "Sharing projects, research experiments and reusable AI tools through GitHub to contribute to the AI community.",
  },
];

export default function FutureVision() {
  return (
    <section className="future-section">

      <div className="section-heading">

        <span className="section-label">
          FUTURE VISION
        </span>

        <h2>
          Building Intelligent AI Systems for the Future
        </h2>

        <p className="section-description">
          My goal is to become an AI Engineer focused on
          creating intelligent systems that combine computer
          vision, language models, generative AI and
          autonomous decision-making into real-world products.
        </p>

      </div>

      <div className="future-grid">

        {visions.map((vision) => (

          <article
            key={vision.title}
            className="glass future-card"
          >

            <div className="future-icon">

              {vision.icon}

            </div>

            <h3>

              {vision.title}

            </h3>

            <p>

              {vision.description}

            </p>

          </article>

        ))}

      </div>

      <div className="glass vision-footer">

        <FaLightbulb className="vision-footer-icon" />

        <h3>
          Always Learning. Always Building.
        </h3>

        <p>
          Every project is an opportunity to learn something
          new. I enjoy transforming research ideas into
          production-ready AI applications while continuously
          expanding my knowledge of emerging technologies.
        </p>

        <a
          href="https://github.com/abhinands105"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn"
        >

          <FaGithub />

          Explore My GitHub

        </a>

      </div>

    </section>
  );
}