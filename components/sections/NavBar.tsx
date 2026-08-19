'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Waves, Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact']

export function NavBar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        setMounted(true)

        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50)

                    // Update active section
                    const scrollPosition = window.scrollY + 100
                    for (let i = navItems.length - 1; i >= 0; i--) {
                        const section = document.getElementById(navItems[i].toLowerCase())
                        if (section && section.offsetTop <= scrollPosition) {
                            setActiveSection(navItems[i].toLowerCase())
                            break
                        }
                    }
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-card/90 backdrop-blur-md shadow-sm py-2 border-b border-border/50'
                    : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, 'home')}
                    className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground group"
                >
                    <Waves className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    <span className="text-primary">
                        Mahir Dyan
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.toLowerCase()
                        return (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className={cn(
                                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                                    isActive
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                )}
                            >
                                {item}
                            </a>
                        )
                    })}

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="ml-3 p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === 'dark' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </button>
                </nav>

                {/* Mobile Controls */}
                <div className="lg:hidden flex items-center gap-2">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors"
                    >
                        {mounted && theme === 'dark' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-md border-b border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                    className={cn(
                                        "py-2.5 px-4 rounded-lg text-sm font-medium transition-colors",
                                        activeSection === item.toLowerCase()
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                    )}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
