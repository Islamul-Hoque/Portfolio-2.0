"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Float,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { motion } from "framer-motion";

function ParticleBackground() {
  const ref = useRef();

  // Use more particles for better visibility
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000), { radius: 1.5 }),
    [],
  );

  useFrame((state, delta) => {
    // Faster rotation for more dynamic feel
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Parallax effect on scroll - only on client side
    if (typeof window !== "undefined") {
      ref.current.position.y = -window.scrollY * 0.0003;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.6, 64, 64]} position={[-2, -1, -5]}>
          <MeshDistortMaterial
            color="#3b82f6"
            speed={4}
            distort={0.5}
            radius={1}
            opacity={0.6}
            transparent
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={4} rotationIntensity={1.5} floatIntensity={3}>
        <Sphere args={[0.8, 64, 64]} position={[3, 2, -8]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={3}
            distort={0.6}
            radius={1}
            opacity={0.5}
            transparent
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.4, 64, 64]} position={[0, -2, -6]}>
          <MeshDistortMaterial
            color="#ec4899"
            speed={5}
            distort={0.4}
            radius={1}
            opacity={0.4}
            transparent
            metalness={0.7}
            roughness={0.3}
          />
        </Sphere>
      </Float>
    </>
  );
}

const FloatingCircle = ({
  className,
  delay = 0,
  duration = 8,
  yOffset = 20,
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-yOffset, yOffset] }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    }}
    className={className}
  />
);

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#020617] overflow-hidden">
      {/* Three.js Layer */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <pointLight
            position={[-10, -10, -10]}
            color="#3b82f6"
            intensity={1}
          />

          <ParticleBackground />
          <FloatingShapes />

          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
              height={300}
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Decorative Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] pointer-events-none" />
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

      {/* Anti-gravity decorative shapes - More visible */}
      <FloatingCircle
        className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        duration={6}
        yOffset={30}
      />
      <FloatingCircle
        className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]"
        duration={9}
        yOffset={40}
        delay={1}
      />
      <FloatingCircle
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[180px]"
        duration={12}
        yOffset={25}
        delay={0.5}
      />
    </div>
  );
}
