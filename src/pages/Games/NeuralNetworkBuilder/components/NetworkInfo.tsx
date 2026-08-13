import type { NeuralNetwork } from "../types/Network";

interface Props {
  network: NeuralNetwork;
}

export default function NetworkInfo({ network }: Props) {
  const inputLayer = network.layers[0];
  const outputLayer = network.layers[network.layers.length - 1];

  const hiddenLayers = network.layers.slice(1, -1);

  const totalLayers = network.layers.length;

  const totalNeurons = network.layers.reduce(
    (sum, layer) => sum + layer.neurons.length,
    0
  );

  let connections = 0;

  for (let i = 0; i < network.layers.length - 1; i++) {
    connections +=
      network.layers[i].neurons.length *
      network.layers[i + 1].neurons.length;
  }

  const totalBiases =
    totalNeurons - inputLayer.neurons.length;

  const parameters =
    connections + totalBiases;

  return (
    <div className="layer-card">

      <h2>Network Info</h2>

      <table className="prediction-table">
        <tbody>

          <tr>
            <td>Layers</td>
            <td>{totalLayers}</td>
          </tr>

          <tr>
            <td>Input</td>
            <td>{inputLayer.neurons.length}</td>
          </tr>

          <tr>
            <td>Hidden</td>
            <td>
              {hiddenLayers.map(layer => layer.neurons.length).join(" / ") || "0"}
            </td>
          </tr>

          <tr>
            <td>Output</td>
            <td>{outputLayer.neurons.length}</td>
          </tr>

          <tr>
            <td>Total Neurons</td>
            <td>{totalNeurons}</td>
          </tr>

          <tr>
            <td>Connections</td>
            <td>{connections}</td>
          </tr>

          <tr>
            <td>Parameters</td>
            <td>{parameters}</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}