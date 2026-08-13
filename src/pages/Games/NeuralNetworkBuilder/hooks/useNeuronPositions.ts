import {
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { getNeuronCenter } from "../utils/getNeuronCenter";

export interface NeuronPosition {
    id: string;
    x: number;
    y: number;
}

export default function useNeuronPositions() {

    const [positions, setPositions] = useState<NeuronPosition[]>([]);

    

    const elements = useRef(
        new Map<string, HTMLElement>()
    );

    

    const updatePositions = useCallback(() => {

        const container = document.querySelector(
            ".network-left"
        ) as HTMLElement | null;

        if (!container) return;

        const list: NeuronPosition[] = [];

        elements.current.forEach((element, id) => {

            const point = getNeuronCenter(
                element,
                container
            );

            list.push({
                id,
                x: point.x,
                y: point.y,
            });

        });

        setPositions(list);

    }, []);

    const registerNeuron = useCallback(
        (id: string, element: HTMLElement | null) => {

            if (element) {

                elements.current.set(id, element);

                requestAnimationFrame(updatePositions);

            } else {

                elements.current.delete(id);

            }

        },
        [updatePositions]
    );

    useLayoutEffect(() => {

        requestAnimationFrame(updatePositions);

        window.addEventListener(
            "resize",
            updatePositions
        );

        return () =>
            window.removeEventListener(
                "resize",
                updatePositions
            );

    }, [updatePositions]);

    return {

        positions,

        registerNeuron,

        refreshPositions: updatePositions,

    };

}