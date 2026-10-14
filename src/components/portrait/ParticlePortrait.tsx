import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import profile from "../../assets/profile.png";

import { usePortraitRaycaster } from "../../hooks/usePortraitRaycaster";

import { generateParticles } from "../../utils/particleGenerator";
import type { ParticleData } from "../../utils/particleGenerator";



export default function ParticlePortrait() {

    const pointsRef = useRef<THREE.Points>(null);

    const geometryRef = useRef<THREE.BufferGeometry>(null);

    

    const hover = usePortraitRaycaster();

    const [imageData,setImageData] =
        useState<ImageData|null>(null);

    const particleData = useRef<ParticleData | null>(null);

    

    useEffect(()=>{

        const img=new Image();

        img.src=profile;

        img.onload=()=>{

            const canvas=document.createElement("canvas");

            canvas.width=img.width;

            canvas.height=img.height;

            const ctx=canvas.getContext("2d");

            if(!ctx) return;

            ctx.drawImage(img,0,0);

            const data=ctx.getImageData(

                0,
                0,
                img.width,
                img.height

            );

            setImageData(data);

            const generated = generateParticles(data);

            console.log("Particles:", generated.positions.length / 3);

        };

    },[]);

    

    const particles = useMemo(() => {

      if (!imageData) return null;

      return generateParticles(imageData);

    }, [imageData]);

    useEffect(() => {

      particleData.current = particles;

    }, [particles]);

    const positions =
      particles?.positions ??
      new Float32Array(0);

    const colors =
      particles?.colors ??
      new Float32Array(0);

    useFrame(({ clock }) => {

    

    if(
        !pointsRef.current ||
        !geometryRef.current ||
        !particleData.current
    ){
        return;
    }

    const pos =
      particleData.current.positions;

    const org =
      particleData.current.original;

    const vel =
      particleData.current.velocities;

    

    

    for (let i = 0; i < pos.length; i += 3) {

    // Cursor NOT over portrait
    if (!hover.current.active) {

      vel[i] += (org[i] - pos[i]) * 0.03;
      vel[i + 1] += (org[i + 1] - pos[i + 1]) * 0.03;
      vel[i + 2] += (org[i + 2] - pos[i + 2]) * 0.03;

      vel[i] *= 0.90;
      vel[i + 1] *= 0.90;
      vel[i + 2] *= 0.90;

      pos[i] += vel[i];
      pos[i + 1] += vel[i + 1];
      pos[i + 2] += vel[i + 2];

      continue;
    }

    // Cursor IS over portrait
    const mx = hover.current.x;
    const my = hover.current.y;

      const dx = pos[i] - mx;
    const dy = pos[i + 1] - my;

    const dist = Math.sqrt(dx * dx + dy * dy);

    const radius = 0.82;

    if (dist < radius) {
      const influence = 1 - dist / radius;
      const force = influence * influence;
      const ripple = Math.sin(clock.elapsedTime * 14 - dist * 20) * force;
      const safeDistance = Math.max(dist, 0.001);
      const outwardX = dx / safeDistance;
      const outwardY = dy / safeDistance;

      vel[i] += (outwardX * 0.028 - outwardY * 0.022) * force;
      vel[i + 1] += (outwardY * 0.028 + outwardX * 0.022) * force;
      vel[i + 2] += force * 0.012 + ripple * 0.014;
    }

    vel[i] += (org[i] - pos[i]) * 0.040;
    vel[i + 1] += (org[i + 1] - pos[i + 1]) * 0.040;
    vel[i + 2] += (org[i + 2] - pos[i + 2]) * 0.040;

    vel[i] *= 0.93;
    vel[i + 1] *= 0.93;
    vel[i + 2] *= 0.93;

    pos[i] += vel[i];
    pos[i + 1] += vel[i + 1];
    pos[i + 2] += vel[i + 2];

    const offsetX = pos[i] - org[i];
    const offsetY = pos[i + 1] - org[i + 1];
    const offsetZ = pos[i + 2] - org[i + 2];
    const offsetLength = Math.hypot(offsetX, offsetY, offsetZ);
    const maxDisplacement = 0.075;

    if (offsetLength > maxDisplacement) {
      const scale = maxDisplacement / offsetLength;
      pos[i] = org[i] + offsetX * scale;
      pos[i + 1] = org[i + 1] + offsetY * scale;
      pos[i + 2] = org[i + 2] + offsetZ * scale;
      vel[i] *= 0.35;
      vel[i + 1] *= 0.35;
      vel[i + 2] *= 0.35;
    }
  }

    const attribute = geometryRef.current.getAttribute(
      "position"
    ) as THREE.BufferAttribute;

    (attribute.array as Float32Array).set(
      particleData.current.positions
    );

     

    attribute.needsUpdate = true;

    pointsRef.current.position.set(
      0.15,
      -0.05 + Math.sin(clock.elapsedTime * 0.55) * 0.035,
      0
    );
    

    pointsRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.28) * 0.1;

    pointsRef.current.rotation.x =
      Math.cos(clock.elapsedTime * 0.2) * 0.04;

    pointsRef.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.35) * 0.015;

    pointsRef.current.scale.setScalar(
      0.9 + Math.sin(clock.elapsedTime * 0.75) * 0.008
    );

    
    });


return (
  <points ref={pointsRef}>
    <bufferGeometry ref={geometryRef}>

      <bufferAttribute
        attach="attributes-position"
        args={[
          positions,
          3
        ]}
      />

      <bufferAttribute
        attach="attributes-color"
        args={[
          colors,
          3
        ]}
      />

      

    </bufferGeometry>

    <pointsMaterial
      size={0.019}
      sizeAttenuation
      transparent
      opacity={0.34}
      alphaTest={0.001}
      vertexColors
      color={0xffffff}
      depthWrite={false}
      blending={THREE.NormalBlending}
      toneMapped={false}
    />
  </points>
);
}
