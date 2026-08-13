import type { DatasetName } from "../data/datasets";

interface Props {
  dataset: DatasetName;
  learningRate: number;
  epochs: number;
}

export default function ConfigurationCard({
  dataset,
  learningRate,
  epochs,
}: Props) {

  return (

    <div className="layer-card">

      <h2>Configuration</h2>

      <table className="prediction-table">

        <tbody>

          <tr>
            <td>Dataset</td>
            <td>{dataset}</td>
          </tr>

          <tr>
            <td>Learning Rate</td>
            <td>{learningRate.toFixed(2)}</td>
          </tr>

          <tr>
            <td>Epochs</td>
            <td>{epochs}</td>
          </tr>

          <tr>
            <td>Loss</td>
            <td>Binary Cross Entropy</td>
          </tr>

          <tr>
            <td>Optimizer</td>
            <td>Gradient Descent</td>
          </tr>

          <tr>
            <td>Activation</td>
            <td>Mixed</td>
          </tr>

        </tbody>

      </table>

    </div>

  );

}