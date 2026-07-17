import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function GlowCore() {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { pointer } = state;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.35,
      0.04
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      pointer.x * 0.6,
      0.03
    );
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshStandardMaterial
            color="#0a2318"
            emissive="#1affa8"
            emissiveIntensity={0.7}
            wireframe
          />
        </mesh>
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1.7, 0]} />
          <meshStandardMaterial color="#00c389" emissive="#00c389" emissiveIntensity={1.1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#1affa8" />
        <pointLight position={[-5, -3, -4]} intensity={0.7} color="#00c389" />
        <GlowCore />
        <Sparkles
          count={140}
          scale={[11, 7, 7]}
          size={2.2}
          speed={0.25}
          color="#1affa8"
          opacity={0.55}
        />
      </Canvas>
    </div>
  );
}
