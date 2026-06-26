export default function Games() {
  const games = [
    {
      title: "AI Quiz Challenge",
      status: "Coming Soon",
      description:
        "Test your AI, Machine Learning and Generative AI knowledge.",
    },
    {
      title: "Prompt Engineering Arena",
      status: "Prototype",
      description:
        "Compete by creating better prompts for AI models.",
    },
    {
      title: "Neural Network Builder",
      status: "Coming Soon",
      description:
        "Visual game for learning neural network concepts.",
    },
    {
      title: "RAG Adventure",
      status: "Concept",
      description:
        "Interactive retrieval and knowledge exploration game.",
    },
    {
      title: "Computer Vision Challenge",
      status: "Planned",
      description:
        "Identify patterns and solve image-based puzzles.",
    },
    {
      title: "Dataset Collector Tycoon",
      status: "Concept",
      description:
        "Build and manage AI datasets efficiently.",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "60px",
      }}
    >
      <h1
        className="gradient-text"
        style={{
          fontSize: "64px",
          fontWeight: 900,
          marginBottom: "40px",
        }}
      >
        Games & Experiments
      </h1>

      {/* PROFILE CARD */}
      <div
        className="glass neon-border"
        style={{
          padding: "30px",
          borderRadius: "24px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#c77dff",
            marginBottom: "15px",
          }}
        >
          Interactive AI Playground
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: 1.8,
          }}
        >
          This section contains AI-themed mini games,
          experiments, learning tools and interactive
          demonstrations designed to make Artificial
          Intelligence concepts more engaging.
        </p>
      </div>

      {/* GAME GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
        }}
      >
        {games.map((game) => (
          <div
            key={game.title}
            className="glass neon-border"
            style={{
              padding: "30px",
              borderRadius: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <h2>{game.title}</h2>

              <span
                style={{
                  color: "#c77dff",
                  fontSize: "13px",
                }}
              >
                {game.status}
              </span>
            </div>

            <p
              style={{
                color: "#cfcfcf",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {game.description}
            </p>

            <button
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                border:
                  "1px solid rgba(157,78,221,.3)",
                background:
                  "rgba(157,78,221,.12)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Explore →
            </button>
          </div>
        ))}
      </div>

      {/* ACHIEVEMENTS */}
      <div
        className="glass neon-border"
        style={{
          padding: "30px",
          borderRadius: "24px",
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            color: "#c77dff",
            marginBottom: "20px",
          }}
        >
          Achievement Board
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          {[
            "AI Explorer",
            "Dataset Hunter",
            "Prompt Master",
            "Vision Expert",
          ].map((badge) => (
            <div
              key={badge}
              style={{
                padding: "20px",
                borderRadius: "18px",
                background:
                  "rgba(157,78,221,.08)",
                textAlign: "center",
              }}
            >
              🏆
              <div style={{ marginTop: "10px" }}>
                {badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}