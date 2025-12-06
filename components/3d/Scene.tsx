"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Corridor } from "./Corridor";
import { LogoPlaceholder } from "./LogoPlaceholder";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { contact } from "@/data/content";
import { Github, Linkedin, Mail } from "lucide-react";
import { Category } from "@/data/types";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

function SceneContent() {
    const scroll = useScroll();
    const cameraRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        // Scroll progress 0 to 1
        const r1 = scroll.range(0, 1 / 3); // 0 to 0.33
        const r2 = scroll.range(1 / 3, 1 / 3); // 0.33 to 0.66
        const r3 = scroll.range(2 / 3, 1 / 3); // 0.66 to 1

        // Move camera forward based on scroll
        // Start at Z=5, end at Z=-60 (end of corridor)
        const targetZ = 5 - (scroll.offset * 65);
        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);

        // Add slight shake or bob when moving
        if (scroll.delta > 0.001) {
            state.camera.position.y = 1.5 + Math.sin(state.clock.elapsedTime * 10) * 0.05;
        } else {
            state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5, 0.1);
        }
    });

    return (
        <>
            <group position={[0, 0, 0]}>
                <LogoPlaceholder />
            </group>
            <Corridor count={25} spacing={3} />
        </>
    );
}

export function LandingScene() {
    return (
        <div className="h-screen w-full bg-black">
            <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 50 }}>
                <fog attach="fog" args={['#000', 5, 20]} />
                <ambientLight intensity={0.2} />

                <Suspense fallback={null}>
                    <ScrollControls pages={3} damping={0.2}>

                        {/* 3D Content moved by scroll logic (Camera moves, content stays) */}
                        <SceneContent />

                        {/* Scrolling HTML Overlay */}
                        <Scroll html style={{ width: '100%' }}>

                            {/* Section 1: Hero */}
                            <section className="h-screen flex flex-col items-center justify-center text-white pointer-events-none p-4">
                                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 mix-blend-difference">KENAN</h1>
                                <p className="text-xl md:text-2xl font-light tracking-widest text-purple-200/80 uppercase">Game Programmer</p>
                                <div className="mt-8 flex gap-6 pointer-events-auto">
                                    {/* Socials logic duplicated here or make reusable */}
                                    <a href={`mailto:${contact.email}`} className="hover:text-purple-400 transition-colors"><Mail /></a>
                                    <a href={`https://linkedin.com/in/${contact.linkedin}`} className="hover:text-purple-400 transition-colors"><Linkedin /></a>
                                    <a href={`https://github.com/${contact.github}`} className="hover:text-purple-400 transition-colors"><Github /></a>
                                </div>
                                <div className="absolute bottom-10 animate-bounce text-sm opacity-50">
                                    SCROLL TO ENTER
                                </div>
                            </section>

                            {/* Section 2: Spacer for "Walking" */}
                            <section className="h-screen flex items-center justify-center pointer-events-none">
                                {/* Empty, maybe some drifting text */}
                            </section>

                            {/* Section 3: Categories Selection */}
                            <section className="h-screen flex flex-col items-center justify-center p-4 md:p-12">
                                <div className="bg-black/80 backdrop-blur-md border border-purple-500/20 p-8 rounded-3xl w-full max-w-6xl shadow-2xl shadow-purple-900/20">
                                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Select Protocols</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="lg:col-span-2 lg:row-span-2">
                                            <CategoryCard
                                                category="game"
                                                title="Game Development"
                                                description="Core expertise. Unreal Engine, Unity, AI Systems."
                                                delay={0.1}
                                            />
                                        </div>
                                        <CategoryCard
                                            category="apps"
                                            title="Apps / iOS"
                                            description="Swift, SwiftUI, Utilities."
                                            delay={0.2}
                                        />
                                        <CategoryCard
                                            category="tech"
                                            title="Tech / Tools"
                                            description="Pipelines, Scripts, Server."
                                            delay={0.3}
                                        />
                                        <CategoryCard
                                            category="random"
                                            title="Random"
                                            description="Side quests & fun."
                                            delay={0.4}
                                        />
                                        <CategoryCard
                                            category="academics"
                                            title="Academics"
                                            description="Research, Teaching, Publications."
                                            delay={0.5}
                                        />
                                    </div>
                                </div>
                            </section>

                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
}
