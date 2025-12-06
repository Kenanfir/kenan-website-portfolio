"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Corridor({ count = 20, spacing = 8 }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const lightRef = useRef<THREE.Group>(null);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useMemo(() => {
        // We'll update positions in a useEffect or useMemo if static
    }, []);

    useFrame(() => {
        if (!meshRef.current) return;

        // Set positions for loop
        for (let i = 0; i < count; i++) {
            dummy.position.set(
                (i % 2 === 0 ? -1 : 1) * 3, // Left/Right zig zag or just walls
                0,
                -i * spacing
            );
            // Wall dimensions
            dummy.scale.set(1, 4, spacing);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <group>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -count * spacing / 2]}>
                <planeGeometry args={[10, count * spacing]} />
                <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
            </mesh>

            {/* Ceiling */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2, -count * spacing / 2]}>
                <planeGeometry args={[10, count * spacing]} />
                <meshStandardMaterial color="#050505" roughness={0.9} />
            </mesh>

            {/* Walls Instanced */}
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
                <boxGeometry />
                <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
            </instancedMesh>

            {/* Dynamic lights along the corridor */}
            <group ref={lightRef}>
                {Array.from({ length: Math.ceil(count / 2) }).map((_, i) => (
                    <pointLight
                        key={i}
                        position={[0, 1.5, -i * spacing * 2]}
                        intensity={1.5}
                        distance={15}
                        color={i % 2 === 0 ? "#9333ea" : "#d97706"} // Purple / Amber alternate
                        decay={2}
                    />
                ))}
            </group>
        </group>
    );
}
