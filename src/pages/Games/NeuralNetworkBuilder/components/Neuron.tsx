import { forwardRef } from "react";

interface Props {
    value: number;
    active: boolean;
    onClick: () => void;
}

const Neuron = forwardRef<HTMLDivElement, Props>(
    ({ value, active, onClick }, ref) => {

        return (
            <div
                ref={ref}
                className={
                    active
                        ? "neuron active"
                        : "neuron"
                }
                onClick={onClick}
            >
                {value.toFixed(2)}
            </div>
        );

    }
);

Neuron.displayName = "Neuron";

export default Neuron;