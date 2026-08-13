import { useState } from "react";

import { XOR_PRESET } from "../data/presets";

import {
    DATASETS,
    type DatasetName,
} from "../data/datasets";

import { createLayer } from "../engine/network";
import { forwardPass } from "../engine/forwardPass";
import { trainNetwork } from "../engine/training";


export default function useNetwork() {

    const [network, setNetwork] =
        useState(XOR_PRESET);

    const [loss, setLoss] =
        useState<number | null>(null);

    const [lossHistory, setLossHistory] =
        useState<number[]>([]);

    const [currentEpoch, setCurrentEpoch] =
        useState(0);

    const [learningRate, setLearningRate] =
        useState(0.1);

    const [epochs, setEpochs] =
        useState(1000);

    const [datasetName, setDatasetName] =
        useState<DatasetName>("XOR");

    const [isTraining, setIsTraining] =
        useState(false);

    const [isPaused, setIsPaused] =
        useState(false);


    // ==================================================
    // ADD HIDDEN LAYER
    // ==================================================

    function resetTrainingState() {
        setLoss(null);
        setLossHistory([]);
        setCurrentEpoch(0);
    }

    function addHiddenLayer() {

        const layers = structuredClone(network.layers);

        const outputIndex = layers.length - 1;

        const previousLayer =
            layers[outputIndex - 1];

        const newLayer = createLayer(
            "Hidden",
            "tanh",
            3
        );

        // Connect previous layer → new hidden layer
        newLayer.neurons.forEach(neuron => {

            neuron.weights =
                previousLayer.neurons.map(
                    () => Math.random() * 0.2 - 0.1
                );

        });

        // Connect new hidden layer → output layer
        const outputLayer =
            layers[outputIndex];

        outputLayer.neurons.forEach(neuron => {

            neuron.weights =
                newLayer.neurons.map(
                    () => Math.random() * 0.2 - 0.1
                );

        });

        layers.splice(
            outputIndex,
            0,
            newLayer
        );

        setNetwork({
            ...network,
            layers,
        });

        resetTrainingState();
    }


    // ==================================================
    // ADD NEURON
    // ==================================================

    function addNeuron(layerId: string) {

        const layers = structuredClone(network.layers);

        const layerIndex = layers.findIndex(
            layer => layer.id === layerId
        );

        if (layerIndex === -1) return;

        const layer = layers[layerIndex];

        // Add new neuron
        layer.neurons.push({
            id: crypto.randomUUID(),
            value: 0,
            bias: 0,
            active: false,
            weights:
                layerIndex === 0
                    ? []
                    : layers[layerIndex - 1].neurons.map(
                        () => Math.random() * 0.2 - 0.1
                    ),
        });

        // Repair weights in the next layer
        const nextLayer = layers[layerIndex + 1];

        if (nextLayer) {

            nextLayer.neurons.forEach(neuron => {

                neuron.weights.push(
                    Math.random() * 0.2 - 0.1
                );

            });

        }

        setNetwork({
            ...network,
            layers,
        });

        resetTrainingState();
        
    }


    // ==================================================
    // REMOVE HIDDEN LAYER
    // ==================================================

    function removeLayer(layerId: string) {

        const layers = structuredClone(network.layers);

        const layerIndex = layers.findIndex(
            layer => layer.id === layerId
        );

        if (layerIndex <= 0 || layerIndex >= layers.length - 1) {
            return;
        }

        // Remove selected hidden layer
        layers.splice(layerIndex, 1);

        // Reconnect the new adjacent layers
        const previousLayer =
            layers[layerIndex - 1];

        const nextLayer =
            layers[layerIndex];

        nextLayer.neurons.forEach(neuron => {

            neuron.weights =
                previousLayer.neurons.map(
                    () => Math.random() * 0.2 - 0.1
                );

        });

        setNetwork({
            ...network,
            layers,
        });

        resetTrainingState();
    }


    // ==================================================
    // FORWARD PASS
    // ==================================================

    async function runForwardPass() {

        await forwardPass(

            network.layers,

            (layers) => {

                setNetwork({
                    ...network,
                    layers,
                });

            },

        );
    }


    // ==================================================
    // TRAIN NETWORK
    // ==================================================

    async function startTraining() {

        // Prevent two training processes
        // from running simultaneously.
        if (isTraining) {
            return;
        }


        setIsTraining(true);

        setIsPaused(false);

        setLoss(null);

        setLossHistory([]);

        setCurrentEpoch(0);


        try {

            await trainNetwork(

                network.layers,

                DATASETS[
                    datasetName
                ].samples,

                epochs,

                learningRate,


                // Network update
                (updatedLayers) => {

                    setNetwork(
                        previous => ({
                            ...previous,
                            layers: updatedLayers,
                        }),
                    );

                },


                // Loss update
                (value) => {

                    setLoss(value);

                    setLossHistory(
                        history => [
                            ...history,
                            value,
                        ],
                    );

                },


                // Epoch update
                (epoch: number) => {

                    setCurrentEpoch(
                        epoch,
                    );

                },

            );

        } catch (error) {

            console.error(
                "Training failed:",
                error,
            );

        } finally {

            setIsTraining(false);

        }
    }


    // ==================================================
    // RETURN
    // ==================================================

    return {

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

        isTraining,

        isPaused,

        setIsPaused,

    };
}