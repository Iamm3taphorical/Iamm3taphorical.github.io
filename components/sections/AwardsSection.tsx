'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Trophy, Medal, Award } from 'lucide-react'

const awards = [
    {
        title: "Top 8 Finalist",
        event: "AI Hackathon",
        description: "Competed among numerous teams and secured a top 8 position with an innovative AI solution",
        icon: <Trophy className="h-8 w-8" />,
        color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
        iconColor: "text-amber-500",
    },
    {
        title: "Participant",
        event: "National Robotics Championship (NRC)",
        description: "Competed in the National Robotics Championship representing BRAC University",
        icon: <Medal className="h-8 w-8" />,
        color: "from-slate-400/20 to-gray-400/20 border-slate-400/30",
        iconColor: "text-slate-400",
    },
    {
        title: "Participant",
        event: "Traction অভ্যুদয়",
        description: "Participated in the national robotics competition focused on innovation and engineering",
        icon: <Award className="h-8 w-8" />,
        color: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
        iconColor: "text-orange-500",
    },
]

export function AwardsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Awards & Competitions</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Recognition and achievements from hackathons and robotics competitions
                    </p>
                </ScrollAnimation>

                <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {awards.map((award, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className={`h-full p-6 rounded-2xl border backdrop-blur-sm bg-gradient-to-br ${award.color} transition-all duration-300 text-center group`}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                                }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className={`mx-auto mb-4 p-4 rounded-2xl bg-card/50 inline-block ${award.iconColor}`}
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {award.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-1">
                                    {award.title}
                                </h3>
                                <p className="text-primary font-medium mb-3">
                                    {award.event}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {award.description}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
