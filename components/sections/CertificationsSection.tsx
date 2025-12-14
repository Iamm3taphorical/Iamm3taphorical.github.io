'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Bot, Code2, Brain, Cloud, Sparkles, Trophy, Users } from 'lucide-react'

const certifications = [
    {
        title: 'MERN Stack Development Workshop',
        issuer: 'IEEE CS BDC Team SPARK × Creative IT Institute',
        desc: '1-day intensive workshop providing foundational full-stack development training. Organized by IEEE BRACU SB.',
        icon: <Code2 className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7294616348519743488/',
        category: 'Development',
    },
    {
        title: 'National Robotics Championship 2025',
        issuer: 'Participation Certificate',
        desc: 'Competed at the national level in robotics challenges.',
        icon: <Bot className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7294717626667139074/',
        category: 'Robotics',
    },
    {
        title: 'Traction অভ্যুদয় Robotics Competition',
        issuer: 'OPPO × Robotics Club of BRAC University',
        desc: 'National-level competition. Competed in Prompt Engineering and Pathfinder (Line Following Robot).',
        icon: <Bot className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7303056970465378306/',
        category: 'Robotics',
    },
    {
        title: 'Introduction to Python',
        issuer: 'DataCamp',
        desc: 'Interactive, in-browser Python fundamentals course. Refreshed and sharpened foundational programming skills.',
        icon: <Code2 className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7338597869446176768/',
        category: 'Development',
    },
    {
        title: 'Microsoft AI Certification (Step 1)',
        issuer: 'Microsoft × NetCom Learning × AI CERTs',
        desc: 'Agent X: The AI Prompting Competition. First certification in AI prompt engineering journey.',
        icon: <Sparkles className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7338879893365026816/',
        category: 'AI',
    },
    {
        title: 'AI+ Foundation™ Certification',
        issuer: 'AI CERTs',
        desc: 'Foundational knowledge in AI systems, ethical AI development, and industry applications.',
        icon: <Brain className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7340074096891777024/',
        category: 'AI',
    },
    {
        title: 'Agent X Competition (Step 2 Part 2)',
        issuer: 'Microsoft × NetCom Learning × AI CERTs',
        desc: 'Advanced milestone in prompt engineering and intelligent agent design.',
        icon: <Sparkles className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7344077871314821122/',
        category: 'AI',
    },
    {
        title: 'Machine Learning Foundation',
        issuer: 'Amazon Web Services (AWS)',
        desc: 'AWS Labs certification covering ML concepts, cloud integration, and intelligent solutions.',
        icon: <Cloud className="h-6 w-6" />,
        link: 'https://lnkd.in/eyxmtjxT',
        category: 'Cloud & ML',
    },
    {
        title: 'Generative AI with AWS',
        issuer: 'Udacity × AWS',
        desc: 'Foundation models, prompt engineering, Amazon Bedrock & PartyRock. Built CodeApproach Advisor as final project.',
        icon: <Cloud className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7348818799007096837/',
        category: 'AI',
    },
    {
        title: 'Java Programming: Hands-On Training',
        issuer: 'Udemy',
        desc: 'Comprehensive course strengthening problem-solving and Java development skills.',
        icon: <Code2 className="h-6 w-6" />,
        link: 'https://lnkd.in/eaZGiEpq',
        category: 'Development',
    },
    {
        title: 'AI Hackathon 2025 - Finalist',
        issuer: 'Team Null_pointers_V3',
        desc: 'AI Flood Management System (AFMS): Predicts floods in advance, sends early SMS alerts to help communities prepare.',
        icon: <Users className="h-6 w-6" />,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7383522576943468545/',
        category: 'Competition',
        featured: true,
    },
]

const categories = ['All', 'AI', 'Development', 'Robotics', 'Cloud & ML', 'Competition']

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">Certifications & Achievements</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
                        Continuous learning through courses, competitions, and certifications
                    </p>
                </ScrollAnimation>

                {/* Featured Achievement */}
                {certifications.filter(c => c.featured).map((cert, idx) => (
                    <ScrollAnimation key={idx} delay={0.1} className="mb-10">
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 rounded-2xl border border-primary/30 p-6 md:p-8 hover:border-primary/50 transition-all"
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                                    <Trophy className="h-8 w-8" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                                            🏆 Featured Achievement
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-primary font-medium mt-1">{cert.issuer}</p>
                                    <p className="text-muted-foreground mt-2">{cert.desc}</p>
                                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                                        View on LinkedIn <ExternalLink className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    </ScrollAnimation>
                ))}

                {/* Certifications Grid */}
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {certifications.filter(c => !c.featured).map((cert, idx) => (
                        <StaggerItem key={idx}>
                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full bg-card/70 backdrop-blur-sm rounded-xl border border-border p-4 md:p-5 hover:border-primary/40 transition-all"
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-block px-2 py-0.5 rounded-md bg-secondary/60 text-[10px] md:text-xs font-medium text-muted-foreground mb-1.5">
                                            {cert.category}
                                        </span>
                                        <h3 className="font-bold text-foreground text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-xs text-primary/80 font-medium mt-0.5">{cert.issuer}</p>
                                    </div>
                                </div>
                                <p className="text-xs md:text-sm text-muted-foreground mt-3 line-clamp-2">
                                    {cert.desc}
                                </p>
                                <div className="flex items-center gap-1 mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    View Certificate
                                </div>
                            </motion.a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* LinkedIn CTA */}
                <ScrollAnimation delay={0.2} className="text-center mt-10">
                    <a
                        href="https://www.linkedin.com/in/mahir-dyan-47b396310/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-xl text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                        <Award className="h-4 w-4" />
                        View All on LinkedIn
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </ScrollAnimation>
            </div>
        </section>
    )
}
