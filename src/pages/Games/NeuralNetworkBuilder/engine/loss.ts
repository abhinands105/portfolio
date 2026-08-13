export function mse(
    prediction: number,
    target: number,
): number {

    return (
        0.5 *
        Math.pow(
            prediction - target,
            2,
        )
    );
}


export function binaryCrossEntropy(
    prediction: number,
    target: number,
): number {

    const p =
        Math.min(
            Math.max(
                prediction,
                1e-7,
            ),
            1 - 1e-7,
        );

    return -(
        target * Math.log(p) +
        (1 - target) *
        Math.log(1 - p)
    );
}