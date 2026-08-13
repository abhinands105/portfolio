import {
    useState,
    useLayoutEffect,
} from "react";

import useNeuronPositions from "../hooks/useNeuronPositions";

import PredictionTable from "./PredictionTable";
import LossChart from "./LossChart";
import LayerCard from "./LayerCard";
import Connection from "./Connection";
import Properties from "./Properties";
import Controls from "./Controls";
import LossGraph from "./LossGraph";
import DatasetSelector from "./DatasetSelector";
import DecisionBoundary from "./DecisionBoundary";

import NetworkInfo from "./NetworkInfo";
import ConfigurationCard from "./ConfigurationCard";
import StatisticsCard from "./StatisticsCard";
import NetworkSummary from "./NetworkSummary";

import {
  DATASETS,
  type DatasetName,
} from "../data/datasets";

import type {
  NeuralNetwork,
  Neuron,
} from "../types/Network";

interface Props {
  network: NeuralNetwork;
  loss: number | null;
  lossHistory: number[];
  learningRate: number;
  epochs: number;
  currentEpoch: number;
  datasetName: DatasetName;
  setDatasetName: (dataset: DatasetName) => void;
  setLearningRate: (value: number) => void;
  setEpochs: (value: number) => void;
  startTraining: () => void;
  addNeuron: (id: string) => void;
  removeLayer: (id: string) => void;
}

export default function Canvas({
  network,
  loss,
  lossHistory,
  currentEpoch,
  learningRate,
  epochs,
  datasetName,
  setDatasetName,
  setLearningRate,
  setEpochs,
  startTraining,
  addNeuron,
  removeLayer,
}: Props) {

  const [selectedNeuron, setSelectedNeuron] =
    useState<Neuron | null>(null);

  const {
      positions,
      registerNeuron,
      refreshPositions,
  } = useNeuronPositions();




  useLayoutEffect(() => {
      const frame = requestAnimationFrame(() => {
          refreshPositions();
      });

      return () => {
          cancelAnimationFrame(frame);
      };
  }, [network, refreshPositions]);

  

  return (

    <div className="canvas-wrapper">

      <NetworkSummary
          network={network}
          dataset={datasetName}
          loss={loss}
          currentEpoch={currentEpoch}
      />

      <div className="network-top">

        <div className="network-scroll">
          <div className="network-left">

          <svg
              className="connections"
              width="100%"
              height="100%"
          >

              {network.layers.map((layer, layerIndex) => {

                  if (layerIndex === network.layers.length - 1)
                      return null;

                  const nextLayer =
                      network.layers[layerIndex + 1];

                  return layer.neurons.flatMap((sourceNeuron, sourceIndex) =>

                      nextLayer.neurons.map((targetNeuron) => {

                          const from = positions.find(
                              p => p.id === sourceNeuron.id
                          );

                          const to = positions.find(
                              p => p.id === targetNeuron.id
                          );

                          if (!from || !to) {
                              return null;
                          }

                          return (
                              <Connection
                                  key={`${sourceNeuron.id}-${targetNeuron.id}`}
                                  x1={from.x}
                                  y1={from.y}
                                  x2={to.x}
                                  y2={to.y}
                                  weight={targetNeuron.weights[sourceIndex] ?? 0}
                              />
                          );

                      })

                  );

              })}

          </svg>

          {network.layers.map(layer => (

            <LayerCard
                key={layer.id}
                layer={layer}
                onAddNeuron={() => addNeuron(layer.id)}
                onDelete={() => removeLayer(layer.id)}
                onSelectNeuron={setSelectedNeuron}
                registerNeuron={registerNeuron}
            />

          ))}

        </div>
        </div>

        <div className="network-right">

          <Properties
            neuron={selectedNeuron}
          />

          <NetworkInfo
            network={network}
          />

        </div>

      </div>

      <div className="dashboard-grid">

        <LossChart
            loss={loss}
            history={lossHistory}
        />

        <LossGraph
          history={lossHistory}
        />

        <PredictionTable
          network={network}
          dataset={DATASETS[datasetName].samples}
        />

        <DecisionBoundary
          network={network}
          dataset={DATASETS[datasetName].samples}
        />

        <ConfigurationCard
            dataset={datasetName}
            learningRate={learningRate}
            epochs={epochs}
        />

        <StatisticsCard
            network={network}
            loss={loss}
            currentEpoch={currentEpoch}
        />

        <DatasetSelector
          dataset={datasetName}
          onChange={setDatasetName}
        />

        <div className="layer-card">
          <h2>Training Progress</h2>
          <p>Epoch: {currentEpoch}</p>
        </div>

        <Controls
          learningRate={learningRate}
          epochs={epochs}
          onLearningRateChange={setLearningRate}
          onEpochChange={setEpochs}
          onTrain={startTraining}
        />

      </div>

    </div>

  );
}