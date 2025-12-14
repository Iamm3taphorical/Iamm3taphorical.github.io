'use client'

import { cn } from '@/lib/utils'

export function ExperienceSection() {
    const experience = [
        {
            role: 'Co Founder',
            company: 'Projukti Lipi',
            date: '2025 - Present',
            desc: 'Promotes tech awareness and innovation among students. Leads projects, manages events, partnerships and community engagement.',
        },
        {
            role: 'Junior Team Member',
            company: 'BRACU Duburi',
            date: '2025 - Present',
            desc: 'Learning machine vision and AI for autonomous underwater vehicles.',
        },
        {
            role: 'Junior Team Member Control and AI Dept',
            company: 'BRACU Alter',
            date: '2025 - Present',
            desc: 'Learning autonomous rescue rover systems, control theory, stability, system modeling and intelligent navigation.',
        },
        {
            role: 'Junior Team Member Avionics Dept',
            company: 'BRACU Diganta',
            date: '2025 - Present',
            desc: 'Learning avionics systems, embedded programming, sensor integration, communication modules and UAV data handling.',
        },
        {
            role: 'Apprentice',
            company: 'Robotics Club of BRAC University ROBU',
            date: '2024 - Present',
            desc: 'Supported innovation projects, streamlined HR operations and improved team collaboration.',
        }
    ]

    return (
        <section id="experience" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Experience
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--japanese-red)] -ml-0.5 md:ml-0"></div>

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <div key={index} className={cn(
                                "relative flex flex-col md:flex-row items-center",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}>
                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                                    {index % 2 !== 0 && (
                                        <div className="hidden md:block">
                                            <ContentCard item={item} />
                                        </div>
                                    )}
                                    <div className="md:hidden">
                                        <ContentCard item={item} />
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-background border-4 border-[var(--japanese-red)] rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>

                                <div className="w-full md:w-1/2 pl-8 md:pl-12">
                                    {index % 2 === 0 && (
                                        <div className="hidden md:block">
                                            <ContentCard item={item} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContentCard({ item }: { item: any }) {
    return (
        <div className="bg-background p-6 rounded-lg shadow-lg relative border border-border">
            <h3 className="text-xl font-bold text-[var(--japanese-red)] mb-2">{item.role}</h3>
            <h4 className="text-lg font-medium text-[var(--secondary)] dark:text-[var(--secondary-foreground)] mb-1">{item.company}</h4>
            <div className="text-[var(--japanese-gold)] italic mb-2">{item.date}</div>
            <p className="text-muted-foreground">{item.desc}</p>
        </div>
    )
}
