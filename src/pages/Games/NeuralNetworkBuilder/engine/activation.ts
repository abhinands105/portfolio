export function relu(x: number): number {
  return Math.max(0, x);
}

export function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

export function tanh(x: number): number {
  return Math.tanh(x);
}

export function linear(x: number): number {
  return x;
}

export function activate(
  value: number,
  activation: string
): number {

  switch (activation) {

    case "relu":
      return relu(value);

    case "sigmoid":
      return sigmoid(value);

    case "tanh":
      return tanh(value);

    default:
      return linear(value);

  }

}