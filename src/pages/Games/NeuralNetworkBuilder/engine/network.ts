import type { Layer } from "../types/Network";

export function createNeuron(id: string) {

    return {

        id,

        value: 0,

        bias: 0,

        active: false,

        weights: [],

    };

}

export function createLayer(
    name: string,
    activation: Layer["activation"],
    neuronCount: number
): Layer {

    return {

        id: crypto.randomUUID(),

        name,

        activation,

        neurons: Array.from(
            { length: neuronCount },
            (_, i) => createNeuron(`${name}-${i}`)
        ),

    };

}