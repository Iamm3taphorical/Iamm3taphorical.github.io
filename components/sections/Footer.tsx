'use client'

import { Linkedin, Github, Twitter, Instagram } from 'lucide-react'

export function Footer() {
    return (
        <footer className="py-12 bg-card text-center border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-8">
                    {[
                        { icon: <Linkedin className="h-5 w-5" />, href: '#' },
                        { icon: <Github className="h-5 w-5" />, href: '#' },
                        { icon: <Twitter className="h-5 w-5" />, href: '#' },
                        { icon: <Instagram className="h-5 w-5" />, href: '#' },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="w-12 h-12 rounded-full bg-[var(--japanese-red)] text-white flex items-center justify-center hover:bg-[var(--secondary)] hover:-translate-y-1 transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <div className="pt-6 border-t border-border/50">
                    <p className="text-muted-foreground">
                        &copy; 2025 Mahir Dyan. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
