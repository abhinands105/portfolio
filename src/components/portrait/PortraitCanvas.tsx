import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AdaptiveDpr } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import BackgroundParticles from "./BackgroundParticles";
 
import ParticlePortrait from "./ParticlePortrait";
 
 

export default function PortraitCanvas() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
        borderRadius: 0,
        background: "transparent",
      }}
    >
      <Canvas
        style={{
          background: "transparent",
        }}
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 10],
          fov: 30,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
         

        {/* Lighting */}
        <ambientLight intensity={0.6} />

        

        <Suspense fallback={null}>

          <BackgroundParticles />

          

          <ParticlePortrait />

        </Suspense>

        <EffectComposer>
          <Bloom
            intensity={0.35}
            luminanceThreshold={0.6}
            luminanceSmoothing={1}
            mipmapBlur
          />
        </EffectComposer>

        <AdaptiveDpr pixelated={false} />
      </Canvas>
    </div>
  );
}