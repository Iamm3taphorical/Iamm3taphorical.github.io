'use client'

import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
    {
        role: "Co-Founder",
        organization: "Projukti Lipi",
        period: "2025 - Present",
        description: "Co-founded a student tech initiative focused on promoting tech awareness, leading projects, partnerships, and community events.",
        current: true,
        type: "leadership"
    },
    {
        role: "Team Member - Machine Vision & AI",
        organization: "BRACU Duburi",
        period: "2025 - Present",
        description: "Working on machine vision and AI subsystems for an autonomous underwater vehicle: object detection, navigation, and real-time decision pipelines.",
        current: true,
        type: "robotics"
    },
    {
        role: "Team Member - Control & AI",
        organization: "BRACU Alter",
        period: "2025 - Present",
        description: "Contributing to autonomous rescue rover systems — control theory, system modeling, stability analysis, and AI navigation modules.",
        current: true,
        type: "robotics"
    },
    {
        role: "Team Member - Avionics",
        organization: "BRACU Diganta",
        period: "2025 - Present",
        description: "Developing avionics and embedded software for UAVs: sensor integration, communication modules, and flight data handling.",
        current: true,
        type: "robotics"
    },
    {
        role: "Apprentice",
        organization: "Robotics Club of BRAC University (ROBU)",
        period: "2024 - Present",
        description: "Supported robotics projects by streamlining HR operations, coordinating members, and improving collaboration across project teams.",
        current: true,
        type: "club"
    },
    {
        role: "Executive",
        organization: "BRAC University Computer Club (BUCC)",
        period: "2024 - Present",
        description: "Managed member engagement and community activities, organized workshops and coding sessions, and assisted in club project coordination.",
        current: true,
        type: "club"
    },
    {
        role: "General Member",
        organization: "IEEE BRACU Student Branch",
        period: "2024 - Present",
        description: "Engaged in research collaboration initiatives and technical events to strengthen the student research ecosystem.",
        current: true,
        type: "club"
    },
]

const typeColors: Record<string, string> = {
    leadership: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    robotics: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    club: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
}

const typeBadgeColors: Record<string, string> = {
    leadership: "bg-amber-500/10 text-amber-500",
    robotics: "bg-blue-500/10 text-blue-500",
    club: "bg-purple-500/10 text-purple-500",
}

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Experience</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Building impact through leadership, robotics, and community engagement
                    </p>
                </ScrollAnimation>

                {/* Experience Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1} direction="scale">
                            <motion.div
                                className={`h-full p-6 rounded-2xl border backdrop-blur-sm bg-gradient-to-br ${typeColors[exp.type]} transition-all duration-300 group hover:shadow-lg`}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-card/80 text-primary">
                                            <Briefcase className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${typeBadgeColors[exp.type]}`}>
                                                {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                    {exp.current && (
                                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            Active
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {exp.role}
                                </h3>
                                <p className="text-primary font-medium mb-2">
                                    {exp.organization}
                                </p>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {exp.period}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
