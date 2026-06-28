import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ScanLines() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    mesh.current.position.y =
      Math.sin(clock.elapsedTime * 0.4) * 0.3;

    const material =
        mesh.current.material as THREE.MeshBasicMaterial;

    material.opacity =
        0.08 + Math.sin(clock.elapsedTime * 3) * 0.03;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -1]}>
      <planeGeometry args={[6, 0.08]} />

      <meshBasicMaterial
        color="#66e3ff"
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}