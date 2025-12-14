'use client'

import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function EducationSection() {
    const education = [
        {
            degree: 'Bachelor of Science in Computer Science and Engineering',
            school: 'BRAC University',
            date: '2024 - Present',
            desc: 'Currently pursuing, maintaining a high academic standing with a focus on core computer science relationships and mathematics.',
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            school: 'Mohammadpur Government College',
            date: '2021 - 2023',
            desc: 'Achieved GPA 5.00/5.00. Active member of the Science Club.',
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            school: 'Ali Hossain Girls’ High School',
            date: '2019 - 2021',
            desc: 'Achieved GPA 5.00/5.00. Graduated with honors.',
        }
    ]

    return (
        <section id="education" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Education
                    </h2>
                </ScrollAnimation>

                <div className="grid gap-8 max-w-4xl mx-auto">
                    {education.map((item, index) => (
                        <ScrollAnimation key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border hover:border-[var(--japanese-red)] transition-all relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-[var(--japanese-red)] before:rounded-l-lg">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                                    <h4 className="text-lg font-medium text-[var(--secondary)] dark:text-[var(--secondary-foreground)]">{item.school}</h4>
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
