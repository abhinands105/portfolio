import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function EnergyRing() {

  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {

    if (!ring.current) return;

    ring.current.rotation.z =
      clock.elapsedTime * 0.12;

    const material =
      ring.current.material as THREE.MeshBasicMaterial;

    material.opacity =
      0.18 +
      Math.sin(clock.elapsedTime * 2.5) * 0.05;

    ring.current.scale.setScalar(
      1 +
      Math.sin(clock.elapsedTime * 1.5) * 0.02
    );

  });

  return (

    <mesh
      ref={ring}
      position={[0,0,-0.2]}
    >

      <ringGeometry
        args={[2.15,2.23,128]}
      />

      <meshBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />

    </mesh>

  );

}