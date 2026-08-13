import { activate } from "./activation";
import type { Layer } from "../types/Network";

export async function forwardPass(

    layers: Layer[],

    update: (layers: Layer[]) => void

) {

    // Deep copy so React detects changes
    const network = structuredClone(layers);

    // Input layer
    network[0].neurons.forEach(neuron => {

        neuron.active = true;

        neuron.value = Number(Math.random().toFixed(2));

    });

    update(network);

    await new Promise(resolve => setTimeout(resolve, 600));

    // Hidden + Output layers
    for (let l = 1; l < network.length; l++) {

        const previous = network[l - 1];

        const current = network[l];

        current.neurons.forEach(neuron => {

            // Initialize weights once
            if (neuron.weights.length !== previous.neurons.length) {

                neuron.weights = previous.neurons.map(
                    () => Math.random() * 0.2 - 0.1
                );

            }

            let sum = neuron.bias;

            previous.neurons.forEach((prev, i) => {

                sum += prev.value * neuron.weights[i];

            });

            neuron.value = Number(

                activate(sum, current.activation).toFixed(3)

            );

            neuron.active = true;

        });

        update(structuredClone(network));

        await new Promise(resolve => setTimeout(resolve, 700));

    }

}