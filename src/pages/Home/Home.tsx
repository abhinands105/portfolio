import "./Home.css";

import Hero from "../../components/hero/Hero";
import Terminal from "../../components/terminal/Terminal";
import StatsCards from "../../components/ui/StatsCards";

export default function Home() {
  return (
    <main className="page-container">

      {/* ================= HERO ================= */}

      <section className="hero-grid">

        <div className="hero-left">
          <Hero />
        </div>

        <aside className="hero-right">
          <div className="terminal-wrapper">
            <Terminal />
          </div>
        </aside>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats-section">
        <StatsCards />
      </section>

    </main>
  );
}