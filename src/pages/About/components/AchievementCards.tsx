import {
  FaAward,
  FaRocket,
  FaCode,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

interface Achievement {
  icon: JSX.Element;
  title: string;
  value: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <FaAward />,
    value: "17+",
    title: "Professional Certifications",
    description:
      "Google, IBM, Dataiku, NPTEL, Simplilearn and AI industry certifications.",
  },
  {
    icon: <FaRocket />,
    value: "15+",
    title: "AI Projects",
    description:
      "Generative AI, Computer Vision, Deep Learning and Full Stack AI applications.",
  },
  {
    icon: <FaCode />,
    value: "10K+",
    title: "Lines of Code",
    description:
      "Python, TypeScript, React, FastAPI, TensorFlow and PyTorch development.",
  },
  {
    icon: <FaBrain />,
    value: "6+",
    title: "AI Domains",
    description:
      "Generative AI, LLMs, RAG, Computer Vision, Multimodal AI and AI Agents.",
  },
  {
    icon: <FaDatabase />,
    value: "1K+",
    title: "Dataset Assets",
    description:
      "Curated images, extracted frames, captions and AI datasets used for research.",
  },
  {
    icon: <FaLaptopCode />,
    value: "2022",
    title: "AI Journey Started",
    description:
      "Continuously learning, researching and building production-ready AI systems.",
  },
];

export default function AchievementCards() {
  return (
    <section className="achievement-section">

      <div className="section-heading">

        <span className="section-label">
          ACHIEVEMENTS
        </span>

        <h2>
          Highlights & Milestones
        </h2>

        <p className="section-description">
          A snapshot of my learning journey, technical growth,
          certifications and practical AI development experience.
        </p>

      </div>

      <div className="achievement-grid">

        {achievements.map((item) => (

          <article
            key={item.title}
            className="glass achievement-card"
          >

            <div className="achievement-icon">

              {item.icon}

            </div>

            <h2 className="gradient-text">

              {item.value}

            </h2>

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