interface Props {
    loss: number | null;
    history: number[];
}

export default function LossChart({

    loss,

}: Props) {

    return (

        <div className="layer-card">

            <h2>Loss</h2>

            <h1>

                {loss === null ? "—" : loss.toFixed(4)}

            </h1>

        </div>

    );

}