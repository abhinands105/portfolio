import * as THREE from "three";

export interface ParticleData {
  positions: Float32Array;
  original: Float32Array;
  velocities: Float32Array;
  colors: Float32Array;
}

export function generateParticles(imageData: ImageData): ParticleData {
  const pixels = imageData.data;

  const width = imageData.width;
  const height = imageData.height;

  const positions: number[] = [];
  const original: number[] = [];
  const velocities: number[] = [];
  const colors: number[] = [];

  const STEP = 1;
  const SCALE = 190;

  for (let y = 0; y < height; y += STEP) {
    for (let x = 0; x < width; x += STEP) {
      const index = (y * width + x) * 4;

      const r = pixels[index];
      const g = pixels[index + 1];
      const b = pixels[index + 2];
      const a = pixels[index + 3];
 
      if (a < 20) continue;

      const brightness = (r + g + b) / 3;

      if (a < 35) continue;

      if (brightness < 20) continue;

      const px = (x - width / 2) / SCALE;
      const py = -(y - height / 2) / SCALE;
      const pz =
        (Math.random() - 0.5) * 0.05;

      positions.push(px, py, pz);
      original.push(px, py, pz);

      velocities.push(0, 0, 0);

      // Use the actual image color
      const color = new THREE.Color(
        r / 255,
        g / 255,
        b / 255
      );

      colors.push(
        color.r,
        color.g,
        color.b
      );
    }
  }

  return {
    positions: new Float32Array(positions),
    original: new Float32Array(original),
    velocities: new Float32Array(velocities),
    colors: new Float32Array(colors),
  };
} 