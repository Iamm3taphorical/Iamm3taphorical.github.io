'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Trophy, Heart, ArrowUp } from 'lucide-react'

const socialLinks = [
    { href: "https://www.linkedin.com/in/mahir-dyan-47b396310/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Iamm3taphorical", icon: Github, label: "GitHub" },
    { href: "https://codeforces.com/profile/mahir.dyan", icon: Code2, label: "Codeforces" },
    { href: "https://leetcode.com/u/gnkF6xnyA4/", icon: Trophy, label: "LeetCode" },
    { href: "mailto:mahirdyan30@gmail.com", icon: Mail, label: "Email" },
]

const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Mahir Dyan
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-xs">
                            Computer Science & Engineering student passionate about robotics, AI, and building impactful software solutions.
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Dhaka, Bangladesh
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors inline-block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-6">
                            <a
                                href="mailto:mahirdyan30@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                mahirdyan30@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Mahir Dyan. All rights reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </motion.button>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </footer>
    )
}
