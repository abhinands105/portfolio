interface Certification {
  title: string;
  organization: string;
  year: string;
  color: string;
}

const certifications: Certification[] = [
  {
    title: "Google Cloud Compute Skill Badge",
    organization: "Google",
    year: "2025",
    color: "#4285F4",
  },
  {
    title: "Introduction to Cloud Computing",
    organization: "Simplilearn",
    year: "2025",
    color: "#F97316",
  },
  {
    title: "Industrial Training - Artificial Intelligence",
    organization: "Agratas EduTech",
    year: "2024",
    color: "#A855F7",
  },
  {
    title: "Artificial Intelligence",
    organization: "Agratas EduTech",
    year: "2024",
    color: "#7C3AED",
  },
  {
    title: "Python for Data Science",
    organization: "NPTEL",
    year: "2024",
    color: "#22C55E",
  },
  {
    title: "R Programming for Beginners",
    organization: "Simplilearn",
    year: "2024",
    color: "#EF4444",
  },
  {
    title: "Dataiku Core Designer",
    organization: "Dataiku",
    year: "2025",
    color: "#06B6D4",
  },
  {
    title: "Dataiku ML Practitioner",
    organization: "Dataiku",
    year: "2025",
    color: "#0EA5E9",
  },
  {
    title: "Dataiku Advanced Designer",
    organization: "Dataiku",
    year: "2025",
    color: "#14B8A6",
  },
  {
    title: "Dataiku Generative AI Practitioner",
    organization: "Dataiku",
    year: "2025",
    color: "#8B5CF6",
  },
  {
    title: "Data Visualization with Python",
    organization: "IBM",
    year: "2025",
    color: "#2563EB",
  },
  {
    title: "Data Science with Scala",
    organization: "IBM",
    year: "2025",
    color: "#0F62FE",
  },
];

export default function CertificationGrid() {
  return (
    <section className="certifications-section">
      <div className="section-heading">
        <span className="section-label">
          CERTIFICATIONS
        </span>

        <h2>
          Professional Certifications
        </h2>

        <p className="section-description">
          Continuous learning has been an important part of
          my AI journey. These certifications cover
          Artificial Intelligence, Cloud Computing,
          Data Science, Big Data, Python, Generative AI
          and Machine Learning.
        </p>
      </div>

      <div className="certifications-grid">

        {certifications.map((cert) => (

          <article
            key={cert.title}
            className="glass certification-card"
          >

            <div
              className="certification-badge"
              style={{
                background: cert.color,
              }}
            >
              🏆
            </div>

            <div className="certification-content">

              <h3>
                {cert.title}
              </h3>

              <h4>
                {cert.organization}
              </h4>

              <span>
                Issued {cert.year}
              </span>

            </div>

          </article>

        ))}

      </div>
    </section>
  );
}