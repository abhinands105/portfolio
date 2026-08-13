import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import profile from "../../assets/profile.png";
import particleTexture from "../../assets/textures/particle.png";

import { usePortraitRaycaster } from "../../hooks/usePortraitRaycaster";

import { generateParticles } from "../../utils/particleGenerator";
import type { ParticleData } from "../../utils/particleGenerator";



export default function ParticlePortrait() {

    const pointsRef = useRef<THREE.Points>(null);

    const geometryRef = useRef<THREE.BufferGeometry>(null);

    

    const hover = usePortraitRaycaster(pointsRef);

    const texture = useMemo(() => {
      const tex = new THREE.TextureLoader().load(particleTexture);

      tex.colorSpace = THREE.SRGBColorSpace;
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;

      return tex;
    }, []);

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

    const radius = 0.58;

    if (dist < radius) {

      const force =
        ((radius - dist) / radius) *
        ((radius - dist) / radius);

      vel[i] += dx * force * 0.040;
      vel[i + 1] += dy * force * 0.040;
      vel[i + 2] += force * 0.012;
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
      -0.05,
      0
    );
    

    pointsRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.22) * 0.06;

    pointsRef.current.rotation.x =
      Math.cos(clock.elapsedTime * 0.16) * 0.025;

    pointsRef.current.scale.setScalar(0.9);

    
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
      size={0.022}
      sizeAttenuation
      transparent
      opacity={1.35}
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