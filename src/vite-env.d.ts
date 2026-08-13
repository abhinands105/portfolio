/// <reference types="vite/client" />

declare module "*.vert?raw" {
  const shader: string;
  export default shader;
}

declare module "*.frag?raw" {
  const shader: string;
  export default shader;
}