'use client'

import { useEffect } from 'react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Brain, Eye, Cpu, Camera, Bot, Video, Scan, Hand, ExternalLink, Github, Rocket } from 'lucide-react'
import { renderCanvas, stopCanvas } from '@/components/ui/canvas'

const projects = [
    {
        title: 'SignTutor AI',
        desc: 'An accessible sign language learning platform using computer vision to provide real-time feedback on hand signs. Built collaboratively to help learners practice with clarity and confidence.',
        icon: <Hand className="h-8 w-8" />,
        tags: ['Computer Vision', 'AI', 'Education', 'Next.js'],
        github: 'https://github.com/Iamm3taphorical/SignTutor-1.0',
        demo: 'https://sign-tutor-v1.vercel.app/',
        featured: true,
        team: ['Abu Bakar Ahmed', 'Ahnaf Ashique', 'Adi', 'Tasnim', 'Eva', 'Kabya Hassan'],
    },
    {
        title: 'Smart Attendance System',
        desc: 'Production-ready face recognition attendance system for campuses featuring multi-model support (face_recognition, dlib, InsightFace), anti-spoofing detection, real-time processing, and a comprehensive web dashboard.',
        icon: <Scan className="h-8 w-8" />,
        tags: ['Face Recognition', 'Python', 'REST API', 'Privacy-focused'],
        github: 'https://github.com/Iamm3taphorical/smart-attendance-system',
        featured: true,
    },
    {
        title: 'Robotic Ocular System v2.0',
        desc: 'Fully integrated robotic eye tracking system combining YOLO-based object detection, Kalman filtering for smooth tracking, ESP32 servo control, and real-time performance monitoring for lifelike robotic eyes.',
        icon: <Eye className="h-8 w-8" />,
        tags: ['Robotics', 'YOLO', 'ESP32', 'Computer Vision'],
        github: 'https://github.com/Iamm3taphorical/Complete-robotic-ocular-system-v2.0',
        featured: true,
    },
    {
        title: 'Surveillance Drone Demo',
        desc: 'Demonstration of autonomous surveillance drone capabilities with integrated computer vision for real-time monitoring and object detection in aerial footage.',
        icon: <Bot className="h-8 w-8" />,
        tags: ['Drone', 'Surveillance', 'AI', 'Autonomous'],
        github: 'https://github.com/Iamm3taphorical/surveillance-drone-demo',
    },
    {
        title: 'YOLOv8 Object Detection Pipeline',
        desc: 'Comprehensive Python pipeline using Ultralytics YOLOv8 for object detection with batch processing, configurable thresholds, visual annotations with bounding boxes, and Matplotlib visualization grids.',
        icon: <Brain className="h-8 w-8" />,
        tags: ['YOLOv8', 'Python', 'Object Detection', 'Ultralytics'],
        github: 'https://github.com/Iamm3taphorical/Object-Detection-using-YOLOv8',
    },
    {
        title: 'Bottle Detection System',
        desc: 'Specialized computer vision project for bottle detection using YOLOv8, OpenCV, and Matplotlib. Features class filtering, visual annotations, and batch processing capabilities.',
        icon: <Camera className="h-8 w-8" />,
        tags: ['YOLOv8', 'OpenCV', 'COCO', 'Computer Vision'],
        github: 'https://github.com/Iamm3taphorical/yolo-opencv-bottle-detection',
    },
    {
        title: 'Real-time Object Detection',
        desc: 'Multi-mode object detection application supporting video processing, webcam detection, and batch image processing with GPU acceleration, interactive CLI, and customizable confidence thresholds.',
        icon: <Cpu className="h-8 w-8" />,
        tags: ['YOLOv8', 'CUDA', 'Real-time', 'Python'],
        github: 'https://github.com/Iamm3taphorical/object-detection',
    },
    {
        title: 'Video Object Detection System',
        desc: 'Enhanced video detection system built with YOLOv8 and OpenCV supporting multiple YOLO models, batch video processing, FPS tracking, and customizable visual annotations.',
        icon: <Video className="h-8 w-8" />,
        tags: ['Video Processing', 'YOLOv8', 'OpenCV', 'Batch Processing'],
        github: 'https://github.com/Iamm3taphorical/video-detection',
    },
]

export function ProjectsSection() {
    useEffect(() => {
        // Initialize canvas animation when component mounts
        const timer = setTimeout(() => {
            renderCanvas()
        }, 100)

        return () => {
            clearTimeout(timer)
            stopCanvas()
        }
    }, [])

    const featuredProjects = projects.filter(p => p.featured)
    const otherProjects = projects.filter(p => !p.featured)

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Canvas Animation Background */}
            <canvas
                id="canvas"
                className="pointer-events-none absolute inset-0 z-0 opacity-60"
            />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-background/90 to-card/80 pointer-events-none z-[1]" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Projects</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        A showcase of robotics, computer vision, and AI systems built for real-world applications
                    </p>
                </ScrollAnimation>

                {/* Featured Projects */}
                <div className="mb-16">
                    <ScrollAnimation delay={0.1} className="mb-8">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <Rocket className="h-6 w-6" />
                            Featured Projects
                        </h3>
                    </ScrollAnimation>

                    <StaggerContainer className="grid lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, idx) => (
                            <StaggerItem key={idx}>
                                <motion.div
                                    className="group h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
                                    whileHover={{
                                        y: -12,
                                        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
                                    }}
                                >
                                    {/* Icon Header with Gradient */}
                                    <div className="h-40 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                                        <motion.div
                                            className="text-primary group-hover:scale-125 transition-all duration-500"
                                            whileHover={{ rotate: 10 }}
                                        >
                                            {project.icon}
                                        </motion.div>

                                        {/* Featured Badge */}
                                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                                            <Rocket className="h-3 w-3" />
                                            Featured
                                        </span>

                                        {/* Decorative elements */}
                                        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />
                                        <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                            {project.desc}
                                        </p>

                                        {/* Team (if exists) */}
                                        {project.team && (
                                            <p className="text-xs text-muted-foreground/70 mb-3 italic">
                                                Team: {project.team.slice(0, 3).join(', ')}{project.team.length > 3 ? ` +${project.team.length - 3} more` : ''}
                                            </p>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 4).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-2 px-4 bg-secondary/50 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Github className="h-4 w-4" />
                                                Code
                                            </motion.a>
                                            {project.demo && (
                                                <motion.a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-2 px-4 bg-primary rounded-lg text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    Demo
                                                </motion.a>
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
                    <ScrollAnimation delay={0.2} className="mb-8">
                        <h3 className="text-xl font-semibold text-muted-foreground">
                            More Projects
                        </h3>
                    </ScrollAnimation>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {otherProjects.map((project, idx) => (
                            <StaggerItem key={idx}>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block h-full p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all"
                                    whileHover={{
                                        y: -6,
                                        boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)",
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            {project.icon}
                                        </div>
                                        <Github className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                    </div>

                                    <h4 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h4>

                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-1">
                                        {project.tags.slice(0, 2).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-1.5 py-0.5 rounded text-[10px] bg-secondary/50 text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.a>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* View All on GitHub */}
                <ScrollAnimation delay={0.3} className="text-center mt-12">
                    <motion.a
                        href="https://github.com/Iamm3taphorical?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-xl text-primary font-medium hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github className="h-5 w-5" />
                        View All Repositories
                        <ExternalLink className="h-4 w-4" />
                    </motion.a>
                </ScrollAnimation>
            </div>
        </section>
    )
}
