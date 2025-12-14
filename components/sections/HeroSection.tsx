'use client'

import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { cn } from '@/lib/utils'

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background Shader */}
            <div className="absolute inset-0 z-0">
                <DotScreenShader />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="hero-content">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--japanese-red)] relative inline-block">
                        Mahir Dyan
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--japanese-gold)] translate-y-2"></span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--secondary)] dark:text-[var(--secondary-foreground)]">
                        Computer Science Student & Tech Enthusiast
                    </h2>
                    <p className="text-lg mb-8 max-w-xl text-muted-foreground">
                        A curious and creative person who values deep connections and continuous learning. Enjoys exploring new ideas and aims to approach life with empathy and a positive impact.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-[var(--japanese-red)] text-white border-2 border-[var(--japanese-red)] rounded hover:bg-transparent hover:text-[var(--japanese-red)] transition-colors font-semibold"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-transparent text-[var(--japanese-red)] border-2 border-[var(--japanese-red)] rounded hover:bg-[var(--japanese-red)] hover:text-white transition-colors font-semibold"
                        >
                            View My Work
                        </a>
                    </div>
                </div>

                {/* Removed Image as requested */}
                <div className="hidden md:flex justify-center items-center">
                    {/* Placeholder or just nothing? User requested removing images. 
                Original had one image.
                Maybe a decorative element or just empty space?
                The shader is the visual now. 
             */}
                    <div className="p-12 border-4 border-[var(--japanese-red)] rounded-full animate-float opacity-0">
                        {/* Floating circle invisible just to keep layout? No, let's leave it empty or put a text/icon */}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-[10%] right-[5%] text-9xl text-[var(--japanese-red)] opacity-5 pointer-events-none select-none font-japanese">
                The Dot
            </div>
            <div className="absolute top-[10%] right-[5%] text-[10rem] text-[var(--japanese-red)] opacity-5 pointer-events-none select-none font-serif z-0">
                風
            </div>
            <div className="absolute bottom-[10%] left-[5%] text-[8rem] text-[var(--japanese-gold)] opacity-5 pointer-events-none select-none font-serif z-0">
                桜
            </div>

            {/* Sakura animation div mapping */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="sakura"
                    style={{
                        left: `${5 + i * 10}%`,
                        animationDelay: `${i * 2}s`
                    }}
                />
            ))}
        </section>
    )
}
