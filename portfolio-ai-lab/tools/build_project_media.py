from pathlib import Path
from PIL import Image
import json
import re

SOURCE = Path(r"C:\Users\abhis\OneDrive\Desktop\AI_WORKSPACE\Projects\project s8\project_s8\project_s8")

DATASET_SOURCE = SOURCE / "datasetlora"
OUTPUT_SOURCE = SOURCE / "S8 OUTPUT" / "group 9" / "output"

DEST = Path("public/projects/cartoonix")
DATASET_DEST = DEST / "dataset"
OUTPUT_DEST = DEST / "outputs"

IMAGE_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".webp", ".bmp"
}

MAX_DATASET_PER_CATEGORY = 12
MAX_OUTPUT_PER_CATEGORY = 16
THUMB_SIZE = 640


def safe_name(name):
    name = name.lower().strip()
    name = re.sub(r"[^a-z0-9]+", "-", name)
    return name.strip("-")


def image_files(folder):
    if not folder.exists():
        return []

    return sorted(
        p for p in folder.rglob("*")
        if p.is_file() and p.suffix.lower() in IMAGE_EXTENSIONS
    )


def sample_files(files, maximum):
    if len(files) <= maximum:
        return files

    # Evenly distribute samples through the folder
    indexes = [
        round(i * (len(files) - 1) / (maximum - 1))
        for i in range(maximum)
    ]

    return [files[i] for i in indexes]


def make_webp(source, destination):
    destination.parent.mkdir(parents=True, exist_ok=True)

    try:
        with Image.open(source) as img:
            img = img.convert("RGB")
            img.thumbnail((THUMB_SIZE, THUMB_SIZE), Image.Resampling.LANCZOS)
            img.save(
                destination,
                "WEBP",
                quality=82,
                method=6
            )
        return True

    except Exception as e:
        print(f"ERROR: {source}")
        print(f"       {e}")
        return False


def process_dataset():
    gallery = []

    if not DATASET_SOURCE.exists():
        print("Dataset source not found:")
        print(DATASET_SOURCE)
        return gallery

    print("\n==============================")
    print("DATASET")
    print("==============================")

    for category in sorted(DATASET_SOURCE.iterdir()):
        if not category.is_dir():
            continue

        files = image_files(category)

        if not files:
            continue

        selected = sample_files(files, MAX_DATASET_PER_CATEGORY)

        category_name = safe_name(category.name)
        destination = DATASET_DEST / category_name

        print(
            f"{category.name}: "
            f"{len(files)} source images -> "
            f"{len(selected)} public samples"
        )

        items = []

        for index, source in enumerate(selected, 1):
            filename = f"{index:02d}.webp"
            target = destination / filename

            if make_webp(source, target):
                items.append({
                    "file": f"/portfolio/projects/cartoonix/dataset/{category_name}/{filename}",
                    "source": source.name
                })

        gallery.append({
            "category": category.name,
            "slug": category_name,
            "sourceCount": len(files),
            "publicCount": len(items),
            "items": items
        })

    return gallery


def process_outputs():
    gallery = []

    if not OUTPUT_SOURCE.exists():
        print("Output source not found:")
        print(OUTPUT_SOURCE)
        return gallery

    print("\n==============================")
    print("OUTPUTS")
    print("==============================")

    for category in sorted(OUTPUT_SOURCE.iterdir()):
        if not category.is_dir():
            continue

        files = image_files(category)

        if not files:
            continue

        selected = sample_files(files, MAX_OUTPUT_PER_CATEGORY)

        category_name = safe_name(category.name)
        destination = OUTPUT_DEST / category_name

        print(
            f"{category.name}: "
            f"{len(files)} source outputs -> "
            f"{len(selected)} public samples"
        )

        items = []

        for index, source in enumerate(selected, 1):
            filename = f"{index:02d}.webp"
            target = destination / filename

            if make_webp(source, target):
                items.append({
                    "file": f"/portfolio/projects/cartoonix/outputs/{category_name}/{filename}",
                    "source": source.name
                })

        gallery.append({
            "category": category.name,
            "slug": category_name,
            "sourceCount": len(files),
            "publicCount": len(items),
            "items": items
        })

    return gallery


def main():
    DATASET_DEST.mkdir(parents=True, exist_ok=True)
    OUTPUT_DEST.mkdir(parents=True, exist_ok=True)

    dataset = process_dataset()
    outputs = process_outputs()

    manifest = {
        "project": "cartoonix",
        "dataset": {
            "source": str(DATASET_SOURCE),
            "categories": dataset
        },
        "outputs": {
            "source": str(OUTPUT_SOURCE),
            "categories": outputs
        }
    }

    manifest_path = DEST / "gallery-manifest.json"

    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    dataset_total = sum(x["publicCount"] for x in dataset)
    output_total = sum(x["publicCount"] for x in outputs)

    print("\n==============================")
    print("DONE")
    print("==============================")
    print(f"Dataset categories : {len(dataset)}")
    print(f"Dataset thumbnails  : {dataset_total}")
    print(f"Output categories   : {len(outputs)}")
    print(f"Output thumbnails   : {output_total}")
    print(f"Manifest            : {manifest_path}")
    print()
    print("RAW DATA WAS NOT MODIFIED.")
    print("Only optimized WebP samples were copied.")


if __name__ == "__main__":
    main()
