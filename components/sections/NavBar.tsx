'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Waves, Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact']

export function NavBar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        setMounted(true)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].toLowerCase())
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-500',
                isScrolled
                    ? 'bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5 py-3 border-b border-border/50'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => scrollToSection(e, 'home')}
                    className="flex items-center gap-3 text-xl font-bold text-foreground group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="relative">
                        <Waves className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Mahir Dyan
                    </span>
                </motion.a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.toLowerCase()
                        return (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className={cn(
                                    "px-4 py-2 rounded-lg font-medium transition-all relative",
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        )
                    })}

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="ml-4 p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all"
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {mounted && theme === 'dark' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </motion.button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <motion.button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {mounted && theme === 'dark' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </motion.button>
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={cn(
                                        "py-3 px-4 rounded-lg font-medium transition-colors",
                                        activeSection === item.toLowerCase()
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                    )}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
