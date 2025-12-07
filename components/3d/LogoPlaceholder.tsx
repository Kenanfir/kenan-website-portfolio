"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

export function LogoPlaceholder() {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Idle rotation
            meshRef.current.rotation.y += delta * 0.2;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

            // Look at mouse slightly
            const x = (state.mouse.x * Math.PI) / 5;
            const y = (state.mouse.y * Math.PI) / 5;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x + state.clock.elapsedTime * 0.2, 0.1);
        }
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1}>
            <group
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={1.5}
            >
                {/* Head/Badge Placeholder */}
                <mesh position={[0, 0, 0]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#9333ea"
                        wireframe={true}
                        emissive="#9333ea"
                        emissiveIntensity={1}
                    />
                </mesh>

                {/* Inner solid */}
                {/* <mesh position={[0, 0, 0]} scale={0.9}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#2a0a2bff" />
                </mesh> */}

            </group>
        </Float>
    );
}
