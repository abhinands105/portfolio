from pathlib import Path
from PIL import Image, ImageOps
import json
import re
import shutil
import datetime as dt

DATASET_ROOT = Path(
    r"C:\Users\abhis\OneDrive\Desktop\AI_WORKSPACE\Projects\project s8\project_s8\project_s8\datasetlora"
)

OUTPUT_ROOT = Path(
    r"C:\Users\abhis\OneDrive\Desktop\AI_WORKSPACE\Projects\project s8\project_s8\S8 OUTPUT\group 9\output"
)

DEST = Path("public/projects/cartoonix")
DATASET_DEST = DEST / "dataset"
OUTPUT_DEST = DEST / "outputs"
MANIFEST = DEST / "gallery-manifest.json"

DATASET_LIMIT = 12
OUTPUT_LIMIT = 16
THUMB_SIZE = 640
MAX_PIXELS = 100_000_000

EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".bmp"
}

Image.MAX_IMAGE_PIXELS = None


def slug(name):
    name = re.sub(
        r"[^a-zA-Z0-9]+",
        "-",
        name.strip().lower()
    )
    return name.strip("-") or "item"


def images_in(folder):
    return sorted(
        [
            p
            for p in folder.rglob("*")
            if p.is_file()
            and p.suffix.lower() in EXTENSIONS
        ],
        key=lambda p: p.as_posix().lower()
    )


def sample(files, limit):
    if len(files) <= limit:
        return files

    if limit == 1:
        return files[:1]

    indexes = [
        round(i * (len(files) - 1) / (limit - 1))
        for i in range(limit)
    ]

    return [files[i] for i in indexes]


def thumbnail(source, destination):

    try:
        with Image.open(source) as image:

            width, height = image.size
            pixels = width * height

            if pixels > MAX_PIXELS:
                print(
                    f"SKIP oversized image: "
                    f"{source}"
                )
                print(
                    f"    {width}x{height} "
                    f"= {pixels:,} pixels"
                )
                return False

            image = ImageOps.exif_transpose(image)
            image = image.convert("RGB")

            image.thumbnail(
                (THUMB_SIZE, THUMB_SIZE),
                Image.Resampling.LANCZOS
            )

            canvas = Image.new(
                "RGB",
                (THUMB_SIZE, THUMB_SIZE),
                "#111111"
            )

            x = (THUMB_SIZE - image.width) // 2
            y = (THUMB_SIZE - image.height) // 2

            canvas.paste(image, (x, y))

            destination.parent.mkdir(
                parents=True,
                exist_ok=True
            )

            canvas.save(
                destination,
                "WEBP",
                quality=78,
                method=6
            )

            return True

    except Exception as error:
        print(f"SKIP invalid image: {source}")
        print(f"    {error}")
        return False


def process(source_root, destination_root, limit, kind):

    records = []
    categories = []

    folders = sorted(
        [
            p
            for p in source_root.iterdir()
            if p.is_dir()
        ],
        key=lambda p: p.name.lower()
    )

    for folder in folders:

        files = images_in(folder)

        if not files:
            continue

        chosen = sample(files, limit)
        category = slug(folder.name)

        print(
            f"{folder.name}: "
            f"{len(files)} source images -> "
            f"{len(chosen)} public samples"
        )

        public_files = []

        for number, source in enumerate(
            chosen,
            start=1
        ):

            destination = (
                destination_root
                / category
                / f"{number:03d}.webp"
            )

            if thumbnail(source, destination):

                public_files.append(
                    {
                        "src":
                            "/" + destination.as_posix(),

                        "source":
                            source.name
                    }
                )

        categories.append(
            {
                "name":
                    folder.name,

                "category":
                    category,

                "sourceCount":
                    len(files),

                "publicSamples":
                    len(public_files),

                "images":
                    public_files
            }
        )

        for item in public_files:

            records.append(
                {
                    "src":
                        item["src"],

                    "title":
                        folder.name,

                    "category":
                        category,

                    "kind":
                        kind
                }
            )

    return records, categories


def main():

    print()
    print("=" * 60)
    print("CARTOONIX GALLERY BUILDER")
    print("=" * 60)

    print()
    print("DATASET SOURCE:")
    print(DATASET_ROOT)

    print()
    print("OUTPUT SOURCE:")
    print(OUTPUT_ROOT)

    print()
    print("DATASET EXISTS:", DATASET_ROOT.exists())
    print("OUTPUT EXISTS :", OUTPUT_ROOT.exists())

    if not DATASET_ROOT.exists():
        raise SystemExit(
            "Dataset source does not exist."
        )

    if not OUTPUT_ROOT.exists():
        raise SystemExit(
            "Output source does not exist."
        )

    # Only rebuild gallery assets.
    # Existing training/ and videos/ remain untouched.

    if DATASET_DEST.exists():
        shutil.rmtree(DATASET_DEST)

    if OUTPUT_DEST.exists():
        shutil.rmtree(OUTPUT_DEST)

    DATASET_DEST.mkdir(
        parents=True,
        exist_ok=True
    )

    OUTPUT_DEST.mkdir(
        parents=True,
        exist_ok=True
    )

    print()
    print("=" * 60)
    print("DATASET")
    print("=" * 60)

    dataset_records, dataset_categories = process(
        DATASET_ROOT,
        DATASET_DEST,
        DATASET_LIMIT,
        "dataset"
    )

    print()
    print("=" * 60)
    print("OUTPUTS")
    print("=" * 60)

    output_records, output_categories = process(
        OUTPUT_ROOT,
        OUTPUT_DEST,
        OUTPUT_LIMIT,
        "output"
    )

    manifest = {
        "project": "cartoonix",

        "generatedAt":
            dt.datetime.now().isoformat(
                timespec="seconds"
            ),

        "dataset": {
            "source":
                str(DATASET_ROOT),

            "categoryCount":
                len(dataset_categories),

            "sourceImageCount":
                sum(
                    x["sourceCount"]
                    for x in dataset_categories
                ),

            "publicSampleCount":
                len(dataset_records),

            "categories":
                dataset_categories
        },

        "outputs": {
            "source":
                str(OUTPUT_ROOT),

            "categoryCount":
                len(output_categories),

            "sourceImageCount":
                sum(
                    x["sourceCount"]
                    for x in output_categories
                ),

            "publicSampleCount":
                len(output_records),

            "categories":
                output_categories
        },

        "datasets":
            dataset_records,

        "outputs":
            output_records,

        "policy": {
            "datasetSamplesPerCategory":
                DATASET_LIMIT,

            "outputSamplesPerCategory":
                OUTPUT_LIMIT,

            "thumbnailSize":
                THUMB_SIZE,

            "format":
                "webp",

            "rawDataCopied":
                False
        }
    }

    MANIFEST.write_text(
        json.dumps(
            manifest,
            indent=2,
            ensure_ascii=False
        ),
        encoding="utf-8"
    )

    print()
    print("=" * 60)
    print("DONE")
    print("=" * 60)

    print(
        "Dataset categories :",
        len(dataset_categories)
    )

    print(
        "Dataset thumbnails :",
        len(dataset_records)
    )

    print(
        "Output categories  :",
        len(output_categories)
    )

    print(
        "Output thumbnails  :",
        len(output_records)
    )

    print()
    print("Manifest:")
    print(MANIFEST)

    print()
    print("RAW DATA WAS NOT MODIFIED.")
    print("Only optimized WebP samples were copied.")
    print("Training and videos were NOT modified.")


if __name__ == "__main__":
    main()
