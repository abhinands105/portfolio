const stats = [
  ["06", "deep case studies", "Focused on the strongest AI systems rather than every repository."],
  ["6K+", "image training data", "Documented CARTOONIX dataset coverage."],
  ["8,969", "video frames", "Documented SpiderVerse frame extraction stage."],
  ["92%", "CV accuracy", "Reported RWF-2000 violence-classification result."],
];

export default function ProjectStats() {
  return (
    <section className="project-stats-section">
      <div className="section-heading">
        <span className="section-label">AT A GLANCE</span>
        <h2>Evidence before adjectives.</h2>
        <p className="section-description">The project section is rebuilt around measurable artifacts: dataset counts, model choices, pipelines and reproducible outputs.</p>
      </div>
      <div className="project-stats">
        {stats.map(([value, label, detail]) => (
          <article className="project-stat-card glass" key={label}>
            <strong className="gradient-text">{value}</strong>
            <h3>{label}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
