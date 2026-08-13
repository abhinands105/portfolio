import { activate } from "./activation";
import type { Layer } from "../types/Network";

export function inference(
    layers: Layer[],
    inputs: number[]
) {
    const network = structuredClone(layers);

    // Set input values
    network[0].neurons.forEach((neuron, i) => {
        neuron.value = inputs[i] ?? 0;
    });

    // Forward pass
    for (let l = 1; l < network.length; l++) {

        const previous = network[l - 1];
        const current = network[l];

        current.neurons.forEach(neuron => {

            let sum = neuron.bias;

            previous.neurons.forEach((prev, i) => {

                sum += prev.value * (neuron.weights[i] ?? 0);

            });

            neuron.value = activate(
                sum,
                current.activation
            );

        });

    }

    const outputs =
        network[network.length - 1].neurons.map(
            n => n.value
        );

    return {

        network,

        outputs,

    };

}