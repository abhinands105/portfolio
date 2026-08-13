import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HologramRing() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ring.current) return;

    ring.current.rotation.z = clock.elapsedTime * 0.08;

    const material = ring.current.material as THREE.MeshBasicMaterial;

    material.opacity =
      0.18 +
      Math.sin(clock.elapsedTime * 2) * 0.05;
  });

  return (
    <mesh ref={ring} position={[0, 0, -0.3]}>
      <ringGeometry args={[2.0, 2.08, 128]} />

      <meshBasicMaterial
        color="#8a2eff"
        transparent
        opacity={0.18}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}