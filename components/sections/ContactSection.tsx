'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { Mail, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react'
import { useSounds } from '@/components/ui/sound-provider'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahirdyan30@gmail.com', href: 'mailto:mahirdyan30@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/mahir-dyan-47b396310/' },
    { icon: Github, label: 'GitHub', value: '@Iamm3taphorical', href: 'https://github.com/Iamm3taphorical' },
]

export function ContactSection() {
    const { playClick } = useSounds()

    const handleSendMessage = () => {
        playClick()
        window.location.href = 'mailto:mahirdyan30@gmail.com?subject=Project%20Inquiry&body=Hi%20Mahir,%0A%0AI%20would%20like%20to%20discuss...'
    }

    return (
        <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
                        Open to collaboration on robotics, AI, and web development projects
                    </p>
                </ScrollAnimation>

                <div className="max-w-2xl mx-auto">
                    {/* Contact Info Cards */}
                    <ScrollAnimation delay={0.1} className="space-y-3 mb-8">
                        {contactInfo.map((item, index) => (
                            <div key={index}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-card/60 border border-border hover:border-primary/30 transition-colors group"
                                    >
                                        <div className="p-2 md:p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-muted-foreground">{item.label}</p>
                                            <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                                                {item.value}
                                            </p>
                                        </div>
                                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-card/60 border border-border">
                                        <div className="p-2 md:p-2.5 rounded-lg bg-primary/10 text-primary">
                                            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">{item.label}</p>
                                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ScrollAnimation>

                    {/* Send Message Button */}
                    <ScrollAnimation delay={0.2} className="text-center">
                        <motion.button
                            onClick={handleSendMessage}
                            className="w-full max-w-md py-4 px-8 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 mx-auto"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Send className="h-5 w-5" />
                            Send Message
                        </motion.button>
                        <p className="text-xs text-muted-foreground mt-3">
                            Opens your default email client
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}
