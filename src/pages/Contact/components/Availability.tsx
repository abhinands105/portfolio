const availability = [
  {
    title: "Current Status",
    value: "Open to Opportunities",
    icon: "🟢",
  },
  {
    title: "Preferred Roles",
    value: "AI Engineer • ML Engineer • Generative AI Developer",
    icon: "🤖",
  },
  {
    title: "Work Mode",
    value: "Remote • Hybrid • On-site",
    icon: "💻",
  },
  {
    title: "Location",
    value: "Malappuram, Kerala, India",
    icon: "📍",
  },
  {
    title: "Response Time",
    value: "Usually within 24 hours",
    icon: "⚡",
  },
  {
    title: "Collaboration",
    value: "Research • Open Source • Freelance • Full-Time",
    icon: "🤝",
  },
];

export default function Availability() {
  return (
    <section className="availability-section">
      <div className="section-title">
        <h2>Availability</h2>

        <p>
          I'm always interested in discussing AI research, Generative AI,
          Machine Learning, Computer Vision, open-source projects, internships,
          and full-time opportunities.
        </p>
      </div>

      <div className="availability-grid">
        {availability.map((item) => (
          <div
            key={item.title}
            className="availability-card"
          >
            <div className="availability-icon">
              {item.icon}
            </div>

            <div className="availability-content">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}