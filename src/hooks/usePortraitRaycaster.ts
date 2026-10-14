// src/hooks/usePortraitRaycaster.ts

import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import { Plane, Raycaster, Vector2, Vector3 } from "three";
import { useThree } from "@react-three/fiber";

export interface PortraitHoverState {
  active: boolean;
  x: number;
  y: number;
}

export function usePortraitRaycaster(
  _pointsRef: RefObject<Points | null>
) {
  const { camera, gl } = useThree();

  const raycaster = useMemo(() => new Raycaster(), []);
  const pointer = useMemo(() => new Vector2(), []);
  const interactionPlane = useMemo(
    () => new Plane(new Vector3(0, 0, 1), 0),
    []
  );
  const intersection = useMemo(() => new Vector3(), []);

  const hover = useRef<PortraitHoverState>({
    active: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const canvas = gl.domElement;

    function onPointerMove(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect();

      pointer.x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      pointer.y =
        -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);

      if (!raycaster.ray.intersectPlane(interactionPlane, intersection)) {
        hover.current.active = false;
        return;
      }

      hover.current.active = true;

      hover.current.x = intersection.x - 0.15;
      hover.current.y = intersection.y + 0.05;
    }

    function onPointerLeave() {
      hover.current.active = false;
    }

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      canvas.removeEventListener(
        "pointermove",
        onPointerMove
      );
      canvas.removeEventListener(
        "pointerleave",
        onPointerLeave
      );
    };
  }, [camera, gl, interactionPlane, intersection, pointer, raycaster]);

  return hover;
}
