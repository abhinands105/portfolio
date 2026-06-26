export default function ParticlesBackground() {
  return (
    <>
      {/* Main Purple Glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -3,
          background:
            "radial-gradient(circle at 20% 20%, rgba(123,44,191,0.25), transparent 35%)",
        }}
      />

      {/* Top Right Glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -3,
          background:
            "radial-gradient(circle at 85% 10%, rgba(199,125,255,0.18), transparent 30%)",
        }}
      />

      {/* Bottom Glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -3,
          background:
            "radial-gradient(circle at 50% 90%, rgba(157,78,221,0.15), transparent 40%)",
        }}
      />

      {/* Grid Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -2,
          opacity: 0.05,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -1,
          background:
            "linear-gradient(rgba(255,255,255,.01), rgba(255,255,255,.01))",
          backdropFilter: "blur(1px)",
        }}
      />
    </>
  );
}