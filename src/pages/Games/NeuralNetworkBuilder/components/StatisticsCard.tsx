import type { NeuralNetwork } from "../types/Network";

interface Props {
  network: NeuralNetwork;
  loss: number | null;
  currentEpoch: number;
}

export default function StatisticsCard({
  network,
  loss,
  currentEpoch,
}: Props) {

  const totalLayers = network.layers.length;

  const totalNeurons = network.layers.reduce(
    (sum, layer) => sum + layer.neurons.length,
    0
  );

  let totalConnections = 0;

  for (let i = 0; i < network.layers.length - 1; i++) {
    totalConnections +=
      network.layers[i].neurons.length *
      network.layers[i + 1].neurons.length;
  }

  const totalBiases =
    totalNeurons - network.layers[0].neurons.length;

  const totalParameters =
    totalConnections + totalBiases;

  return (
    <div className="layer-card">

      <h2>Statistics</h2>

      <table className="prediction-table">
        <tbody>

          <tr>
            <td>Current Loss</td>
            <td>{loss === null ? "—" : loss.toFixed(4)}</td>
          </tr>

          <tr>
            <td>Epoch</td>
            <td>{currentEpoch}</td>
          </tr>

          <tr>
            <td>Layers</td>
            <td>{totalLayers}</td>
          </tr>

          <tr>
            <td>Neurons</td>
            <td>{totalNeurons}</td>
          </tr>

          <tr>
            <td>Connections</td>
            <td>{totalConnections}</td>
          </tr>

          <tr>
            <td>Parameters</td>
            <td>{totalParameters}</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}