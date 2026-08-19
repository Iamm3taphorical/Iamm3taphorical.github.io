'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { Terminal, Globe, Database, CircuitBoard, Layers, Users, Brain, Wrench } from 'lucide-react'

const skills = [
    { category: 'Programming Languages', icon: <Terminal className="h-5 w-5" />, items: ['Java', 'Python', 'C', 'C++', 'C#', 'Rust', 'Go'] },
    { category: 'Web & Backend', icon: <Globe className="h-5 w-5" />, items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'PHP'] },
    { category: 'Data & Databases', icon: <Database className="h-5 w-5" />, items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'REST APIs'] },
    { category: 'AI & Machine Learning', icon: <Brain className="h-5 w-5" />, items: ['OpenCV', 'YOLOv8', 'Generative AI', 'scikit-learn', 'Matplotlib', 'CVAT'] },
    { category: 'Robotics & Embedded', icon: <CircuitBoard className="h-5 w-5" />, items: ['ROS', 'Arduino', 'Embedded C', 'Gazebo Sim', 'Control Systems', 'Autonomous Systems'] },
    { category: 'Tools & DevOps', icon: <Wrench className="h-5 w-5" />, items: ['Git', 'Docker', 'Kubernetes', 'Tailwind CSS', 'Three.js', 'Electron', 'Postman'] },
    { category: 'Engineering Practices', icon: <Layers className="h-5 w-5" />, items: ['OOP', 'Data Structures & Algorithms', 'Modular Design', 'CI/CD', 'Technical Documentation'] },
    { category: 'Collaboration', icon: <Users className="h-5 w-5" />, items: ['Leadership', 'Team Coordination', 'Technical Writing', 'Community Management'] },
]

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">A practical toolkit spanning software, AI, robotics, and collaborative engineering.</p>
                </ScrollAnimation>
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {skills.map((category) => (
                        <StaggerItem key={category.category}>
                            <div className="h-full bg-card/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group">
                                <div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{category.icon}</div><h3 className="text-base font-bold text-foreground">{category.category}</h3></div>
                                <div className="flex flex-wrap gap-1.5">{category.items.map((skill) => <span key={skill} className="px-2 py-1 rounded-md bg-secondary/60 text-xs font-medium text-muted-foreground">{skill}</span>)}</div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
