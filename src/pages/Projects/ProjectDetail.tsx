import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
} from "react-icons/fa";
import { projects } from "./data/projects";
import "./ProjectDetail.css";
import ProjectGallery from "./components/ProjectGallery";

type YouTubeDemo = {
  id: string;
  title: string;
  description: string;
};

const YOUTUBE_DEMOS: Record<string, YouTubeDemo[]> = {
  cartoonix: [
    {
      id: "DlKRBOBIkGk",
      title: "CARTOONIX | AI Cartoon & Style Generator Demo",
      description:
        "Main CARTOONIX demonstration covering text-to-image, image-to-image, LoRA style control, ControlNet guidance and local GPU inference.",
    },
    {
      id: "04kTXsDU178",
      title: "CARTOONIX | Alice Style Generation Demo",
      description:
        "Demonstration of Alice-inspired style generation using the CARTOONIX Stable Diffusion and custom LoRA pipeline.",
    },
    {
      id: "IUDDYCWzppw",
      title: "CARTOONIX | AI Line Sketch Generator Demo",
      description:
        "Line-sketch generation using ControlNet, OpenCV structural guidance and image-to-image generation.",
    },
    {
      id: "3RwyobuI1HQ",
      title: "CARTOONIX | AI Newsstrip / Comic Style Generator",
      description:
        "Comic and newsstrip-style generation using style-controlled diffusion and custom AI generation workflows.",
    },
  ],

  pixellora: [
    {
      id: "ftXWCUiHNEI",
      title: "AI Pixel Art Generator | Custom LoRA Demo",
      description:
        "PixelLoRA demonstration showing custom LoRA fine-tuning and pixel-art generation with the Stable Diffusion / DreamShaper pipeline.",
    },
  ],

  spiderverse: [
    {
      id: "jW9hLpRpSJ8",
      title: "SpiderVerse | AI Video LoRA Generation Demo",
      description:
        "Video-generation demonstration using the trained SpiderVerse style LoRA with Wan 2.1 and a ComfyUI inference workflow.",
    },
  ],

  "violence-detection": [
    {
      id: "j1jJ4uKBOE4",
      title: "Violence Detection using CNN + LSTM | AI Project Demo",
      description:
        "End-to-end computer-vision demonstration covering video frame processing, CNN spatial feature extraction, LSTM temporal modeling and violence classification.",
    },
  ],
};

function MediaCard({
  type,
  src,
  title,
  caption,
}: {
  type: string;
  src?: string;
  title: string;
  caption: string;
}) {
  const isVideo =
    type === "video" || !!src?.match(/\.(mp4|webm|mov)$/i);

  return (
    <figure className="project-media-card">
      <div className="media-stage">
        {src && isVideo ? (
          <video
            controls
            muted
            loop
            playsInline
            src={src}
          />
        ) : null}

        {src && !isVideo ? (
          <img
            src={src}
            alt={title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}

        <div className="media-fallback">
          <span>MEDIA SLOT</span>
          <strong>{title}</strong>
          <small>{src ?? "Add project media"}</small>
        </div>
      </div>

      <figcaption>
        <strong>{title}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

function YouTubeDemoSection({
  videos,
}: {
  videos: YouTubeDemo[];
}) {
  if (!videos.length) return null;

  return (
    <section className="youtube-demo-section">
      <div className="section-heading">
        <span className="section-label">
          VIDEO DEMOS
        </span>

        <h2>
          See the project working.
        </h2>

        <p className="section-description">
          Recorded demonstrations of the implemented AI
          pipeline, interface and generation workflow.
        </p>
      </div>

      <div className="youtube-demo-grid">
        {videos.map((video) => (
          <article
            className="youtube-demo-card glass"
            key={video.id}
          >
            <div className="youtube-frame">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="youtube-demo-content">
              <div className="youtube-demo-title">
                <FaYoutube />
                <h3>{video.title}</h3>
              </div>

              <p>{video.description}</p>

              <a
                href={`https://youtu.be/${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                <FaExternalLinkAlt />
                Open on YouTube
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <span className="projects-tag">
          404 / PROJECT
        </span>

        <h1>Project not found.</h1>

        <Link
          to="/projects"
          className="primary-btn"
        >
          <FaArrowLeft />
          Back to projects
        </Link>
      </main>
    );
  }

  const index = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const next =
    projects[(index + 1) % projects.length];

  const youtubeVideos =
    YOUTUBE_DEMOS[project.slug] ?? [];

  return (
    <main className="project-detail-page">

      <Link
        to="/projects"
        className="back-link"
      >
        <FaArrowLeft />
        All projects
      </Link>

      <header className="project-detail-hero">
        <div>
          <div className="detail-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
            <span>{project.status}</span>
          </div>

          <h1 className="gradient-text">
            {project.title}
          </h1>

          <p className="detail-tagline">
            {project.tagline}
          </p>

          <p className="detail-description">
            {project.description}
          </p>

          <div className="project-links">
            {project.github && (
              <a
                className="secondary-btn"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                className="primary-btn"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live demo
              </a>
            )}
          </div>
        </div>

        <div className="detail-hero-visual">
          <span>{project.heroLabel}</span>

          <strong>
            {project.shortTitle}
          </strong>

          <div className="hero-pipeline">
            {project.pipeline.map(
              (step, i) => (
                <span key={step}>
                  <b>
                    {String(i + 1).padStart(
                      2,
                      "0"
                    )}
                  </b>

                  {step}
                </span>
              )
            )}
          </div>
        </div>
      </header>

      <section className="detail-metrics">
        {project.metrics.map(
          (metric) => (
            <article
              className="detail-metric glass"
              key={metric.label}
            >
              <strong>
                {metric.value}
              </strong>

              <span>
                {metric.label}
              </span>

              <small>
                {metric.detail}
              </small>
            </article>
          )
        )}
      </section>

      {/* PROJECT DATA / TRAINING / OUTPUT GALLERY */}

      {(project.slug === "cartoonix" ||
        project.slug === "pixellora" ||
        project.slug === "spiderverse") && (
        <ProjectGallery
          manifestUrl={`${
            import.meta.env.BASE_URL
          }projects/${
            project.slug
          }/gallery-manifest.json`}
        />
      )}

      {/* YOUTUBE DEMOS */}

      <YouTubeDemoSection
        videos={youtubeVideos}
      />

      {project.media.some(
        (media) =>
          media.type !== "placeholder" && Boolean(media.src)
      ) && (
        <section className="detail-media-intro">
          <div className="section-heading">
            <span className="section-label">
              OUTPUTS / EVIDENCE
            </span>

            <h2>
              Show the result, then show how it was made.
            </h2>

            <p className="section-description">
              Selected project media and implementation evidence.
            </p>
          </div>

          <div className="media-grid">
            {project.media
              .filter(
                (media) =>
                  media.type !== "placeholder" && Boolean(media.src)
              )
              .map((media) => (
                <MediaCard
                  key={media.title}
                  {...media}
                />
              ))}
          </div>
        </section>
      )}

      <section className="detail-sections">
        {project.sections.map(
          (section, i) => (
            <article
              className={`detail-section glass ${
                i % 2 ? "reverse" : ""
              }`}
              id={section.id}
              key={section.id}
            >
              <div className="detail-section-index">
                {section.eyebrow}
              </div>

              <div className="detail-section-content">
                <h2>
                  {section.title}
                </h2>

                {section.body.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                )}

                {section.bullets && (
                  <ul>
                    {section.bullets.map(
                      (bullet) => (
                        <li key={bullet}>
                          {bullet}
                        </li>
                      )
                    )}
                  </ul>
                )}

                {section.code && (
                  <pre>
                    <code>
                      {section.code}
                    </code>
                  </pre>
                )}
              </div>
            </article>
          )
        )}
      </section>

      <section className="challenge-section">
        <div className="section-heading">
          <span className="section-label">
            ENGINEERING NOTES
          </span>

          <h2>
            Constraints and failure points
          </h2>
        </div>

        <div className="challenge-grid">
          {project.challenges.map(
            (challenge, i) => (
              <div
                className="challenge-card glass"
                key={challenge}
              >
                <span>
                  0{i + 1}
                </span>

                <p>
                  {challenge}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <footer className="project-detail-footer">
        <span>
          Next case study
        </span>

        <Link
          to={`/projects/${next.slug}`}
        >
          {next.shortTitle}
          <FaArrowRight />
        </Link>
      </footer>

    </main>
  );
}