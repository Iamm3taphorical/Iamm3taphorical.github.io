'use client'

import { cn } from '@/lib/utils'

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        About Me
                    </h2>
                </div>

                {/* Bio */}
                <div className="max-w-4xl mx-auto text-lg leading-relaxed text-foreground space-y-6 text-center mb-16">
                    <p>
                        I’m a <strong>Computer Science & Engineering student</strong> at BRAC University (Dhaka, Bangladesh), passionate about <strong>software development</strong>, <strong>robotics</strong>, <strong>automation</strong>, and <strong>AI-driven solutions</strong>.
                    </p>
                    <p>
                        I build algorithms, explore machine vision and control systems, and develop full-stack web applications. My approach is collaborative, curious, and impact-focused.
                    </p>
                </div>

                {/* GitHub Stats */}
                <div className="flex flex-col items-center gap-8 overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                        <img src="https://github-readme-stats.vercel.app/api?username=Iamm3taphorical&show_icons=true&theme=tokyonight&count_private=true" alt="Mahir’s GitHub Stats" className="h-40 md:h-48" />
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Iamm3taphorical&layout=compact&theme=tokyonight" alt="Top Languages" className="h-40 md:h-48" />
                    </div>

                    <div className="w-full flex justify-center">
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Iamm3taphorical&theme=radical" alt="Profile Details" className="w-full max-w-2xl" />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center w-full">
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Iamm3taphorical&theme=radical" alt="Repos per Language" className="h-40 md:h-48" />
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Iamm3taphorical&theme=radical" alt="Most Commits" className="h-40 md:h-48" />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center w-full">
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Iamm3taphorical&theme=radical" alt="Stats" className="h-40 md:h-48" />
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Iamm3taphorical&theme=radical&utcOffset=6" alt="Productive Time" className="h-40 md:h-48" />
                    </div>

                    <div className="w-full flex justify-center">
                        <img src="https://streak-stats.demolab.com?user=Iamm3taphorical&theme=tokyonight" alt="GitHub Streak" className="w-full max-w-2xl" />
                    </div>

                    <div className="mt-8">
                        <img src="https://komarev.com/ghpvc/?username=Iamm3taphorical&label=Profile+Views&color=0e75b6&style=flat" alt="visitor-count" />
                    </div>
                </div>
            </div>
        </section>
    )
}
