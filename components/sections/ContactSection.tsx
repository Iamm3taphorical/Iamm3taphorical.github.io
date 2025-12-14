'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, ExternalLink } from 'lucide-react'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahirdyan30@gmail.com', href: 'mailto:mahirdyan30@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+8801756543833', href: 'tel:+8801756543833' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'mahir-dyan-47b396310', href: 'https://www.linkedin.com/in/mahir-dyan-47b396310/' },
    { icon: Github, label: 'GitHub', value: '@Iamm3taphorical', href: 'https://github.com/Iamm3taphorical' },
]

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Create mailto link with form data
        const mailtoLink = `mailto:mahirdyan30@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`

        // Open mail client
        window.location.href = mailtoLink

        // Show success state briefly
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setTimeout(() => setIsSubmitted(false), 3000)
        }, 500)
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Let's Collaborate</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Open to collaboration on robotics, web systems, and AI projects.
                        Reach out for open-source contributions, mentorship, or hackathons!
                    </p>
                </ScrollAnimation>

                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Info */}
                        <ScrollAnimation delay={0.1} className="lg:col-span-2 space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group"
                                        >
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                                                    {item.value}
                                                </p>
                                            </div>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border">
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="font-medium text-foreground">{item.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </ScrollAnimation>

                        {/* Contact Form */}
                        <ScrollAnimation delay={0.2} className="lg:col-span-3">
                            <motion.form
                                onSubmit={handleSubmit}
                                className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border space-y-6"
                                whileHover={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)" }}
                            >
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/50"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 btn-glow"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="h-5 w-5" />
                                            Opening Mail Client...
                                        </>
                                    ) : isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-center text-muted-foreground">
                                    This will open your default email client with the message pre-filled
                                </p>
                            </motion.form>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}
