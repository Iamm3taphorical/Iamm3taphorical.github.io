'use client'

import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export function ContactSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thank you for your message! I will get back to you soon.')
        const form = e.target as HTMLFormElement
        form.reset()
    }

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Let's Collaborate
                    </h2>
                    <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
                        I’m always open to collaboration on robotics, web systems, and AI projects. Feel free to reach out for open-source contributions, mentorship, or hackathons.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-border">
                    {/* Contact Info */}
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[var(--japanese-red)] rounded-full flex items-center justify-center text-white shrink-0">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">Email</h3>
                                <p className="text-muted-foreground">mahirdyan30@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[var(--japanese-red)] rounded-full flex items-center justify-center text-white shrink-0">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">Phone</h3>
                                <p className="text-muted-foreground">+8801756543833</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[var(--japanese-red)] rounded-full flex items-center justify-center text-white shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">Location</h3>
                                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[var(--japanese-red)] rounded-full flex items-center justify-center text-white shrink-0">
                                <Linkedin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">LinkedIn</h3>
                                <p className="text-muted-foreground">linkedin.com/in/mahir-dyan-47b396310</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[var(--japanese-red)] rounded-full flex items-center justify-center text-white shrink-0">
                                <Github className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">GitHub</h3>
                                <p className="text-muted-foreground">github.com/lamm3taphorical</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                                <input type="text" id="name" required className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--japanese-red)] transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                                <input type="email" id="email" required className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--japanese-red)] transition-all" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                                <input type="text" id="subject" required className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--japanese-red)] transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                                <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--japanese-red)] transition-all"></textarea>
                            </div>
                            <button type="submit" className="px-8 py-3 bg-[var(--japanese-red)] text-white font-bold rounded hover:bg-transparent hover:text-[var(--japanese-red)] border-2 border-[var(--japanese-red)] transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
