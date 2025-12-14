'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Brain, Eye, Cpu, Camera, Bot, Video, Scan, Hand, ExternalLink, Github, Rocket } from 'lucide-react'

const projects = [
    {
        title: 'SignTutor AI',
        desc: 'An accessible sign language learning platform using computer vision to provide real-time feedback on hand signs.',
        icon: <Hand className="h-7 w-7" />,
        tags: ['Computer Vision', 'AI', 'Education', 'Next.js'],
        github: 'https://github.com/Iamm3taphorical/SignTutor-1.0',
        demo: 'https://sign-tutor-v1.vercel.app/',
        featured: true,
    },
    {
        title: 'Smart Attendance System',
        desc: 'Production-ready face recognition attendance system for campuses with anti-spoofing detection and real-time processing.',
        icon: <Scan className="h-7 w-7" />,
        tags: ['Face Recognition', 'Python', 'REST API'],
        github: 'https://github.com/Iamm3taphorical/smart-attendance-system',
        featured: true,
    },
    {
        title: 'Robotic Ocular System v2.0',
        desc: 'Robotic eye tracking system with YOLO-based detection, Kalman filtering, and ESP32 servo control.',
        icon: <Eye className="h-7 w-7" />,
        tags: ['Robotics', 'YOLO', 'ESP32'],
        github: 'https://github.com/Iamm3taphorical/Complete-robotic-ocular-system-v2.0',
        featured: true,
    },
    {
        title: 'Surveillance Drone Demo',
        desc: 'Autonomous surveillance drone with integrated computer vision for real-time monitoring.',
        icon: <Bot className="h-6 w-6" />,
        tags: ['Drone', 'AI'],
        github: 'https://github.com/Iamm3taphorical/surveillance-drone-demo',
    },
    {
        title: 'YOLOv8 Detection Pipeline',
        desc: 'Python pipeline for object detection with batch processing and visualization.',
        icon: <Brain className="h-6 w-6" />,
        tags: ['YOLOv8', 'Python'],
        github: 'https://github.com/Iamm3taphorical/Object-Detection-using-YOLOv8',
    },
    {
        title: 'Bottle Detection System',
        desc: 'Specialized bottle detection using YOLOv8, OpenCV, and Matplotlib.',
        icon: <Camera className="h-6 w-6" />,
        tags: ['YOLOv8', 'OpenCV'],
        github: 'https://github.com/Iamm3taphorical/yolo-opencv-bottle-detection',
    },
    {
        title: 'Real-time Object Detection',
        desc: 'Multi-mode detection with GPU acceleration and webcam support.',
        icon: <Cpu className="h-6 w-6" />,
        tags: ['YOLOv8', 'CUDA'],
        github: 'https://github.com/Iamm3taphorical/object-detection',
    },
    {
        title: 'Video Detection System',
        desc: 'Enhanced video detection with multiple YOLO models and batch processing.',
        icon: <Video className="h-6 w-6" />,
        tags: ['Video', 'YOLOv8'],
        github: 'https://github.com/Iamm3taphorical/video-detection',
    },
]

export function ProjectsSection() {
    const featuredProjects = projects.filter(p => p.featured)
    const otherProjects = projects.filter(p => !p.featured)

    return (
        <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">Projects</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
                        Robotics, computer vision, and AI systems for real-world applications
                    </p>
                </ScrollAnimation>

                {/* Featured Projects */}
                <div className="mb-12">
                    <ScrollAnimation delay={0.1} className="mb-6">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                            <Rocket className="h-5 w-5" />
                            Featured
                        </h3>
                    </ScrollAnimation>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {featuredProjects.map((project, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    className="group h-full bg-card/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Header */}
                                    <div className="h-28 md:h-32 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center relative">
                                        <div className="text-primary">{project.icon}</div>
                                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                                            <Rocket className="h-3 w-3" />
                                            Featured
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 rounded-md bg-primary/10 text-xs font-medium text-primary"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-2 px-3 bg-secondary/50 rounded-lg text-xs md:text-sm font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-1.5"
                                            >
                                                <Github className="h-4 w-4" />
                                                Code
                                            </a>
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-2 px-3 bg-primary rounded-lg text-xs md:text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Other Projects */}
                <div>
                    <ScrollAnimation delay={0.1} className="mb-6">
                        <h3 className="text-lg font-semibold text-muted-foreground">
                            More Projects
                        </h3>
                    </ScrollAnimation>

                    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                        {otherProjects.map((project, idx) => (
                            <StaggerItem key={idx}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block h-full p-3 md:p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            {project.icon}
                                        </div>
                                    </div>

                                    <h4 className="font-semibold text-foreground text-xs md:text-sm mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h4>

                                    <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2 mb-2">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-1">
                                        {project.tags.slice(0, 2).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-1.5 py-0.5 rounded text-[9px] md:text-[10px] bg-secondary/50 text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* View All */}
                <ScrollAnimation delay={0.2} className="text-center mt-10">
                    <a
                        href="https://github.com/Iamm3taphorical?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-xl text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                        <Github className="h-4 w-4" />
                        View All Repositories
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </ScrollAnimation>
            </div>
        </section>
    )
}
