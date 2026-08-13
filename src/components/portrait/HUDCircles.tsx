import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HUDCircles() {

  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {

    if (!group.current) return;

    group.current.rotation.z =
      clock.elapsedTime * 0.05;

  });

  return (

    <group ref={group}>

      <mesh position={[0,0,-0.6]}>

        <ringGeometry args={[2.35,2.38,128]} />

        <meshBasicMaterial
          color="#66e3ff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />

      </mesh>

      <mesh position={[0,0,-0.65]} rotation={[0,0,Math.PI/4]}>

        <ringGeometry args={[1.75,1.78,64]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.18}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />

      </mesh>

    </group>

  );

}