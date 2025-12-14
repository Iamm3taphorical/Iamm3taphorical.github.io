'use client'

import { cn } from '@/lib/utils'

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        About Me
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-2 text-lg leading-relaxed text-foreground space-y-6">
                        <p>
                            I'm a Computer Science and Engineering student at BRAC University with a passion for technology, robotics, and innovation. My journey in tech began with a curiosity about how things work, which has evolved into a dedication to creating solutions that make a positive impact.
                        </p>
                        <p>
                            Beyond academics, I'm actively involved in various tech communities and clubs where I collaborate with like-minded individuals to push the boundaries of what's possible. I believe in continuous learning and enjoy exploring new technologies and methodologies.
                        </p>
                        <p>
                            When I'm not coding or working on robotics projects, you can find me exploring new ideas, connecting with people, or contributing to tech awareness initiatives through Projukti Lipi, the organization I co-founded.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        {/* Image removed as requested. Placeholder icon? */}
                        <div className="w-64 h-64 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--japanese-red)] text-6xl shadow-xl">
                            <span>美</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
