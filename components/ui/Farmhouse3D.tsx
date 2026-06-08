"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { Group, NoToneMapping } from "three";

/**
 * Low-poly stylized red barn farmhouse built from primitive meshes.
 * - Sits on the right of the hero, angled toward the left (rotation.y).
 * - On mount (right after the visitor enters the gate) the whole barn slides
 *   in from the left and eases rightward into its resting spot, then gently
 *   floats. Colors match the warm farmhouse palette: barn red + farm green.
 */

const BARN_RED = "#c8102e"; // vivid barn red
const BARN_RED_DARK = "#9c0c24";
const ROOF_GREEN = "#2faa3f"; // vivid farm green
const ROOF_GREEN_DARK = "#1f8230";
const CREAM = "#f3ead6";
const TRIM = "#f4ead2";
const DOOR_GREEN = "#1f8230";

function Barn() {
  const group = useRef<Group>(null);
  // animation progress 0 -> 1 for the rightward slide-in
  const t = useRef(0);
  // start the slide-in as soon as the scene mounts
  const started = useRef(true);

  useEffect(() => {
    const onEnter = () => {
      started.current = true;
    };
    window.addEventListener("farmhouse:enter", onEnter);
    return () => window.removeEventListener("farmhouse:enter", onEnter);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    // rest pose while waiting: parked off to the left, more turned away
    if (!started.current) {
      group.current.position.x = -8;
      group.current.rotation.y = 1.15;
      return;
    }
    // ease toward 1 (slide-in completes ~1.4s)
    t.current = Math.min(1, t.current + delta / 1.4);
    // easeOutCubic
    const e = 1 - Math.pow(1 - t.current, 3);
    // slide rightward: start 8 units left, settle near center
    group.current.position.x = -8 + 8 * e;
    // ease the angle so the barn ends turned toward the left (doors face the
    // viewer/left column): from 1.15 rad down to ~0.55 rad
    group.current.rotation.y = 1.15 - 0.6 * e;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={group} position={[0, -0.4, 0]} scale={0.82}>
        {/* barn body */}
        <mesh castShadow receiveShadow position={[0, 0.9, 0]}>
          <boxGeometry args={[2.6, 1.8, 2.2]} />
          <meshStandardMaterial color={BARN_RED} roughness={0.7} />
        </mesh>

        {/* white corner posts on the front face */}
        <mesh position={[-1.25, 0.9, 1.08]}>
          <boxGeometry args={[0.12, 1.82, 0.1]} />
          <meshStandardMaterial color={TRIM} roughness={0.6} />
        </mesh>
        <mesh position={[1.25, 0.9, 1.08]}>
          <boxGeometry args={[0.12, 1.82, 0.1]} />
          <meshStandardMaterial color={TRIM} roughness={0.6} />
        </mesh>

        {/* gambrel-ish roof: two stacked angled prisms in green */}
        <group position={[0, 1.8, 0]}>
          {/* lower roof slabs */}
          <mesh castShadow position={[-0.95, 0.28, 0]} rotation={[0, 0, 0.95]}>
            <boxGeometry args={[1.1, 0.18, 2.3]} />
            <meshStandardMaterial color={ROOF_GREEN} roughness={0.75} />
          </mesh>
          <mesh castShadow position={[0.95, 0.28, 0]} rotation={[0, 0, -0.95]}>
            <boxGeometry args={[1.1, 0.18, 2.3]} />
            <meshStandardMaterial color={ROOF_GREEN} roughness={0.75} />
          </mesh>
          {/* upper roof slabs */}
          <mesh castShadow position={[-0.42, 0.95, 0]} rotation={[0, 0, 0.42]}>
            <boxGeometry args={[1.15, 0.18, 2.32]} />
            <meshStandardMaterial color={ROOF_GREEN_DARK} roughness={0.75} />
          </mesh>
          <mesh castShadow position={[0.42, 0.95, 0]} rotation={[0, 0, -0.42]}>
            <boxGeometry args={[1.15, 0.18, 2.32]} />
            <meshStandardMaterial color={ROOF_GREEN_DARK} roughness={0.75} />
          </mesh>
          {/* ridge cap */}
          <mesh castShadow position={[0, 1.32, 0]}>
            <boxGeometry args={[0.16, 0.16, 2.34]} />
            <meshStandardMaterial color={ROOF_GREEN_DARK} roughness={0.7} />
          </mesh>
        </group>

        {/* big barn doors on the front (+Z) */}
        <mesh position={[0, 0.55, 1.11]}>
          <boxGeometry args={[1.1, 1.3, 0.06]} />
          <meshStandardMaterial color={DOOR_GREEN} roughness={0.6} />
        </mesh>
        {/* white X cross-bracing on the doors */}
        <mesh position={[0, 0.55, 1.15]} rotation={[0, 0, 0.65]}>
          <boxGeometry args={[1.5, 0.08, 0.03]} />
          <meshStandardMaterial color={TRIM} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.55, 1.15]} rotation={[0, 0, -0.65]}>
          <boxGeometry args={[1.5, 0.08, 0.03]} />
          <meshStandardMaterial color={TRIM} roughness={0.5} />
        </mesh>

        {/* hay-loft window in the gable */}
        <mesh position={[0, 1.7, 1.0]}>
          <boxGeometry args={[0.5, 0.5, 0.06]} />
          <meshStandardMaterial color={TRIM} roughness={0.5} />
        </mesh>
        <mesh position={[0, 1.7, 1.04]}>
          <boxGeometry args={[0.36, 0.36, 0.04]} />
          <meshStandardMaterial
            color="#f6cf6b"
            emissive="#f6cf6b"
            emissiveIntensity={0.4}
            roughness={0.4}
          />
        </mesh>

        {/* side silo */}
        <group position={[1.85, 0.7, -0.2]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.55, 0.55, 2.0, 20]} />
            <meshStandardMaterial color={CREAM} roughness={0.7} />
          </mesh>
          <mesh castShadow position={[0, 1.05, 0]}>
            <sphereGeometry args={[0.55, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color={BARN_RED_DARK} roughness={0.7} />
          </mesh>
        </group>

        {/* grassy base disc */}
        <mesh receiveShadow position={[0, -0.02, 0]}>
          <cylinderGeometry args={[2.9, 2.9, 0.12, 40]} />
          <meshStandardMaterial color="#2faa3f" roughness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

export function Farmhouse3D() {
  const env = useMemo(() => "city" as const, []);
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.4, 9.5], fov: 38 }}
      gl={{ antialias: true, alpha: true, toneMapping: NoToneMapping }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={0.9}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 3, -2]} intensity={0.35} color="#ffffff" />

      <Barn />

      <ContactShadows
        position={[0, -0.55, 0]}
        opacity={0.45}
        scale={9}
        blur={2.6}
        far={4}
        color="#000000"
      />
      <Environment preset={env} />
    </Canvas>
  );
}
