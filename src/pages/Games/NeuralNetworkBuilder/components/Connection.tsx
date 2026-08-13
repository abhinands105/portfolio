interface Props {

    x1: number;

    y1: number;

    x2: number;

    y2: number;

    weight: number;

}

export default function Connection({

    x1,
    y1,
    x2,
    y2,
    weight,

}: Props) {

    const midX = (x1 + x2) / 2;

    const midY = (y1 + y2) / 2;

    return (

        <g>

            <line

                x1={x1}

                y1={y1}

                x2={x2}

                y2={y2}

                stroke="red"
                strokeWidth={3}

            >

                <animate

                    attributeName="stroke-opacity"

                    values="0.3;1;0.3"

                    dur="2s"

                    repeatCount="indefinite"

                />

            </line>

            <text
                x={midX}
                y={midY - 6}
                fill="#d7b5ff"
                fontSize="10"
                fontWeight="600"
                textAnchor="middle"
            >
                W:{weight.toFixed(2)}
            </text>

        </g>

    );

}