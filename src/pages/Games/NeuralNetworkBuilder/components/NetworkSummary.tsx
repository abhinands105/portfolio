import type { NeuralNetwork } from "../types/Network";

interface Props {
    network: NeuralNetwork;
    dataset: string;
    loss: number | null;
    currentEpoch: number;
}

export default function NetworkSummary({
    network,
    dataset,
    loss,
    currentEpoch,
}: Props) {

    const totalLayers = network.layers.length;

    const totalNeurons = network.layers.reduce(
        (sum, layer) => sum + layer.neurons.length,
        0
    );

    const totalConnections = network.layers
        .slice(1)
        .reduce((sum, layer) => {
            return (
                sum +
                layer.neurons.reduce(
                    (s, neuron) => s + neuron.weights.length,
                    0
                )
            );
        }, 0);

    const totalParameters = network.layers
        .slice(1)
        .reduce((sum, layer) => {
            return (
                sum +
                layer.neurons.reduce(
                    (s, neuron) =>
                        s +
                        neuron.weights.length +
                        1, // bias
                    0
                )
            );
        }, 0);

    return (
        <div className="layer-card network-summary">

            <div className="summary-item">
                <span>Layers</span>
                <strong>{totalLayers}</strong>
            </div>

            <div className="summary-item">
                <span>Neurons</span>
                <strong>{totalNeurons}</strong>
            </div>

            <div className="summary-item">
                <span>Connections</span>
                <strong>{totalConnections}</strong>
            </div>

            <div className="summary-item">
                <span>Parameters</span>
                <strong>{totalParameters}</strong>
            </div>

            <div className="summary-item">
                <span>Dataset</span>
                <strong>{dataset}</strong>
            </div>

            <div className="summary-item">
                <span>Epoch</span>
                <strong>{currentEpoch}</strong>
            </div>

            <div className="summary-item">
                <span>Loss</span>
                <strong>{loss === null ? "—" : loss.toFixed(4)}</strong>
            </div>

        </div>
    );
}