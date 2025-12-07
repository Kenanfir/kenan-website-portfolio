"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface FloatingCategoryProps {
    text: string;
    position: [number, number, number];
    color?: string;
    scale?: number;
}

export function FloatingCategory({
    text,
    position,
    color = "#ffffff",
    scale = 1,
}: FloatingCategoryProps) {
    const textRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!textRef.current) return;

        // Calculate distance to camera
        const dist = state.camera.position.distanceTo(textRef.current.position);

        // Opacity logic:
        // Visible between distance 5 and 20.
        // Fade in when approaching 20, fade out when closer than 5 (behind).
        // This is a simple linear fade.
        let opacity = 0;
        if (dist < 25 && dist > 2) {
            // Peak opacity at around 10 units away
            opacity = 1 - Math.abs(dist - 10) / 10;
            opacity = THREE.MathUtils.clamp(opacity, 0, 1);
        }

        const material = textRef.current.material as THREE.MeshStandardMaterial; // Text uses standard material by default in drei? No, it uses MeshBasicMaterial or custom.
        // Text from drei usually has 'color' and 'fillOpacity' props directly, but for full material control:
        if (Array.isArray(material)) {
            // array material
        } else {
            material.opacity = opacity;
            material.transparent = true;
        }
    });

    return (
        <Text
            ref={textRef}
            position={position}
            fontSize={scale}
            color={color}
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff"
        >
            {text}
            <meshStandardMaterial attach="material" color={color} transparent opacity={0} />
        </Text>
    );
}
