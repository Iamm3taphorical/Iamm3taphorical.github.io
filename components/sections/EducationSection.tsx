'use client'

import { cn } from '@/lib/utils'

export function EducationSection() {
    const education = [
        {
            degree: 'Bachelor of Computer Science and Engineering',
            school: 'BRAC University',
            date: '2023 - Present',
            location: 'Dhaka, Bangladesh',
        },
        {
            degree: 'Higher Secondary School Certificate',
            school: 'Mohammadpur Government College',
            date: '2020 - 2022',
            location: 'Dhaka, Bangladesh',
        },
        {
            degree: 'Secondary School Certificate',
            school: 'Dhanmondi Government Boys High School',
            date: '2017 - 2020',
            location: 'Dhaka, Bangladesh',
        },
        {
            degree: 'Primary School',
            school: 'Motijheel Government Boys High School',
            date: '2012 - 2017',
            location: 'Dhaka, Bangladesh',
        }
    ]

    return (
        <section id="education" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Education
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--japanese-red)] -ml-0.5 md:ml-0"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
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
                                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-card border-4 border-[var(--japanese-red)] rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>

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
        <div className="bg-card p-6 rounded-lg shadow-lg relative border border-border">
            <h3 className="text-xl font-bold text-[var(--japanese-red)] mb-2">{item.degree}</h3>
            <h4 className="text-lg font-medium text-[var(--secondary)] dark:text-[var(--secondary-foreground)] mb-1">{item.school}</h4>
            <div className="text-[var(--japanese-gold)] italic mb-2">{item.date}</div>
            <p className="text-muted-foreground">{item.location}</p>
            {/* Arrow for desktop - simplifies to just card for now */}
        </div>
    )
}
