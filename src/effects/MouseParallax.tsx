import { useEffect } from "react";

export default function MouseParallax() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}px`
      );
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
}