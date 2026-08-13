from pathlib import Path
from PIL import Image, ImageOps, UnidentifiedImageError
import datetime as dt
import json
import random
import re
import shutil

# ============================================================
# PORTFOLIO MEDIA BUILDER
# Builds optimized public media + manifests for:
#   1. CARTOONIX
#   2. SPIDERVERSE
#   3. PIXELLORA
#
# RAW SOURCE DATA IS NEVER MODIFIED.
# ============================================================

ROOT = Path(
    r"C:\Users\abhis\OneDrive\Desktop\AI_WORKSPACE\Projects\project s8\project_s8\S8 OUTPUT\group 9"
)

DEST_ROOT = Path("public/projects")

THUMB_SIZE = 640
MAX_SOURCE_PIXELS = 100_000_000

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}
VIDEO_EXTS = {".mp4", ".webm", ".mov"}
GIF_EXTS = {".gif"}

# Showcase limits. These affect only what is copied to public/.
CARTOONIX_DATASET_PER_CATEGORY = 12
CARTOONIX_OUTPUT_PER_CATEGORY = 16

# PixelLoRA is already manually curated in these folders.
PIXEL_DATASET_LIMIT = 30
PIXEL_OUTPUT_LIMIT = 15

# SpiderVerse showcase folder already contains 200 randomly selected
# image/caption pairs and 9 generated videos.
SPIDERVERSE_FRAME_LIMIT = 200
SPIDERVERSE_VIDEO_LIMIT = 9

Image.MAX_IMAGE_PIXELS = None


# ============================================================
# EXACT SOURCE PATHS
# ============================================================

PROJECTS = {
    "cartoonix": {
        "dataset": ROOT / "final dataset and output" / "dataset",
        "output": ROOT / "final dataset and output" / "output",
    },

    "spiderverse": {
        "frames": ROOT / "SpiderVerse_Frames",
        "output": ROOT / "SpiderVerse_output",
    },

    "pixellora": {
        "dataset": ROOT / "PixelLoRA_Dataset",
        "output": ROOT / "PixelLoRA_output",
    },
}


# ============================================================
# HELPERS
# ============================================================

def slug(value: str) -> str:
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value.strip().lower()).strip("-")
    return value or "item"


def image_files(folder: Path):
    if not folder.exists():
        return []

    return sorted(
        [
            p
            for p in folder.rglob("*")
            if p.is_file() and p.suffix.lower() in IMAGE_EXTS
        ],
        key=lambda p: p.as_posix().lower(),
    )



def video_files(folder: Path):
    if not folder.exists():
        return []

    return sorted(
        [
            p
            for p in folder.rglob("*")
            if p.is_file() and p.suffix.lower() in VIDEO_EXTS
        ],
        key=lambda p: p.as_posix().lower(),
    )



def gif_files(folder: Path):
    if not folder.exists():
        return []

    return sorted(
        [
            p
            for p in folder.rglob("*")
            if p.is_file() and p.suffix.lower() in GIF_EXTS
        ],
        key=lambda p: p.as_posix().lower(),
    )


def sample_evenly(files, limit):
    if len(files) <= limit:
        return files

    if limit <= 1:
        return files[:1]

    indices = [
        round(i * (len(files) - 1) / (limit - 1))
        for i in range(limit)
    ]

    return [files[i] for i in indices]


def sample_random(files, limit, seed=42):
    if len(files) <= limit:
        return files

    rng = random.Random(seed)
    return rng.sample(files, limit)


def make_thumb(src: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)

    try:
        with Image.open(src) as original:
            width, height = original.size
            pixels = width * height

            if pixels > MAX_SOURCE_PIXELS:
                print(f"SKIP oversized image: {src}")
                print(f"    dimensions: {width}x{height}")
                print(f"    pixels: {pixels:,}")
                return False

            im = ImageOps.exif_transpose(original)
            im = im.convert("RGB")
            im.thumbnail(
                (THUMB_SIZE, THUMB_SIZE),
                Image.Resampling.LANCZOS,
            )

            canvas = Image.new(
                "RGB",
                (THUMB_SIZE, THUMB_SIZE),
                "#111111",
            )

            x = (THUMB_SIZE - im.width) // 2
            y = (THUMB_SIZE - im.height) // 2
            canvas.paste(im, (x, y))

            canvas.save(
                dest,
                "WEBP",
                quality=78,
                method=6,
            )

            return True

    except (
        UnidentifiedImageError,
        OSError,
        ValueError,
    ) as exc:
        print(f"SKIP invalid image: {src}")
        print(f"    {exc}")
        return False


def copy_video(src: Path, dest: Path) -> bool:
    try:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        return True
    except OSError as exc:
        print(f"SKIP video: {src}")
        print(f"    {exc}")
        return False


def copy_media(src: Path, dest: Path) -> bool:
    try:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        return True
    except OSError as exc:
        print(f"SKIP media: {src}")
        print(f"    {exc}")
        return False

def verify_source(name, path):
    print(f"{name}: {path}")
    print(f"    Exists: {path.exists()}")
    if path.exists():
        print(f"    Images: {len(image_files(path))}")
        print(f"    Videos: {len(video_files(path))}")


# ============================================================
# CARTOONIX
# ============================================================

def build_cartoonix():
    project = "cartoonix"
    src_dataset = PROJECTS[project]["dataset"]
    src_output = PROJECTS[project]["output"]

    dest = DEST_ROOT / project
    dataset_dest = dest / "dataset"
    output_dest = dest / "outputs"

    print("\n" + "=" * 70)
    print("CARTOONIX")
    print("=" * 70)

    verify_source("Dataset", src_dataset)
    verify_source("Output", src_output)

    if not src_dataset.exists():
        raise SystemExit(f"CARTOONIX DATASET NOT FOUND:\n{src_dataset}")
    if not src_output.exists():
        raise SystemExit(f"CARTOONIX OUTPUT NOT FOUND:\n{src_output}")

    if dest.exists():
        shutil.rmtree(dest)

    dataset_dest.mkdir(parents=True, exist_ok=True)
    output_dest.mkdir(parents=True, exist_ok=True)

    datasets = []
    outputs = []
    dataset_summary = []
    output_summary = []

    # Dataset: each category folder becomes a gallery category.
    categories = sorted(
        [p for p in src_dataset.iterdir() if p.is_dir()],
        key=lambda p: p.name.lower(),
    )

    for folder in categories:
        files = image_files(folder)
        selected = sample_evenly(files, CARTOONIX_DATASET_PER_CATEGORY)
        category = slug(folder.name)
        public_count = 0

        for i, src in enumerate(selected, 1):
            out = dataset_dest / category / f"{i:03d}.webp"
            if make_thumb(src, out):
                public_count += 1
                datasets.append(
                    {
                        "src": "/" + out.as_posix(),
                        "title": folder.name,
                        "category": category,
                        "kind": "dataset",
                    }
                )

        dataset_summary.append(
            {
                "name": folder.name,
                "category": category,
                "sourceCount": len(files),
                "publicSamples": public_count,
            }
        )

        print(
            f"DATASET  {folder.name}: "
            f"{len(files)} source -> {public_count} public"
        )

    # Output: each category folder becomes a gallery category.
    categories = sorted(
        [p for p in src_output.iterdir() if p.is_dir()],
        key=lambda p: p.name.lower(),
    )

    for folder in categories:
        files = image_files(folder)
        selected = sample_evenly(files, CARTOONIX_OUTPUT_PER_CATEGORY)
        category = slug(folder.name)
        public_count = 0

        for i, src in enumerate(selected, 1):
            out = output_dest / category / f"{i:03d}.webp"
            if make_thumb(src, out):
                public_count += 1
                outputs.append(
                    {
                        "src": "/" + out.as_posix(),
                        "title": folder.name,
                        "category": category,
                        "kind": "output",
                    }
                )

        output_summary.append(
            {
                "name": folder.name,
                "category": category,
                "sourceCount": len(files),
                "publicSamples": public_count,
            }
        )

        print(
            f"OUTPUT   {folder.name}: "
            f"{len(files)} source -> {public_count} public"
        )

    manifest = {
        "project": "cartoonix",
        "generatedAt": dt.datetime.now().isoformat(timespec="seconds"),
        "source": {
            "dataset": str(src_dataset),
            "outputs": str(src_output),
        },
        "policy": {
            "datasetSamplesPerCategory": CARTOONIX_DATASET_PER_CATEGORY,
            "outputSamplesPerCategory": CARTOONIX_OUTPUT_PER_CATEGORY,
            "thumbnailFormat": "webp",
            "thumbnailMaxEdge": THUMB_SIZE,
            "note": "Only optimized public samples are copied. Raw datasets remain local.",
        },
        "datasetCount": len(datasets),
        "outputCount": len(outputs),
        "datasetSourceImageCount": sum(x["sourceCount"] for x in dataset_summary),
        "outputSourceImageCount": sum(x["sourceCount"] for x in output_summary),
        "datasetCategories": dataset_summary,
        "outputCategories": output_summary,
        "datasets": datasets,
        "outputs": outputs,
    }

    (dest / "gallery-manifest.json").write_text(
        json.dumps(manifest, indent=2),
        encoding="utf-8",
    )

    print(f"\nCARTOONIX manifest: {dest / 'gallery-manifest.json'}")


# ============================================================
# PIXELLORA
# ============================================================

def build_pixellora():
    project = "pixellora"
    src_dataset = PROJECTS[project]["dataset"]
    src_output = PROJECTS[project]["output"]

    dest = DEST_ROOT / project
    dataset_dest = dest / "dataset"
    output_dest = dest / "outputs"

    print("\n" + "=" * 70)
    print("PIXELLORA")
    print("=" * 70)

    verify_source("Dataset", src_dataset)
    verify_source("Output", src_output)

    if not src_dataset.exists():
        raise SystemExit(f"PIXELLORA DATASET NOT FOUND:\n{src_dataset}")
    if not src_output.exists():
        raise SystemExit(f"PIXELLORA OUTPUT NOT FOUND:\n{src_output}")

    if dest.exists():
        shutil.rmtree(dest)

    dataset_dest.mkdir(parents=True, exist_ok=True)
    output_dest.mkdir(parents=True, exist_ok=True)

    # Dataset is already curated. Prefer image+caption pairs.
    dataset_images = [
        p for p in image_files(src_dataset)
        if (src_dataset / (p.stem + ".txt")).exists()
    ]
    dataset_images = sample_random(
        dataset_images,
        PIXEL_DATASET_LIMIT,
        seed=2026,
    )

    datasets = []

    for i, src in enumerate(dataset_images, 1):
        out = dataset_dest / f"{i:03d}.webp"
        if make_thumb(src, out):
            datasets.append(
                {
                    "src": "/" + out.as_posix(),
                    "title": "PixelLoRA training sample",
                    "category": "pixel-art-style",
                    "kind": "dataset",
                    "source": src.name,
                }
            )

    # Outputs are already curated final generations.
    output_images = sample_random(
        image_files(src_output),
        PIXEL_OUTPUT_LIMIT,
        seed=2026,
    )

    outputs = []

    for i, src in enumerate(output_images, 1):
        out = output_dest / f"{i:03d}.webp"
        if make_thumb(src, out):
            outputs.append(
                {
                    "src": "/" + out.as_posix(),
                    "title": "PixelLoRA generated output",
                    "category": "generated",
                    "kind": "output",
                    "source": src.name,
                }
            )

    manifest = {
        "project": "pixellora",
        "generatedAt": dt.datetime.now().isoformat(timespec="seconds"),
        "source": {
            "dataset": str(src_dataset),
            "outputs": str(src_output),
        },
        "policy": {
            "datasetSamples": PIXEL_DATASET_LIMIT,
            "outputSamples": PIXEL_OUTPUT_LIMIT,
            "thumbnailFormat": "webp",
            "thumbnailMaxEdge": THUMB_SIZE,
        },
        "datasetCount": len(datasets),
        "outputCount": len(outputs),
        "datasetSourceImageCount": len(image_files(src_dataset)),
        "outputSourceImageCount": len(image_files(src_output)),
        "datasets": datasets,
        "outputs": outputs,
    }

    (dest / "gallery-manifest.json").write_text(
        json.dumps(manifest, indent=2),
        encoding="utf-8",
    )

    print(f"Dataset showcase: {len(datasets)}")
    print(f"Output showcase : {len(outputs)}")
    print(f"PIXELLORA manifest: {dest / 'gallery-manifest.json'}")


# ============================================================
# SPIDERVERSE
# ============================================================

def build_spiderverse():
    project = "spiderverse"
    src_frames = PROJECTS[project]["frames"]
    src_output = PROJECTS[project]["output"]

    dest = DEST_ROOT / project
    frames_dest = dest / "frames"
    outputs_dest = dest / "outputs"

    print("\n" + "=" * 70)
    print("SPIDERVERSE")
    print("=" * 70)

    verify_source("Frames", src_frames)
    verify_source("Generated videos", src_output)

    if not src_frames.exists():
        raise SystemExit(f"SPIDERVERSE FRAMES NOT FOUND:\n{src_frames}")

    if not src_output.exists():
        raise SystemExit(f"SPIDERVERSE OUTPUT NOT FOUND:\n{src_output}")

    if dest.exists():
        shutil.rmtree(dest)

    frames_dest.mkdir(parents=True, exist_ok=True)
    outputs_dest.mkdir(parents=True, exist_ok=True)

    # ============================================================
    # 200 RANDOMLY SELECTED FRAME/CAPTION PAIRS
    # ============================================================

    frame_images = [
        p for p in image_files(src_frames)
        if (src_frames / (p.stem + ".txt")).exists()
    ]

    frame_images = frame_images[:SPIDERVERSE_FRAME_LIMIT]

    frames = []

    for i, src in enumerate(frame_images, 1):
        out = frames_dest / f"{i:03d}.webp"

        if make_thumb(src, out):
            frames.append(
                {
                    "src": "/" + out.as_posix(),
                    "title": "SpiderVerse frame",
                    "category": "spiderverse-frames",
                    "kind": "dataset",
                    "source": src.name,
                }
            )

    # ============================================================
    # GENERATED GIF OUTPUTS
    # ============================================================

    gif_source = src_output / "gif"

    gifs = sample_evenly(
        gif_files(gif_source),
        SPIDERVERSE_VIDEO_LIMIT,
    )

    outputs = []

    for src in gifs:
        out = outputs_dest / src.name

        if copy_media(src, out):
            outputs.append(
                {
                    "src": "/" + out.as_posix(),
                    "title": "SpiderVerse generated animation",
                    "category": "wan-2-1",
                    "kind": "output",
                    "source": src.name,
                }
            )

    print(f"GIF outputs      : {len(outputs)}")

    # ============================================================
    # MANIFEST
    # ============================================================

    manifest = {
        "project": "spiderverse",
        "generatedAt": dt.datetime.now().isoformat(timespec="seconds"),

        "source": {
            "frames": str(src_frames),
            "outputs": str(src_output),
            "gifOutputs": str(gif_source),
        },

        "policy": {
            "frameSamples": SPIDERVERSE_FRAME_LIMIT,
            "gifOutputSamples": SPIDERVERSE_VIDEO_LIMIT,
            "frameThumbnailFormat": "webp",
            "frameThumbnailMaxEdge": THUMB_SIZE,
            "note": "The frame folder is already a manually/randomly curated showcase subset.",
        },

        "frameCount": len(frames),
        "outputCount": len(outputs),

        "frameSourceImageCount": len(frame_images),
        "outputSourceCount": len(gif_files(gif_source)),

        "datasets": frames,
        "outputs": outputs,
    }

    (dest / "gallery-manifest.json").write_text(
        json.dumps(manifest, indent=2),
        encoding="utf-8",
    )

    print(f"Frame showcase : {len(frames)}")
    print(f"GIF outputs    : {len(outputs)}")
    print(f"SPIDERVERSE manifest: {dest / 'gallery-manifest.json'}")
# ============================================================
# MAIN
# ============================================================

def main():
    print("=" * 70)
    print("AI PORTFOLIO — PROJECT MEDIA BUILDER")
    print("=" * 70)
    print(f"ROOT: {ROOT}")
    print()

    build_cartoonix()
    build_pixellora()
    build_spiderverse()

    print("\n" + "=" * 70)
    print("ALL PROJECT MEDIA BUILDS COMPLETE")
    print("=" * 70)
    print()
    print("Generated:")
    print("  public/projects/cartoonix/")
    print("  public/projects/pixellora/")
    print("  public/projects/spiderverse/")
    print()
    print("Raw source folders were NOT modified.")


if __name__ == "__main__":
    main()
