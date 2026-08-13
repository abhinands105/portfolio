interface Certification {
  title: string;
  organization: string;
  year: string;
  color: string;
  credentialUrl?: string;
  image?: string;
}

const certifications: Certification[] = [
  // ─────────────────────────────────────────────
  // GOOGLE / CLOUD
  // ─────────────────────────────────────────────
  {
    title: "The Basics of Google Cloud Compute Skill Badge",
    organization: "Google",
    year: "2025",
    color: "#4285F4",
    credentialUrl:
      "https://www.credly.com/badges/a5a0276f-8f7e-4a9c-8740-e623aada041d/linked_in_profile",
  },

  {
    title: "Introduction to Cloud Computing",
    organization: "Simplilearn",
    year: "2025",
    color: "#F97316",
    credentialUrl:
      "https://simpli.app.link/tcMlP3TfsXb",
  },

  // ─────────────────────────────────────────────
  // AGRATAS EDUTECH
  // ─────────────────────────────────────────────
  {
    title: "Industrial Training – Artificial Intelligence",
    organization: "Agratas EduTech",
    year: "2024",
    color: "#A855F7",
    image: `${import.meta.env.BASE_URL}CERTIFICATES/industrial-training-ai-agratas.jpg`,
  },

  {
    title: "Artificial Intelligence",
    organization: "Agratas EduTech",
    year: "2024",
    color: "#7C3AED",
    image: `${import.meta.env.BASE_URL}CERTIFICATES/ai-agratas.jpg`,
  },

  // ─────────────────────────────────────────────
  // PROGRAMMING / DATA
  // ─────────────────────────────────────────────
  {
    title: "R Programming for Beginners",
    organization: "Simplilearn",
    year: "2024",
    color: "#EF4444",
    credentialUrl:
      "https://simpli.app.link/SWvjCyJ4kQb",
  },

  {
    title: "Python for Data Science",
    organization: "NPTEL",
    year: "2024",
    color: "#22C55E",
    credentialUrl:
      "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs68/Course/NPTEL24CS68S14810000602628987.pdf",
    image: `${import.meta.env.BASE_URL}CERTIFICATES/nptel.jpg`,
  },

  // ─────────────────────────────────────────────
  // DATAIKU
  // ─────────────────────────────────────────────
  {
    title: "Dataiku Advanced Designer",
    organization: "Dataiku",
    year: "2025",
    color: "#14B8A6",
    credentialUrl:
      "https://verify.skilljar.com/c/y3prbbi6ov6b",
  },

  {
    title: "Dataiku ML Practitioner",
    organization: "Dataiku",
    year: "2025",
    color: "#0EA5E9",
    credentialUrl:
      "https://verify.skilljar.com/c/94vioc4e27rp",
  },

  {
    title: "Dataiku Generative AI Practitioner",
    organization: "Dataiku",
    year: "2025",
    color: "#8B5CF6",
    credentialUrl:
      "https://verify.skilljar.com/c/mn6sxxznwfpv",
  },

  {
    title: "Dataiku Core Designer",
    organization: "Dataiku",
    year: "2025",
    color: "#06B6D4",
    credentialUrl:
      "https://verify.skilljar.com/c/j8cj9z8xk7f9",
  },

  // ─────────────────────────────────────────────
  // IBM
  // ─────────────────────────────────────────────
  {
    title: "Data Visualization with Python",
    organization: "IBM",
    year: "2025",
    color: "#2563EB",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/24f42db1113b41a3a81e48756d9e566d",
  },

  {
    title: "Data Science with Scala",
    organization: "IBM",
    year: "2025",
    color: "#0F62FE",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/2d072bef0c3b4b4fac5520ddd07e7d9c",
  },

  // ─────────────────────────────────────────────
  // COGNITIVE CLASS
  // ─────────────────────────────────────────────
  {
    title: "Data Analysis with Python",
    organization: "Cognitive Class",
    year: "2025",
    color: "#F59E0B",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/ccfadb1164b94beb9572450c24c34150",
  },

  {
    title: "Python 101 for Data Science",
    organization: "Cognitive Class",
    year: "2025",
    color: "#10B981",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/2afb886ab51d450fa7e0b39b37908bb6",
  },

  // ─────────────────────────────────────────────
  // ULSA
  // ─────────────────────────────────────────────
  {
    title: "Data Science 101",
    organization: "United Latino Students Association",
    year: "2025",
    color: "#6366F1",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/c5b68c466b9d4b69b34a902ae699bd02",
  },

  {
    title: "Accessing Hadoop Data Using Hive",
    organization: "United Latino Students Association",
    year: "2025",
    color: "#F59E0B",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/6542ea63354c45e4b88509b267e369d1",
  },

  {
    title: "Apache Pig 101",
    organization: "United Latino Students Association",
    year: "2025",
    color: "#EC4899",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/6506175c4f2a42f8b60086b0891fa347",
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
          Continuous learning has been an important part of my AI
          journey. These certifications cover Artificial Intelligence,
          Cloud Computing, Data Science, Big Data, Python, Generative AI
          and Machine Learning.
        </p>

      </div>

      <div className="certifications-grid">

        {certifications.map((cert) => {

          const cardContent = (
            <>
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

                {cert.credentialUrl && (
                  <small className="credential-link">
                    View credential →
                  </small>
                )}

                {cert.image && (
                  <small className="credential-link">
                    View certificate →
                  </small>
                )}

              </div>
            </>
          );

          return cert.credentialUrl ? (
            <a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass certification-card certification-link-card"
            >
              {cardContent}
            </a>
          ) : (
            <article
              key={cert.title}
              className="glass certification-card"
            >
              {cardContent}
            </article>
          );
        })}

      </div>

    </section>
  );
}