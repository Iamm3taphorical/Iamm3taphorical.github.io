'use client'

import { Target, Zap, Server, Brain, Code, BookOpen } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function CurrentFocusSection() {
    const priorities = [
        {
            title: 'Data Structures & Algorithms (Java)',
            desc: 'Deepening mastery with production-quality implementations and documented learning resources (see CSE220_Data_Structure).',
            icon: <Code className="h-6 w-6 text-[var(--japanese-gold)]" />
        },
        {
            title: 'Computer Vision & Object Detection',
            desc: 'Developing reliable pipelines for image/video input, model inference, and annotated output for robotics applications (YOLO / OpenCV).',
            icon: <Brain className="h-6 w-6 text-[var(--japanese-gold)]" />
        },
        {
            title: 'Robotics Systems Integration',
            desc: 'Integrating perception, control, and embedded interfaces for autonomous platforms — focus on sensor fusion and real-time pipelines.',
            icon: <Target className="h-6 w-6 text-[var(--japanese-gold)]" />
        },
        {
            title: 'Full-Stack Web & Deployment',
            desc: 'Building portfolio projects and dashboards, learning to deploy ML services with containerization and cloud fundamentals.',
            icon: <Server className="h-6 w-6 text-[var(--japanese-gold)]" />
        },
        {
            title: 'Competitive Programming',
            desc: 'Improving ranking and problem coverage on Codeforces, LeetCode, and HackerRank to sharpen algorithmic thinking.',
            icon: <Zap className="h-6 w-6 text-[var(--japanese-gold)]" />
        },
        {
            title: 'Engineering Best Practices',
            desc: 'Adding tests, CI/CD, modular design, and documentation to make projects production ready.',
            icon: <BookOpen className="h-6 w-6 text-[var(--japanese-gold)]" />
        }
    ]

    return (
        <section id="focus" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Current Focus
                    </h2>
                    <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
                        I focus on building end-to-end systems that combine robust software engineering with real-world robotics and ML.
                    </p>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {priorities.map((item, index) => (
                        <ScrollAnimation key={index} className="flex gap-4 p-6 bg-background rounded-xl shadow-md border border-border">
                            <div className="shrink-0 pt-1">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation className="mt-16 bg-background p-8 rounded-xl border border-[var(--japanese-red)] max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-[var(--japanese-red)] mb-6 text-center">Short-Term Goals (Next 3 Months)</h3>
                    <ul className="space-y-4 list-decimal list-inside text-lg text-foreground">
                        <li>Convert key YOLO notebooks into reusable Python packages with CLI interfaces.</li>
                        <li>Harden <code>CSE220_Data_Structure</code> with test suites and example problems for each operation.</li>
                        <li>Deploy a perception → inference → dashboard demo (via GitHub Pages + lightweight backend/cloud function).</li>
                    </ul>
                </ScrollAnimation>
            </div>
        </section>
    )
}
