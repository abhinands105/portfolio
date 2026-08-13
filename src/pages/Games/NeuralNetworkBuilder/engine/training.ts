import type { TrainingSample } from "../data/datasets";
import type { Layer } from "../types/Network";

import { inference } from "./inference";
import { binaryCrossEntropy } from "./loss";

import {
    calculateOutputDeltas,
    calculateHiddenDeltas,
    applyLayerDeltas,
} from "./backprop";


export async function trainNetwork(

    layers: Layer[],

    dataset: TrainingSample[],

    epochs: number,

    learningRate: number,

    onUpdate: (layers: Layer[]) => void,

    onLoss: (loss: number) => void,

    onEpoch: (epoch: number) => void,

) {

    const trainingLayers =
        structuredClone(layers);


    for (
        let epoch = 0;
        epoch < epochs;
        epoch++
    ) {

        let totalLoss = 0;


        for (const sample of dataset) {

            // ----------------------------------------
            // FORWARD PASS
            // ----------------------------------------

            const result = inference(
                trainingLayers,
                sample.input,
            );

            const prediction = result.outputs[0];

           


            // ----------------------------------------
            // GET LAYERS
            // ----------------------------------------

            const outputLayer =
                result.network[
                    result.network.length - 1
                ];


            const previousLayer =
                result.network[
                    result.network.length - 2
                ];


            // ----------------------------------------
            // OUTPUT DELTA
            // ----------------------------------------

            const outputDeltas =
                calculateOutputDeltas(
                    outputLayer,
                    sample.target[0],
                );


            // ----------------------------------------
            // HIDDEN DELTAS
            // ----------------------------------------

            const allDeltas =
                new Map<number, number[]>();


            allDeltas.set(
                result.network.length - 1,
                outputDeltas,
            );


            let nextDeltas =
                outputDeltas;


            for (
                let layerIndex =
                    result.network.length - 2;

                layerIndex > 0;

                layerIndex--
            ) {

                const hiddenLayer =
                    result.network[
                        layerIndex
                    ];


                const nextLayer =
                    result.network[
                        layerIndex + 1
                    ];


                const currentDeltas =
                    calculateHiddenDeltas(
                        hiddenLayer,
                        nextLayer,
                        nextDeltas,
                    );


                allDeltas.set(
                    layerIndex,
                    currentDeltas,
                );


                nextDeltas =
                    currentDeltas;
            }


            // ----------------------------------------
            // UPDATE OUTPUT
            // ----------------------------------------

            applyLayerDeltas(
                previousLayer,
                outputLayer,
                outputDeltas,
                learningRate,
            );


            // ----------------------------------------
            // UPDATE HIDDEN LAYERS
            // ----------------------------------------

            for (
                let layerIndex = 1;

                layerIndex <
                    result.network.length - 1;

                layerIndex++
            ) {

                const previous =
                    result.network[
                        layerIndex - 1
                    ];


                const hidden =
                    result.network[
                        layerIndex
                    ];


                const hiddenDeltas =
                    allDeltas.get(
                        layerIndex,
                    );


                if (!hiddenDeltas) {
                    continue;
                }


                applyLayerDeltas(
                    previous,
                    hidden,
                    hiddenDeltas,
                    learningRate,
                );
            }


            // ----------------------------------------
            // SAVE UPDATED NETWORK
            // ----------------------------------------

            trainingLayers.splice(
                0,
                trainingLayers.length,
                ...result.network,
            );

            // ----------------------------------------
            // LOSS
            // ----------------------------------------

            totalLoss += binaryCrossEntropy(
                prediction,
                sample.target[0],
            );


           
        }


        // ----------------------------------------
        // AVERAGE LOSS
        // ----------------------------------------

        const averageLoss =
            totalLoss / dataset.length;


        if (
            !Number.isFinite(
                averageLoss,
            )
        ) {

            console.error(
                "Training produced invalid loss:",
                averageLoss,
            );

            break;
        }


        // ----------------------------------------
        // UI UPDATE
        // ----------------------------------------

        onEpoch(
            epoch + 1,
        );


        onLoss(
            averageLoss,
        );


        onUpdate(
            structuredClone(
                trainingLayers,
            ),
        );


        await new Promise(
            resolve =>
                setTimeout(
                    resolve,
                    50,
                ),
        );


        console.log(
            `Epoch ${epoch + 1}`,
            "Loss:",
            averageLoss,
        );
    }
}