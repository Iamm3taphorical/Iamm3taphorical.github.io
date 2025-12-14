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
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-card/50 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-primary">
                            Mahir Dyan
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                            CS & Engineering student passionate about robotics, AI, and software development.
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in Dhaka
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Connect</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                        <a
                            href="mailto:mahirdyan30@gmail.com"
                            className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                            mahirdyan30@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Mahir Dyan. All rights reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}
