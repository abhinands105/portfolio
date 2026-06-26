import {
  FaUniversity,
  FaSchool,
  FaTools,
} from "react-icons/fa";

const education = [
  {
    icon: <FaUniversity />,
    title: "B.Tech Artificial Intelligence & Data Science",
    institute: "MES College of Engineering",
    university: "APJ Abdul Kalam Technological University",
    period: "2022 - 2026",
    description:
      "Focused on Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Data Science, Database Systems, Networking and Software Engineering.",
  },
  {
    icon: <FaSchool />,
    title: "Higher Secondary Education",
    institute: "GHSS Edappal",
    university: "Kerala State Board",
    period: "2020 - 2022",
    description:
      "Completed Biology Science with Mathematics, Physics, Chemistry and Life Sciences.",
  },
  {
    icon: <FaTools />,
    title: "Technical High School",
    institute: "Government Technical High School, Kuttippuram",
    university: "Technical Education Kerala",
    period: "2017 - 2020",
    description:
      "Mechanical and Automobile Technology with practical engineering, workshop and repair skills.",
  },
];

export default function Education() {
  return (
    <section className="education-section">

      <div className="section-heading">

        <span className="section-label">
          EDUCATION
        </span>

        <h2>
          Academic Journey
        </h2>

        <p className="section-description">
          My educational background combines engineering,
          artificial intelligence and practical technical
          training, providing a strong foundation for AI
          research and product development.
        </p>

      </div>

      <div className="education-list">

        {education.map((item) => (

          <article
            key={item.title}
            className="glass education-card"
          >

            <div className="education-icon">

              {item.icon}

            </div>

            <div className="education-content">

              <span className="education-period">

                {item.period}

              </span>

              <h3>

                {item.title}

              </h3>

              <h4>

                {item.institute}

              </h4>

              <h5>

                {item.university}

              </h5>

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