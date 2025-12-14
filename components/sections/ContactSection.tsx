'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahirdyan30@gmail.com', href: 'mailto:mahirdyan30@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+8801756543833', href: 'tel:+8801756543833' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/mahir-dyan-47b396310/' },
    { icon: Github, label: 'GitHub', value: '@Iamm3taphorical', href: 'https://github.com/Iamm3taphorical' },
]

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const mailtoLink = `mailto:mahirdyan30@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`

        window.location.href = mailtoLink
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

                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
                        {/* Contact Info */}
                        <ScrollAnimation delay={0.1} className="lg:col-span-2 space-y-3">
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

                        {/* Contact Form */}
                        <ScrollAnimation delay={0.2} className="lg:col-span-3">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-card/60 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-border space-y-4 md:space-y-6"
                            >
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2.5 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2.5 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2.5 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className="w-full px-3 py-2.5 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send className="h-4 w-4" />
                                    Send Message
                                </motion.button>

                                <p className="text-xs text-center text-muted-foreground">
                                    Opens your email client with message pre-filled
                                </p>
                            </form>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}
