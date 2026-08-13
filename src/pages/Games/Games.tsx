import { useState } from "react";
import AIQuiz from "./AIQuiz/AIQuiz";
import PromptArena from "./PromptArena/PromptArena";
import NeuralNetworkBuilder from "./NeuralNetworkBuilder/NeuralNetworkBuilder";

export default function Games() {

  type ActiveGame = "quiz" | "prompt" | "network" | null;

  const [activeGame, setActiveGame] =
    useState<ActiveGame>(null);

  if (activeGame === "quiz") {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "1900px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <button
          onClick={() => setActiveGame(null)}
          style={{
            marginBottom: "30px",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back to Games
        </button>

        <AIQuiz />
      </div>
    );
  }

  if (activeGame === "prompt") {
    return (
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px",
        }}
      >
        <button
          onClick={() => setActiveGame(null)}
          style={{
            marginBottom: "30px",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back to Games
        </button>

        <PromptArena />
      </div>
    );
  }


  if (activeGame === "network") {
    return (
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "40px",
        }}
      >
        <button
          onClick={() => setActiveGame(null)}
          style={{
            marginBottom: "30px",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back to Games
        </button>

        <NeuralNetworkBuilder />
      </div>
    );
  }
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
      status: "Interactive",
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
              onClick={() => {
                if (game.title === "AI Quiz Challenge") {
                  setActiveGame("quiz");
                } else if (game.title === "Prompt Engineering Arena") {
                  setActiveGame("prompt");
                } else if (game.title === "Neural Network Builder") {
                  setActiveGame("network");
                } else {
                  alert("Coming Soon 🚀");
                }
              }}
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                border: "1px solid rgba(157,78,221,.3)",
                background: "rgba(157,78,221,.12)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {
                game.title === "AI Quiz Challenge" ||
                game.title === "Prompt Engineering Arena" ||
                game.title === "Neural Network Builder"
                  ? "Play Now →"
                  : "Coming Soon"
              }
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