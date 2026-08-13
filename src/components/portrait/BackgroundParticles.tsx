import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BackgroundParticles() {

  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {

    const count = 9000;

    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;

    }

    return arr;

  }, []);

  useFrame(({ clock }) => {

    if (!points.current) return;

    points.current.rotation.y =
      clock.elapsedTime * 0.004;

    points.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.05) * 0.01;

  });

  return (

    <points ref={points}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />

      </bufferGeometry>

      <pointsMaterial
        color="#b86cff"
        size={0.012}
        transparent
        opacity={0.12}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />

    </points>

  );

}