interface Props {

    history: number[];

}

export default function LossGraph({

    history,

}: Props) {

    if (history.length < 2)

        return null;

    const max = Math.max(...history);

    const min = Math.min(...history);

    const points = history

        .map((loss, i) => {

            const x =

                (i * 300) /

                (history.length - 1);

            const y =

                100 -

                ((loss - min) /

                    (max - min || 1)) *

                    100;

            return `${x},${y}`;

        })

        .join(" ");

    return (

        <div className="layer-card">

            <h2>Loss History</h2>

            <svg

                width="300"

                height="100"

            >

                <polyline

                    fill="none"

                    stroke="cyan"

                    strokeWidth="2"

                    points={points}

                />

            </svg>

        </div>

    );

}