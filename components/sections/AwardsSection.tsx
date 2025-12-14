'use client'

import { Trophy, Award } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function AwardsSection() {
    const awards = [
        {
            title: 'Top 8 Finalist',
            event: 'AI Hackathon',
            icon: <Trophy className="h-8 w-8 text-[var(--japanese-gold)]" />
        },
        {
            title: 'Participant',
            event: 'National Robotics Championship (NRC)',
            icon: <Award className="h-8 w-8 text-[var(--japanese-red)]" />
        },
        {
            title: 'Participant',
            event: 'Traction অভ্যুদয় (National Robotics Competition)',
            icon: <Award className="h-8 w-8 text-[var(--japanese-red)]" />
        }
    ]

    return (
        <section id="awards" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Awards & Competitions
                    </h2>
                </ScrollAnimation>

                <div className="flex flex-wrap justify-center gap-8">
                    {awards.map((item, index) => (
                        <ScrollAnimation key={index} className="bg-card p-8 rounded-xl shadow-lg border border-border flex flex-col items-center text-center w-64 hover:scale-105 transition-transform">
                            <div className="mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.event}</p>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
