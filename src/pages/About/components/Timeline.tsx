import {
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

interface TimelineItem {
  year: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2022",
    icon: <FaGraduationCap />,
    title: "Started B.Tech AI & DS",
    subtitle: "MES College of Engineering",
    description:
      "Started studying Artificial Intelligence & Data Science while building a strong foundation in Python, Mathematics and Machine Learning.",
  },
  {
    year: "2024",
    icon: <FaLaptopCode />,
    title: "AI Internship",
    subtitle: "Agratas EduTech",
    description:
      "Completed Artificial Intelligence industrial training covering Machine Learning, Cloud Computing and AI deployment.",
  },
  {
    year: "2025",
    icon: <FaRobot />,
    title: "Major AI Projects",
    subtitle: "Generative AI & Computer Vision",
    description:
      "Developed CARTOONIX, Violence Detection using CNN-LSTM, Local RAG systems and Spider-Verse dataset engineering.",
  },
  {
    year: "2026",
    icon: <FaRocket />,
    title: "Building AI Products",
    subtitle: "Current Focus",
    description:
      "Working on multimodal AI, diffusion models, local LLMs, AI agents and production-ready AI software.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section">

      <div className="section-heading">

        <span className="section-label">
          JOURNEY
        </span>

        <h2>
          My AI Journey
        </h2>

        <p className="section-description">
          From beginning my engineering degree to
          building modern AI applications, every step
          has focused on practical learning and
          real-world implementation.
        </p>

      </div>

      <div className="timeline">

        {timeline.map((item) => (

          <article
            key={item.year}
            className="timeline-card"
          >

            <div className="timeline-left">

              <div className="timeline-circle">

                {item.icon}

              </div>

              <div className="timeline-line" />

            </div>

            <div className="glass timeline-content">

              <span className="timeline-year">

                {item.year}

              </span>

              <h3>

                {item.title}

              </h3>

              <h4>

                {item.subtitle}

              </h4>

              <p>

                {item.description}

              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}