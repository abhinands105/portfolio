import "./StatsCards.css";

const stats = [
  {
    value: "15+",
    label: "AI Projects",
    icon: "AI",
  },
  {
    value: "5+",
    label: "GenAI Apps",
    icon: "GX",
  },
  {
    value: "20+",
    label: "Datasets",
    icon: "DB",
  },
  {
    value: "10K+",
    label: "Code Lines",
    icon: "TS",
  },
  {
    value: "8+",
    label: "AI Models",
    icon: "ML",
  },
];

export default function StatsCards() {
  return (
    <section className="stats-grid">
      {stats.map((item) => (
        <article
          key={item.label}
          className="stats-card glass neon-border"
        >
          <div className="stats-icon">
            {item.icon}
          </div>

          <h2 className="stats-value gradient-text">
            {item.value}
          </h2>

          <p className="stats-label">
            {item.label}
          </p>

          <div className="stats-glow" />
        </article>
      ))}
    </section>
  );
}
