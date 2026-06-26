export default function Blog() {
  const blogs = [
    {
      title: "Building a Spider-Verse Dataset Pipeline",
      date: "2026",
      category: "Computer Vision",
      description:
        "How I collected, cleaned and processed thousands of Spider-Verse clips for AI training and LoRA development.",
    },
    {
      title: "Training LoRAs for Cartoon Style Generation",
      date: "2026",
      category: "Generative AI",
      description:
        "Lessons learned while training custom LoRAs using SDXL, Kohya and curated datasets.",
    },
    {
      title: "Creating a Multimodal RAG System",
      date: "2026",
      category: "RAG",
      description:
        "Using FAISS, Qwen-VL and local LLMs to build image-aware retrieval systems.",
    },
    {
      title: "Pinterest Dataset Collection at Scale",
      date: "2025",
      category: "Data Engineering",
      description:
        "Automating image collection and duplicate removal for large AI datasets.",
    },
    {
      title: "Future of Generative AI Products",
      date: "2025",
      category: "AI",
      description:
        "Exploring opportunities in AI SaaS, Agentic AI and multimodal systems.",
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
        Blog & Insights
      </h1>

      <div
        style={{
          display: "grid",
          gap: "25px",
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.title}
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
              <span
                style={{
                  color: "#c77dff",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                {blog.category}
              </span>

              <span
                style={{
                  color: "#888",
                }}
              >
                {blog.date}
              </span>
            </div>

            <h2
              style={{
                marginBottom: "15px",
              }}
            >
              {blog.title}
            </h2>

            <p
              style={{
                color: "#cfcfcf",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {blog.description}
            </p>

            <button
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                border: "1px solid rgba(157,78,221,.3)",
                background: "rgba(157,78,221,.1)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Read Article →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}