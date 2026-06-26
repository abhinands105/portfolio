const stats = [
  { value: "15+", label: "AI Projects" },
  { value: "17+", label: "Certifications" },
  { value: "2026", label: "Graduation" },
  { value: "6+", label: "AI Domains" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}