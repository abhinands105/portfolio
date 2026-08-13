import "./HeroStats.css";

const stats = [
  {
    label: "AI",
    value: "15+",
    text: "AI Projects",
  },
  {
    label: "GX",
    value: "5+",
    text: "GenAI Apps",
  },
  {
    label: "DB",
    value: "20+",
    text: "Datasets",
  },
  {
    label: "TS",
    value: "10K+",
    text: "Code Lines",
  },
  {
    label: "ML",
    value: "8+",
    text: "AI Models",
  },
];

export default function HeroStats() {
  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div className="stat-card" key={item.label}>
          <h4>{item.label}</h4>
          <h3>{item.value}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}