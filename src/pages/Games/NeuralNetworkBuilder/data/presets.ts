import type {
    NeuralNetwork,
} from "../types/Network";


function randomWeight(
    scale = 0.5,
): number {

    return (
        Math.random() * 2 - 1
    ) * scale;
}


export const XOR_PRESET:
    NeuralNetwork = {

    layers: [

        // ----------------------------------------
        // INPUT
        // ----------------------------------------

        {

            id: "input",

            name: "Input",

            activation: "linear",

            neurons: [

                {

                    id: "i1",

                    value: 0,

                    bias: 0,

                    active: false,

                    weights: [],
                },

                {

                    id: "i2",

                    value: 0,

                    bias: 0,

                    active: false,

                    weights: [],
                },

            ],
        },


        // ----------------------------------------
        // HIDDEN
        // ----------------------------------------

        {

            id: "hidden",

            name: "Hidden",

            activation: "tanh",

            neurons: [

                {

                    id: "h1",

                    value: 0,

                    bias: randomWeight(0.2),

                    active: false,

                    weights: [

                        randomWeight(0.5),

                        randomWeight(0.5),

                    ],
                },

                {

                    id: "h2",

                    value: 0,

                    bias: randomWeight(0.2),

                    active: false,

                    weights: [

                        randomWeight(0.5),

                        randomWeight(0.5),

                    ],
                },

                {

                    id: "h3",

                    value: 0,

                    bias: randomWeight(0.2),

                    active: false,

                    weights: [

                        randomWeight(0.5),

                        randomWeight(0.5),

                    ],
                },

            ],
        },


        // ----------------------------------------
        // OUTPUT
        // ----------------------------------------

        {

            id: "output",

            name: "Output",

            activation: "sigmoid",

            neurons: [

                {

                    id: "o1",

                    value: 0,

                    bias: 0,

                    active: false,

                    weights: [

                        randomWeight(0.5),

                        randomWeight(0.5),

                        randomWeight(0.5),

                    ],
                },

            ],
        },

    ],
};