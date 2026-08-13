// src/hooks/usePortraitRaycaster.ts

import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import { Points, Raycaster, Vector2 } from "three";
import { useThree } from "@react-three/fiber";

export interface PortraitHoverState {
  active: boolean;
  x: number;
  y: number;
}

export function usePortraitRaycaster(
  pointsRef: RefObject<Points | null>
) {
  const { camera, gl } = useThree();

  const raycaster = useMemo(() => new Raycaster(), []);
  const pointer = useMemo(() => new Vector2(), []);

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

      if (!pointsRef.current) {
        hover.current.active = false;
        return;
      }

      const intersects = raycaster.intersectObject(
        pointsRef.current,
        false
      );

      if (intersects.length === 0) {
        hover.current.active = false;
        return;
      }

      hover.current.active = true;

      const hit = intersects[0];

      hover.current.x = hit.point.x;
      hover.current.y = hit.point.y;
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
  }, [camera, gl, pointsRef, pointer, raycaster]);

  return hover;
}