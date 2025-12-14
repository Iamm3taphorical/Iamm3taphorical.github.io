'use client'

import { cn } from '@/lib/utils'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function ExperienceSection() {
    const experience = [
        {
            role: 'Co-Founder',
            company: 'Projukti Lipi',
            date: '2025 - Present',
            desc: 'Co-founded a student tech initiative focused on promoting tech awareness, leading projects, partnerships, and community events.',
        },
        {
            role: 'Team Member (Machine Vision & AI)',
            company: 'BRACU Duburi',
            date: '2025 - Present',
            desc: 'Working on machine vision and AI subsystems for an autonomous underwater vehicle: object detection, navigation, and real-time decision pipelines.',
        },
        {
            role: 'Team Member (Control & AI)',
            company: 'BRACU Alter',
            date: '2025 - Present',
            desc: 'Contributing to autonomous rescue rover systems — control theory, system modeling, stability analysis, and AI navigation modules.',
        },
        {
            role: 'Team Member (Avionics)',
            company: 'BRACU Diganta',
            date: '2025 - Present',
            desc: 'Developing avionics and embedded software for UAVs: sensor integration, communication modules, and flight data handling.',
        },
        {
            role: 'Apprentice',
            company: 'Robotics Club of BRAC University (ROBU)',
            date: '2024 - Present',
            desc: 'Supported robotics projects by streamlining HR operations, coordinating members, and improving collaboration across project teams. Participated in hands-on robotics prototyping and testing workflows.',
        },
        {
            role: 'Executive',
            company: 'BRAC University Computer Club (BUCC)',
            date: '2024 - Present',
            desc: 'Managed member engagement and community activities, organized workshops and coding sessions, and assisted in club project coordination.',
        },
        {
            role: 'General Member',
            company: 'IEEE BRACU Student Branch',
            date: '2024 - Present',
            desc: 'Engaged in research collaboration initiatives and technical events to strengthen the student research ecosystem.',
        },
        {
            role: 'HR & Strategic Planner',
            company: 'Mohammadpur Government College Science Club',
            date: '2021 - 2022',
            desc: 'Led member engagement and event organization to grow the club’s activities and outreach.',
        }
    ]

    return (
        <section id="experience" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Experience
                    </h2>
                </ScrollAnimation>

                <div className="grid gap-8 max-w-4xl mx-auto">
                    {experience.map((item, index) => (
                        <ScrollAnimation key={index} className="bg-background p-6 rounded-lg shadow-lg border border-border hover:border-[var(--japanese-red)] transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--japanese-red)]">{item.role}</h3>
                                    <h4 className="text-lg font-medium text-[var(--secondary)] dark:text-[var(--secondary-foreground)]">{item.company}</h4>
                                </div>
                                <div className="text-[var(--japanese-gold)] italic mt-2 md:mt-0 whitespace-nowrap">{item.date}</div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
