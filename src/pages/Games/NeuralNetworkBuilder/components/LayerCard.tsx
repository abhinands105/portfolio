import type { Layer, Neuron as NeuronType } from "../types/Network";

import Neuron from "./Neuron";

interface Props {

  layer: Layer;

  onAddNeuron: () => void;

  onDelete: () => void;

  onSelectNeuron: (neuron: NeuronType) => void;

  registerNeuron: (
      id: string,
      element: HTMLDivElement | null
  ) => void;

}

export default function LayerCard({

  layer,

  onAddNeuron,

  onDelete,

  onSelectNeuron,

  registerNeuron,

}: Props){

  return (

    <div className="layer-card layer-node">

      <div className="layer-header">
          <h3>{layer.name}</h3>

          <span className="layer-count">
              {layer.neurons.length} neurons
          </span>

          <small>{layer.activation}</small>
      </div>

      <div className="neurons">

        {

          layer.neurons.map((neuron) => (

            <Neuron

                key={neuron.id}

                ref={(el) => registerNeuron(neuron.id, el)}

                value={neuron.value}

                active={neuron.active}

                onClick={() => onSelectNeuron(neuron)}

            />

          ))

        }

      </div>

      <button onClick={onAddNeuron}>

        + Neuron

      </button>

      {

        layer.name !== "Input" &&

        layer.name !== "Output" && (

          <button onClick={onDelete}>

            Delete

          </button>

        )

      }

    </div>

  );

}