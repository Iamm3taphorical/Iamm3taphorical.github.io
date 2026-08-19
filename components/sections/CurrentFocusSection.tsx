'use client'

import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Target, Rocket, Code, Brain, Cloud, BookOpen, Cpu, GitBranch } from 'lucide-react'

const focusAreas = [
    {
        icon: <Code className="h-6 w-6" />,
        title: "Data Structures & Algorithms",
        description: "Deepening mastery with production-quality implementations in Java",
        progress: 75,
    },
    {
        icon: <Brain className="h-6 w-6" />,
        title: "Computer Vision",
        description: "YOLO + OpenCV pipelines for robotics applications",
        progress: 60,
    },
    {
        icon: <Cpu className="h-6 w-6" />,
        title: "Robotics Integration",
        description: "Sensor fusion, real-time pipelines, and control systems",
        progress: 55,
    },
    {
        icon: <Rocket className="h-6 w-6" />,
        title: "Full-Stack Development",
        description: "Portfolio projects, dashboards, and deployment",
        progress: 70,
    },
    {
        icon: <Cloud className="h-6 w-6" />,
        title: "AI Training & Evaluation",
        description: "Contributing to foundation-model improvement through quality-focused workflows",
        progress: 45,
    },
    {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Open Source & Teaching",
        description: "Publishing documented learning resources for peers",
        progress: 65,
    },
]

const shortTermGoals = [
    "Build production-grade Java DSA implementations with structured documentation",
    "Advance robotics systems integration: sensor fusion, control loops, and real-time pipelines",
    "Strengthen testing, CI/CD, modular architecture, and open-source documentation",
]

export function CurrentFocusSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Current Focus</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Building end-to-end systems that combine robust software engineering with real-world robotics and ML
                    </p>
                </ScrollAnimation>

                {/* Focus Areas Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {focusAreas.map((area, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1} direction="scale">
                            <motion.div
                                className="card-3d h-full p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group"
                                whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.15)" }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {area.icon}
                                    </div>
                                    <h3 className="font-bold text-foreground">{area.title}</h3>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    {area.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span className="text-primary font-medium">{area.progress}%</span>
                                    </div>
                                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${area.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Short-term Goals */}
                <ScrollAnimation delay={0.3}>
                    <motion.div
                        className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 backdrop-blur-sm"
                        whileHover={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.2)" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Short-Term Goals (Next 3 Months)</h3>
                        </div>

                        <div className="space-y-4">
                            {shortTermGoals.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                    <p className="text-muted-foreground">{goal}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
