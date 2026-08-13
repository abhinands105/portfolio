import { inference } from "../engine/inference";
import type { NeuralNetwork } from "../types/Network";
import type { TrainingSample } from "../data/datasets";

interface Props {

    network: NeuralNetwork;

    dataset: TrainingSample[];

}

export default function DecisionBoundary({

    network,

    dataset,

}: Props) {

    const size = 200;

    const cells = [];

    for (let y = 0; y < 20; y++) {

        for (let x = 0; x < 20; x++) {

            const input = [

                x / 19,

                y / 19,

            ];

            const result = inference(

                network.layers,

                input,

            );

            cells.push({

                x,

                y,

                value: result.outputs[0],

            });

        }

    }

    return (

        <div className="layer-card">

            <h2>Decision Boundary</h2>

            <svg
                width={size}
                height={size}
            >

                {

                    cells.map(cell => (

                        <rect

                            key={`${cell.x}-${cell.y}`}

                            x={cell.x * 10}

                            y={cell.y * 10}

                            width={10}

                            height={10}

                            fill={`rgb(${255 * cell.value},0,${255 * (1 - cell.value)})`}

                        />

                    ))

                }

                {

                    dataset.map((sample, index) => (

                        <circle

                            key={index}

                            cx={sample.input[0] * size}

                            cy={sample.input[1] * size}

                            r={6}

                            fill={

                                sample.target[0]

                                    ? "red"

                                    : "blue"

                            }

                            stroke="white"

                            strokeWidth={2}

                        />

                    ))

                }

            </svg>

        </div>

    );

}