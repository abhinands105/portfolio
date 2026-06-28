import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function DataGrid() {

  const grid = useRef<THREE.GridHelper>(null);

  useFrame(({ clock }) => {

    if (!grid.current) return;

    grid.current.rotation.x =
      Math.PI / 2;

    grid.current.rotation.z =
      clock.elapsedTime * 0.015;

    grid.current.position.z =
      -2.2;

  });

  return (

    <primitive
      ref={grid}
      object={
        new THREE.GridHelper(
          12,
          30,
          "#8b5cf6",
          "#203050"
        )
      }
    />

  );

}