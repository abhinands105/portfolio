import type { Neuron } from "../types/Network";

interface Props {

  neuron: Neuron | null;

}

export default function Properties({

  neuron,

}: Props) {

  if (!neuron)

    return (

      <div className="layer-card">

        <h3>Select a neuron</h3>

      </div>

    );

  return (

    <div className="layer-card">

      <h2>{neuron.id}</h2>

      <p>

        <strong>Output:</strong>{" "}

        {neuron.value.toFixed(3)}

      </p>

      <p>

        <strong>Bias:</strong>{" "}

        {neuron.bias.toFixed(3)}

      </p>

      <h3>Weights</h3>

      <ul>

        {neuron.weights.map((w, i) => (

          <li key={i}>

            W{i + 1}: {w.toFixed(3)}

          </li>

        ))}

      </ul>

    </div>

  );

}