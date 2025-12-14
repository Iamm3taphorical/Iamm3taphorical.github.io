'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Code2, Brain, Laptop, Server, Zap, ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'CSE220_Data_Structure',
        desc: 'Production-quality implementations and documented learning resources for Data Structures & Algorithms in Java.',
        icon: <Code2 className="h-8 w-8" />,
        tags: ['Java', 'DSA', 'Education'],
        link: 'https://github.com/Iamm3taphorical/CSE220_Data_Structure',
    },
    {
        title: 'YOLO Object Detection',
        desc: 'Reliable pipelines for image/video input, model inference, and annotated output using YOLO and OpenCV.',
        icon: <Brain className="h-8 w-8" />,
        tags: ['Python', 'YOLO', 'OpenCV'],
        link: 'https://github.com/Iamm3taphorical/yolo-opencv-bottle-detection',
    },
    {
        title: 'Portfolio Website',
        desc: 'Full-stack portfolio with Next.js, TypeScript, Tailwind CSS, and interactive 3D shaders.',
        icon: <Laptop className="h-8 w-8" />,
        tags: ['Next.js', 'TypeScript', 'Three.js'],
        link: 'https://github.com/Iamm3taphorical/Iamm3taphorical.github.io',
    },
    {
        title: 'MERN Stack Development',
        desc: 'Comprehensive workshop on MERN stack covering MongoDB, Express.js, React, and Node.js.',
        icon: <Server className="h-8 w-8" />,
        tags: ['MongoDB', 'Express', 'React', 'Node'],
        certificate: true,
    },
    {
        title: 'AWS Cloud Foundations',
        desc: 'Foundational knowledge of AWS cloud services and infrastructure through AWS Academy.',
        icon: <Zap className="h-8 w-8" />,
        tags: ['AWS', 'Cloud', 'DevOps'],
        certificate: true,
    },
    {
        title: 'Generative AI with AWS',
        desc: 'Exploration of generative AI technologies and their implementation using AWS services.',
        icon: <Brain className="h-8 w-8" />,
        tags: ['AI', 'AWS', 'Machine Learning'],
        certificate: true,
    }
]

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Projects & Certificates</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        A showcase of practical projects and continuous learning achievements
                    </p>
                </ScrollAnimation>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <StaggerItem key={idx}>
                            <motion.div
                                className="group h-full bg-card/60 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                                }}
                            >
                                {/* Icon Header */}
                                <div className="h-32 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                        className="text-primary group-hover:scale-110 transition-transform duration-500"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        {project.icon}
                                    </motion.div>

                                    {/* Certificate Badge */}
                                    {project.certificate && (
                                        <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                                            Certificate
                                        </span>
                                    )}

                                    {/* Decorative circles */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                    <div className="absolute -top-10 -left-10 w-30 h-30 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {project.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 rounded-md bg-secondary/50 text-xs font-medium text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                                            whileHover={{ x: 4 }}
                                        >
                                            <Github className="h-4 w-4" />
                                            View on GitHub
                                            <ExternalLink className="h-3 w-3" />
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
