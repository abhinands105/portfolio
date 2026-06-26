import "./CursorGlow.css";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = cursor.current!;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let x = mouseX;
    let y = mouseY;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    function animate() {
      x += (mouseX - x) * 0.15;
      y += (mouseY - y) * 0.15;

      glow.style.transform =
        `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow"></div>

      <div
        ref={cursor}
        className="cursor-light"
      />
    </>
  );
}