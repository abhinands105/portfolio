// src/data/datasets.ts

export interface TrainingSample {
    input: number[];
    target: number[];
}

export type DatasetName =
    | "XOR"
    | "AND"
    | "OR"
    | "NAND"
    | "NOR"
    | "XNOR";

export interface DatasetDefinition {
    name: DatasetName;
    description: string;
    samples: TrainingSample[];
}

export const XOR_DATASET: TrainingSample[] = [
    { input: [0, 0], target: [0] },
    { input: [0, 1], target: [1] },
    { input: [1, 0], target: [1] },
    { input: [1, 1], target: [0] },
];

export const AND_DATASET: TrainingSample[] = [
    { input: [0, 0], target: [0] },
    { input: [0, 1], target: [0] },
    { input: [1, 0], target: [0] },
    { input: [1, 1], target: [1] },
];

export const OR_DATASET: TrainingSample[] = [
    { input: [0, 0], target: [0] },
    { input: [0, 1], target: [1] },
    { input: [1, 0], target: [1] },
    { input: [1, 1], target: [1] },
];

export const NAND_DATASET: TrainingSample[] = [
    { input: [0, 0], target: [1] },
    { input: [0, 1], target: [1] },
    { input: [1, 0], target: [1] },
    { input: [1, 1], target: [0] },
];

export const NOR_DATASET: TrainingSample[] = [
    { input: [0, 0], target: [1] },
    { input: [0, 1], target: [0] },
    { input: [1, 0], target: [0] },
    { input: [1, 1], target: [0] },
];

export const XNOR_DATASET: TrainingSample[] = [
    { input: [0, 0], target: [1] },
    { input: [0, 1], target: [0] },
    { input: [1, 0], target: [0] },
    { input: [1, 1], target: [1] },
];

export const DATASETS: Record<DatasetName, DatasetDefinition> = {

    XOR: {
        name: "XOR",
        description: "Exclusive OR (non-linear)",
        samples: XOR_DATASET,
    },

    AND: {
        name: "AND",
        description: "Logical AND",
        samples: AND_DATASET,
    },

    OR: {
        name: "OR",
        description: "Logical OR",
        samples: OR_DATASET,
    },

    NAND: {
        name: "NAND",
        description: "Logical NAND",
        samples: NAND_DATASET,
    },

    NOR: {
        name: "NOR",
        description: "Logical NOR",
        samples: NOR_DATASET,
    },

    XNOR: {
        name: "XNOR",
        description: "Logical XNOR",
        samples: XNOR_DATASET,
    },

};

export const DATASET_NAMES = Object.keys(DATASETS) as DatasetName[];