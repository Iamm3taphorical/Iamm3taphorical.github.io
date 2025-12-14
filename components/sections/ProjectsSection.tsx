'use client'

import { Code2, Brain, Laptop, Server, Zap, Box } from 'lucide-react'

export function ProjectsSection() {
    const projects = [
        {
            title: 'CSE220_Data_Structure',
            desc: 'Deepening mastery with production-quality implementations and documented learning resources for Data Structures & Algorithms in Java.',
            icon: <Code2 className="h-10 w-10" />,
        },
        {
            title: 'yolo-opencv-bottle-detection',
            desc: 'Developing reliable pipelines for image/video input, model inference, and annotated output using YOLO and OpenCV for robotics applications.',
            icon: <Brain className="h-10 w-10" />,
        },
        {
            title: 'Iamm3taphorical.github.io',
            desc: 'Full-stack portfolio website built with Next.js, TypeScript, Tailwind CSS, and reactive 3D shaders.',
            icon: <Laptop className="h-10 w-10" />,
        },
        {
            title: 'MERN Stack Development',
            desc: 'Comprehensive workshop on MERN stack development covering MongoDB, Express.js, React, and Node.js.',
            icon: <Server className="h-10 w-10" />,
        },
        {
            title: 'AWS Academy Cloud Foundations',
            desc: 'Foundational knowledge of AWS cloud services and infrastructure through AWS Academy certification.',
            icon: <Zap className="h-10 w-10" />,
        },
        {
            title: 'Generative AI with AWS',
            desc: 'Exploration of generative AI technologies and their implementation using AWS services.',
            icon: <Brain className="h-10 w-10" />,
        }
    ]

    return (
        <section id="projects" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Projects & Certificates
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-background rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-border group flex flex-col">
                            <div className="h-40 bg-[var(--accent)] flex items-center justify-center text-[var(--secondary)] group-hover:bg-[var(--japanese-red)] group-hover:text-white transition-colors duration-300">
                                {project.icon}
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[var(--japanese-red)] mb-3 break-words">{project.title}</h3>
                                <p className="text-muted-foreground flex-1">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
