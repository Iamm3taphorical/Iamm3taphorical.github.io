'use client'

import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">About Me</h2>
                </ScrollAnimation>

                {/* Bio */}
                <ScrollAnimation delay={0.1} className="max-w-4xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-6 text-center mb-16">
                    <p>
                        I'm a <span className="text-primary font-semibold">Computer Science & Engineering student</span> at BRAC University (Dhaka, Bangladesh), passionate about <span className="text-primary font-semibold">software development</span>, <span className="text-primary font-semibold">robotics</span>, <span className="text-primary font-semibold">automation</span>, and <span className="text-primary font-semibold">AI-driven solutions</span>.
                    </p>
                    <p>
                        I build algorithms, explore machine vision and control systems, and develop full-stack web applications. My approach is collaborative, curious, and impact-focused.
                    </p>
                </ScrollAnimation>

                {/* GitHub Stats */}
                <ScrollAnimation delay={0.2} className="space-y-8">
                    {/* Main Stats Row */}
                    <motion.div
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2"
                            whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)" }}
                        >
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=Iamm3taphorical&show_icons=true&theme=tokyonight&count_private=true&hide_border=true&bg_color=0d1117"
                                alt="Mahir's GitHub Stats"
                                className="h-40 md:h-48"
                            />
                        </motion.div>
                        <motion.div
                            className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2"
                            whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)" }}
                        >
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Iamm3taphorical&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117"
                                alt="Top Languages"
                                className="h-40 md:h-48"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Profile Details */}
                    <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2 w-full max-w-3xl">
                            <img
                                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Iamm3taphorical&theme=tokyonight"
                                alt="Profile Details"
                                className="w-full"
                            />
                        </div>
                    </motion.div>

                    {/* Language Stats */}
                    <div className="flex flex-wrap gap-6 justify-center">
                        <motion.div
                            className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2"
                            whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)" }}
                        >
                            <img
                                src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Iamm3taphorical&theme=tokyonight"
                                alt="Repos per Language"
                                className="h-40 md:h-44"
                            />
                        </motion.div>
                        <motion.div
                            className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2"
                            whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)" }}
                        >
                            <img
                                src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Iamm3taphorical&theme=tokyonight"
                                alt="Most Commits"
                                className="h-40 md:h-44"
                            />
                        </motion.div>
                    </div>

                    {/* Activity Stats */}
                    <div className="flex flex-wrap gap-6 justify-center">
                        <motion.div
                            className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2"
                            whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)" }}
                        >
                            <img
                                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Iamm3taphorical&theme=tokyonight"
                                alt="Stats"
                                className="h-40 md:h-44"
                            />
                        </motion.div>
                        <motion.div
                            className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2"
                            whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)" }}
                        >
                            <img
                                src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Iamm3taphorical&theme=tokyonight&utcOffset=6"
                                alt="Productive Time"
                                className="h-40 md:h-44"
                            />
                        </motion.div>
                    </div>

                    {/* Streak */}
                    <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="card-3d rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-2 w-full max-w-2xl">
                            <img
                                src="https://streak-stats.demolab.com?user=Iamm3taphorical&theme=tokyonight&hide_border=true&background=0d1117"
                                alt="GitHub Streak"
                                className="w-full"
                            />
                        </div>
                    </motion.div>

                    {/* Profile Views */}
                    <div className="flex justify-center pt-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="rounded-full overflow-hidden"
                        >
                            <img
                                src="https://komarev.com/ghpvc/?username=Iamm3taphorical&label=Profile+Views&color=3b82f6&style=for-the-badge"
                                alt="visitor-count"
                            />
                        </motion.div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
