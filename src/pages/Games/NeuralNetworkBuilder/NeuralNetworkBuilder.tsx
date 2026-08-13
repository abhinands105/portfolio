import "./NeuralNetworkBuilder.css";

import Canvas from "./components/Canvas";
import useNetwork from "./hooks/useNetwork";

import HowToUseCard from "./components/HowToUseCard";

export default function NeuralNetworkBuilder() {
  const {
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
    addHiddenLayer,
    addNeuron,
    removeLayer,
    runForwardPass,
  } = useNetwork();

  return (
    <div className="network-builder">

      <div className="builder-header">

          <div>
              <h1>Neural Network Builder</h1>

              <div className="toolbar">

                  <button
                      className="primary-btn"
                      onClick={addHiddenLayer}
                  >
                      + Hidden Layer
                  </button>

                  <button
                      className="primary-btn"
                      onClick={runForwardPass}
                  >
                      ▶ Run Forward Pass
                  </button>

              </div>
          </div>

          <HowToUseCard />

      </div>

      <Canvas
        network={network}
        loss={loss}
        lossHistory={lossHistory}
        currentEpoch={currentEpoch}
        learningRate={learningRate}
        epochs={epochs}
        datasetName={datasetName}
        setDatasetName={setDatasetName}
        setLearningRate={setLearningRate}
        setEpochs={setEpochs}
        startTraining={startTraining}
        addNeuron={addNeuron}
        removeLayer={removeLayer}
      />

    </div>
  );
}