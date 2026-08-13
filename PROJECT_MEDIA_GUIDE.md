# Project media + dataset/output galleries

## CARTOONIX / S8 gallery

The public portfolio does **not** copy the full dataset or LoRA checkpoints. It creates optimized WebP samples from the local folders and writes a manifest used by the React gallery.

### Default local sources

```text
C:\Users\abhis\OneDrive\Desktop\AI_WORKSPACE\Projects\project s8\project_s8\project_s8\datasetlora
C:\Users\abhis\OneDrive\Desktop\AI_WORKSPACE\Projects\project s8\project_s8\S8 OUTPUT\group 9\output
```

The builder supports both normal category folders and image-containing `.zip` dataset sources.

### Build the gallery

From the portfolio root:

```powershell
python tools/build_project_media.py
```

Or pass different roots:

```powershell
python tools/build_project_media.py --dataset-root "C:\path\to\datasetlora" --output-root "C:\path\to\output"
```

### Public gallery policy

- 12 dataset samples per category
- 16 output samples per category
- deterministic evenly-spaced sampling
- 640px max thumbnail edge
- WebP quality 78
- lazy-loaded React gallery
- 24 visible items initially, then Load More
- fullscreen lightbox with previous/next navigation
- raw images, source videos and `.safetensors` are never copied by this script

The manifest also records the **full source image count** so the case study can say, for example, `2,186 source images → 12 public samples for this category`.

### Recommended portfolio scale

For a high-quality portfolio, target roughly:

- 150–250 dataset thumbnails across the whole project
- 200–300 generated outputs
- 10–30 training/process screenshots
- 5–10 architecture/data-flow diagrams
- 3–8 short demo videos

The full private/raw dataset should remain outside GitHub Pages.
