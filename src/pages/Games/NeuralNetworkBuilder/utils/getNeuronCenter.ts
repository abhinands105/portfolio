export interface Point {
    x: number;
    y: number;
}

export function getNeuronCenter(
    element: HTMLElement,
    container: HTMLElement
): Point {

    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
    };

}