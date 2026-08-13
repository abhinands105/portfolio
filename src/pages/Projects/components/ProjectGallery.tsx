import { useEffect, useMemo, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";
import "./ProjectGallery.css";

type GalleryItem = {
  src: string;
  title: string;
  category: string;
  kind: "dataset" | "output" | "training";
};

type GalleryManifest = {
  generatedAt?: string;
  datasetCount?: number;
  outputCount?: number;
  datasetSourceImageCount?: number;
  outputSourceImageCount?: number;

  datasetCategories?: Array<{
    name: string;
    category?: string;
    sourceCount: number;
    publicSamples: number;
  }>;

  outputCategories?: Array<{
    name: string;
    category?: string;
    sourceCount: number;
    publicSamples: number;
  }>;

  datasets?: GalleryItem[];
  outputs?: GalleryItem[];
  training?: GalleryItem[];
};



/**
 * Convert manifest paths into URLs that work with Vite's public folder.
 *
 * Example:
 * public/projects/cartoonix/outputs/foo/001.webp
 * becomes:
 * /portfolio/projects/cartoonix/outputs/foo/001.webp
 */
function assetUrl(path: string): string {
  if (!path) return "";

  let clean = path.replace(/\\/g, "/");

  clean = clean.replace(/^\.?\//, "");
  clean = clean.replace(/^public\//, "");

  const base = import.meta.env.BASE_URL || "/";

  return `${base.replace(/\/$/, "")}/${clean}`;
}

function prettyCategory(value: string): string {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function Gallery({
  id,
  title,
  description,
  items,
  emptyText,
  sourceCount,
}: {
  id: string;
  title: string;
  description: string;
  items: GalleryItem[];
  emptyText: string;
  sourceCount?: number;
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(24);
  const [selected, setSelected] = useState<number | null>(null);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(items.map((item) => item.category))
      ).sort(),
    ],
    [items]
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter(
            (item) => item.category === activeCategory
          ),
    [activeCategory, items]
  );

  const shown = filtered.slice(0, visible);

  useEffect(() => {
    setVisible(24);
    setSelected(null);
  }, [activeCategory]);

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }

      if (event.key === "ArrowLeft") {
        setSelected(
          (current) =>
            current === null
              ? 0
              : (current - 1 + filtered.length) %
                filtered.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelected(
          (current) =>
            current === null
              ? 0
              : (current + 1) % filtered.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [selected, filtered.length]);

  const selectedItem =
    selected === null ? null : filtered[selected];

  const move = (delta: number) => {
    if (!filtered.length || selected === null) return;

    setSelected(
      (selected + delta + filtered.length) %
        filtered.length
    );
  };

  return (
    <section
      className="project-gallery-section"
      id={id}
    >
      <div className="section-heading">
        <span className="section-label">
          {title}
        </span>

        <h2>
          {sourceCount
            ? `${sourceCount.toLocaleString()} source assets → ${items.length.toLocaleString()} public samples.`
            : `${items.length.toLocaleString()} documented assets.`}
        </h2>

        <p className="section-description">
          {description}
        </p>
      </div>

      {items.length > 0 ? (
        <>
          <div className="gallery-toolbar">
            <div
              className="gallery-filters"
              aria-label={`${title} filters`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`gallery-filter ${
                    activeCategory === category
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category === "All"
                    ? "All"
                    : prettyCategory(category)}
                </button>
              ))}
            </div>

            <span className="gallery-count">
              Showing {shown.length} /{" "}
              {filtered.length}
            </span>
          </div>

          <div className="gallery-grid">
            {shown.map((item, index) => (
              <button
                type="button"
                className="gallery-item"
                key={`${item.src}-${index}`}
                onClick={() => setSelected(index)}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={assetUrl(item.src)}
                  alt={`${item.title} - ${prettyCategory(
                    item.category
                  )}`}
                  loading="lazy"
                />

                <span className="gallery-item-overlay">
                  <strong>{item.title}</strong>
                  <small>
                    {prettyCategory(item.category)}
                  </small>
                </span>

                <span className="gallery-expand">
                  <FaExpand />
                </span>
              </button>
            ))}
          </div>

          {shown.length < filtered.length && (
            <button
              type="button"
              className="gallery-load-more"
              onClick={() =>
                setVisible((value) => value + 24)
              }
            >
              Load 24 more
            </button>
          )}

          {selectedItem && (
            <div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              onClick={() => setSelected(null)}
            >
              <button
                type="button"
                className="gallery-close"
                onClick={() => setSelected(null)}
                aria-label="Close gallery"
              >
                ×
              </button>

              <button
                type="button"
                className="gallery-nav gallery-nav-left"
                onClick={(event) => {
                  event.stopPropagation();
                  move(-1);
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <div
                className="gallery-lightbox-content"
                onClick={(event) =>
                  event.stopPropagation()
                }
              >
                <img
                  src={assetUrl(selectedItem.src)}
                  alt={selectedItem.title}
                />

                <div>
                  <strong>
                    {selectedItem.title}
                  </strong>

                  <span>
                    {prettyCategory(
                      selectedItem.category
                    )}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="gallery-nav gallery-nav-right"
                onClick={(event) => {
                  event.stopPropagation();
                  move(1);
                }}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="gallery-empty">
          {emptyText}
        </div>
      )}
    </section>
  );
}

function TrainingGallery({
  items,
}: {
  items: GalleryItem[];
}) {
  return (
    <Gallery
      id="training-gallery"
      title="TRAINING EVIDENCE"
      description="Dataset preparation, training configuration and training progress evidence for this project."
      items={items}
      emptyText="No training evidence has been added yet."
    />
  );
}


export default function ProjectGallery({
  manifestUrl,
}: {
  manifestUrl: string;
}) {
  const [manifest, setManifest] =
    useState<GalleryManifest | null>(null);

  const [error, setError] =
    useState(false);

  const [activeView, setActiveView] = useState<
    "dataset" | "outputs" | "training"
  >("dataset");

  useEffect(() => {
    let cancelled = false;

    fetch(manifestUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Gallery manifest not found"
          );
        }

        return response.json();
      })
      .then((data: GalleryManifest) => {
        if (!cancelled) {
          setManifest(data);
          setError(false);
        }
      })
      .catch((reason) => {
        console.error(
          "Failed to load gallery manifest:",
          reason
        );

        if (!cancelled) {
          setError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [manifestUrl]);

  if (error) {
    return (
      <div className="gallery-build-note">
        <strong>
          Project gallery could not be loaded.
        </strong>

        <span>
          Check that
          <code>{manifestUrl}</code>
          exists and restart the Vite development
          server.
        </span>
      </div>
    );
  }

  if (!manifest) {
    return (
      <div className="gallery-build-note">
        Loading project gallery…
      </div>
    );
  }

  return (
    <section
      className="project-gallery-hub"
      id="project-assets"
    >
      <div className="gallery-hub-header">
        <div className="section-heading">
          <span className="section-label">
            PROJECT ASSETS
          </span>

          <h2>
            Dataset → training → generation →
            outputs.
          </h2>

          <p className="section-description">
            Evidence-first project documentation:
            representative training data, model
            experiments, generated outputs and
            recorded generation workflows.
          </p>
        </div>

        <div
          className="gallery-switcher"
          role="tablist"
          aria-label="Project asset gallery"
        >
          <button
            type="button"
            className={`gallery-switch ${
              activeView === "dataset"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveView("dataset")
            }
            role="tab"
            aria-selected={
              activeView === "dataset"
            }
          >
            <span>01</span>
            DATASET
            <small>
              {(
                manifest.datasetSourceImageCount ??
                0
              ).toLocaleString()}{" "}
              source
            </small>
          </button>

          <button
            type="button"
            className={`gallery-switch ${
              activeView === "training"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveView("training")
            }
            role="tab"
            aria-selected={
              activeView === "training"
            }
          >
            <span>02</span>
            TRAINING
            <small>
              {(manifest.training?.length ?? 0)} evidence assets
            </small>
          </button>

          <button
            type="button"
            className={`gallery-switch ${
              activeView === "outputs"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveView("outputs")
            }
            role="tab"
            aria-selected={
              activeView === "outputs"
            }
          >
            <span>03</span>
            OUTPUTS
            <small>
              {(
                manifest.outputSourceImageCount ??
                0
              ).toLocaleString()}{" "}
              source
            </small>
          </button>

        </div>
      </div>


      <div className="project-gallery-wrap">
        {activeView === "dataset" && (
          <Gallery
            id="dataset-gallery"
            title="DATASET GALLERY"
            description="Representative samples from the curated training collections. The raw dataset remains local; only optimized WebP samples are served publicly."
            items={manifest.datasets ?? []}
            sourceCount={
              manifest.datasetSourceImageCount
            }
            emptyText="No dataset thumbnails have been generated yet."
          />
        )}

        {activeView === "outputs" && (
          <Gallery
            id="output-gallery"
            title="OUTPUT GALLERY"
            description="Generated results organized by style family and experiment. Browse representative outputs without exposing the complete local generation archive."
            items={manifest.outputs ?? []}
            sourceCount={
              manifest.outputSourceImageCount
            }
            emptyText="No output thumbnails have been generated yet."
          />
        )}

        {activeView === "training" && (
          <TrainingGallery
            items={manifest.training ?? []}
          />
        )}

      </div>
    </section>
  );
}