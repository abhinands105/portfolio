import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function useMouse() {
  const mouse = useRef(new THREE.Vector2(9999, 9999));
  const target = useRef(new THREE.Vector2(9999, 9999));

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    };

    const handleTouch = (e: TouchEvent) => {
      if (!e.touches.length) return;

      const touch = e.touches[0];

      target.current.set(
        (touch.clientX / window.innerWidth) * 2 - 1,
        -(touch.clientY / window.innerHeight) * 2 + 1
      );
    };

    const handleLeave = () => {
      target.current.set(9999, 9999);
    };

    let animationId: number;

    const animate = () => {
      mouse.current.lerp(target.current, 0.15);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("touchmove", handleTouch, {
      passive: true,
    });
    window.addEventListener("touchend", handleLeave);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return mouse;
}