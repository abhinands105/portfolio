import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function MouseTrail() {

  const trail = useRef<THREE.Points>(null);

  const positions = useMemo(() => {

    const count = 150;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

      arr[i * 3] = (Math.random() - 0.5) * 0.2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.05;

    }

    return arr;

  }, []);

  useFrame(({ clock }) => {

    if (!trail.current) return;

    trail.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.4) * 0.08;

    trail.current.rotation.y =
      Math.cos(clock.elapsedTime * 0.25) * 0.05;

  });

  return (

    <points ref={trail}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />

      </bufferGeometry>

      <pointsMaterial
        color="#8b5cf6"
        size={0.035}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />

    </points>

  );

}