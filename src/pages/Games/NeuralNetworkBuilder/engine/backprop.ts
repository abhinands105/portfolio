import type { Layer } from "../types/Network";

function activationDerivative(
    value: number,
    activation: Layer["activation"],
): number {

    switch (activation) {

        case "sigmoid":
            return value * (1 - value);

        case "tanh":
            return 1 - value * value;

        case "relu":
            return value > 0 ? 1 : 0;

        case "linear":
        default:
            return 1;
    }
}


/*
 * Output delta for:
 *
 * Sigmoid + Binary Cross Entropy
 *
 * delta = target - prediction
 *
 * The sign is intentional because the weight update
 * below uses:
 *
 * weight += learningRate * delta * input
 */
export function calculateOutputDeltas(
    outputLayer: Layer,
    target: number,
): number[] {

    return outputLayer.neurons.map(
        neuron => {

            const prediction =
                Math.min(
                    Math.max(
                        neuron.value,
                        1e-7,
                    ),
                    1 - 1e-7,
                );

            return target - prediction;
        },
    );
}


/*
 * Calculate hidden-layer deltas BEFORE changing
 * any weights in the next layer.
 */
export function calculateHiddenDeltas(
    hiddenLayer: Layer,
    nextLayer: Layer,
    nextDeltas: number[],
): number[] {

    return hiddenLayer.neurons.map(
        (hiddenNeuron, hiddenIndex) => {

            let error = 0;

            nextLayer.neurons.forEach(
                (nextNeuron, nextIndex) => {

                    const weight =
                        nextNeuron.weights[
                            hiddenIndex
                        ] ?? 0;

                    error +=
                        weight *
                        nextDeltas[nextIndex];
                },
            );

            const derivative =
                activationDerivative(
                    hiddenNeuron.value,
                    hiddenLayer.activation,
                );

            return error * derivative;
        },
    );
}


/*
 * Apply calculated deltas to a layer.
 */
export function applyLayerDeltas(
    previousLayer: Layer,
    currentLayer: Layer,
    deltas: number[],
    learningRate: number,
): void {

    currentLayer.neurons.forEach(
        (neuron, neuronIndex) => {

            const delta =
                deltas[neuronIndex] ?? 0;

            previousLayer.neurons.forEach(
                (previousNeuron, weightIndex) => {

                    const input =
                        previousNeuron.value;

                    const oldWeight =
                        neuron.weights[
                            weightIndex
                        ] ?? 0;

                    neuron.weights[weightIndex] =
                        oldWeight +
                        learningRate *
                        delta *
                        input;
                },
            );

            neuron.bias +=
                learningRate * delta;
        },
    );
}