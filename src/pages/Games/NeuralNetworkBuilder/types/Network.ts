export type Activation =
  | "relu"
  | "sigmoid"
  | "tanh"
  | "softmax"
  | "linear";

export interface Neuron {

  id: string;

  value: number;

  bias: number;

  active: boolean;

  weights: number[];

}

export interface Layer {

  id: string;

  name: string;

  activation: Activation;

  neurons: Neuron[];

}

export interface NeuralNetwork {

  layers: Layer[];

}