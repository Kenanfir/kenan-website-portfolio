"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Corridor } from "./Corridor";
import { LogoPlaceholder } from "./LogoPlaceholder";
import { contact } from "@/data/content";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Suspense, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { FloatingCategory } from "./FloatingCategory";

function HeroSection() {
    const scroll = useScroll();
    const ref = useRef<HTMLElement>(null);

    useFrame(() => {
        if (ref.current) {
            // Fade out completely by 20% of scroll
            const opacity = 1 - (scroll.offset * 5);
            ref.current.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
            // Optional: Translate up slightly
            // ref.current.style.transform = `translateY(${-scroll.offset * 500}px)`;
        }
    });

    return (
        <section ref={ref} className="h-screen flex flex-col items-center justify-center text-white pointer-events-none p-4 relative">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 mix-blend-difference select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                KENAN
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.5em] text-purple-200/80 uppercase">Game Programmer</p>
            <div className="mt-12 flex gap-8 pointer-events-auto">
                <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Mail size={24} /></a>
                <a href={`https://linkedin.com/in/${contact.linkedin}`} className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Linkedin size={24} /></a>
                <a href={`https://github.com/${contact.github}`} className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Github size={24} /></a>
            </div>
            <div className="absolute bottom-10 animate-pulse text-xs tracking-widest text-gray-500 flex flex-col items-center gap-2">
                SCROLL TO EXPLORE
                <ArrowDown size={14} />
            </div>
        </section>
    );
}

function SceneContent() {
    const scroll = useScroll();

    useFrame((state, delta) => {
        // Scroll progress 0 to 1
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

            {/* Floating Categories along the path */}
            {/* Z positions need to be negative, further down the corridor */}
            <FloatingCategory text="GAME DEV" position={[0, 1.5, -15]} color="#a855f7" />
            <FloatingCategory text="APPS / iOS" position={[0, 1.5, -30]} color="#3b82f6" />
            <FloatingCategory text="TECH / TOOLS" position={[0, 1.5, -45]} color="#22c55e" />

            <Corridor count={25} spacing={3} />
        </>
    );
}

export function LandingScene() {
    return (
        <div className="h-screen w-full bg-black relative overflow-hidden">
            <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 50 }}>
                <fog attach="fog" args={['#000', 5, 20]} />
                <ambientLight intensity={0.2} />

                <Suspense fallback={null}>
                    <ScrollControls pages={4} damping={0.2}> {/* Increased pages for longer walk */}
                        <SceneContent />

                        <Scroll html style={{ width: '100%', pointerEvents: 'none', zIndex: 40 }}>

                            <HeroSection />

                            {/* Section 2: Walking area (Spacer) */}
                            <section className="h-[200vh] pointer-events-none">
                                {/* Empty space for the "walk" */}
                            </section>

                            {/* Section 3: Final Category Menu */}
                            <section className="h-screen flex flex-col items-center justify-center relative z-40">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-8">
                                    {/* Large Stylish Links */}
                                    <div className="col-span-1 md:col-span-2 text-center mb-8">
                                        <h2 className="text-sm font-bold tracking-widest text-purple-500 mb-4 uppercase">Select Protocol</h2>
                                    </div>

                                    <a href="#game" className="group relative block p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <h3 className="text-4xl md:text-6xl font-black text-white mb-2 relative z-10 group-hover:translate-x-2 transition-transform">GAME DEV</h3>
                                        <p className="text-gray-400 text-lg relative z-10 group-hover:text-white transition-colors">Unreal • Unity • C++</p>
                                    </a>

                                    <a href="#apps" className="group relative block p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <h3 className="text-4xl md:text-6xl font-black text-white mb-2 relative z-10 group-hover:translate-x-2 transition-transform">APPS</h3>
                                        <p className="text-gray-400 text-lg relative z-10 group-hover:text-white transition-colors">iOS • SwiftUI • React</p>
                                    </a>

                                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        <a href="#tech" className="group p-6 border border-white/5 bg-black/20 hover:border-white/20 transition-all text-center rounded-xl">
                                            <span className="block text-xl font-bold text-gray-300 group-hover:text-white">Tech / Tools</span>
                                        </a>
                                        <a href="#academics" className="group p-6 border border-white/5 bg-black/20 hover:border-white/20 transition-all text-center rounded-xl">
                                            <span className="block text-xl font-bold text-gray-300 group-hover:text-white">Academics</span>
                                        </a>
                                        <a href="#random" className="group p-6 border border-white/5 bg-black/20 hover:border-white/20 transition-all text-center lg:col-span-1 col-span-2 rounded-xl">
                                            <span className="block text-xl font-bold text-gray-300 group-hover:text-white">Random</span>
                                        </a>
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
