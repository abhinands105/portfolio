import { inference } from "../engine/inference";
import type { NeuralNetwork } from "../types/Network";
import type { TrainingSample } from "../data/datasets";

interface Props {

    network: NeuralNetwork;

    dataset: TrainingSample[];

}

export default function PredictionTable({

    network,

    dataset,

}: Props) {

    return (

        <div className="layer-card">

            <h2>Predictions</h2>

            <table className="prediction-table">

                <thead>

                    <tr>

                        <th>Input</th>

                        <th>Target</th>

                        <th>Prediction</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        dataset.map((sample, index) => {

                            const result = inference(

                                network.layers,

                                sample.input,

                            );

                            const prediction = result.outputs[0];

                            const correct =

                                Math.round(prediction) === sample.target[0];

                            return (

                                <tr key={index}>

                                    <td>

                                        ({sample.input.join(", ")})

                                    </td>

                                    <td>

                                        {sample.target[0]}

                                    </td>

                                    <td>

                                        {prediction.toFixed(3)}

                                    </td>

                                    <td>

                                        {correct ? "✅" : "❌"}

                                    </td>

                                </tr>

                            );

                        })

                    }

                </tbody>

            </table>

        </div>

    );

}