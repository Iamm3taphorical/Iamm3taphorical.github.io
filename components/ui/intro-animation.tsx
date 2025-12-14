"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface IntroAnimationProps {
    children: React.ReactNode
    className?: string
}

// Typewriter text sequences
const codeSequences = [
    { text: 'System.out.println("', delay: 0 },
    { text: 'Hello World!', delay: 800, isHighlight: true },
    { text: '");', delay: 1800 },
]

const INTRO_DURATION = 3500 // Total intro duration
const SESSION_KEY = 'portfolio_intro_shown'

export function IntroAnimation({ children, className }: IntroAnimationProps) {
    const [showIntro, setShowIntro] = useState(true)
    const [displayedText, setDisplayedText] = useState('')
    const [currentSequence, setCurrentSequence] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)

    // Check if intro was already shown this session
    useEffect(() => {
        if (typeof window === 'undefined') return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

        // Check sessionStorage
        const introShown = sessionStorage.getItem(SESSION_KEY)

        if (introShown || prefersReducedMotion) {
            setShowIntro(false)
            return
        }

        // Mark as shown for this session
        sessionStorage.setItem(SESSION_KEY, 'true')
        setIsTyping(true)
    }, [])

    // Typewriter effect
    useEffect(() => {
        if (!isTyping || currentSequence >= codeSequences.length) return

        const sequence = codeSequences[currentSequence]
        const text = sequence.text

        // Wait for initial delay
        const startDelay = currentSequence === 0 ? 500 : 100

        const delayTimer = setTimeout(() => {
            if (charIndex < text.length) {
                const typeTimer = setTimeout(() => {
                    setDisplayedText(prev => prev + text[charIndex])
                    setCharIndex(prev => prev + 1)
                }, 50 + Math.random() * 30) // Vary typing speed slightly

                return () => clearTimeout(typeTimer)
            } else {
                // Move to next sequence
                setCurrentSequence(prev => prev + 1)
                setCharIndex(0)
            }
        }, charIndex === 0 ? startDelay : 0)

        return () => clearTimeout(delayTimer)
    }, [isTyping, currentSequence, charIndex])

    // Fade out after typing completes
    useEffect(() => {
        if (currentSequence >= codeSequences.length && !isFadingOut) {
            const fadeTimer = setTimeout(() => {
                setIsFadingOut(true)
            }, 800) // Pause after typing completes

            const hideTimer = setTimeout(() => {
                setShowIntro(false)
            }, INTRO_DURATION)

            return () => {
                clearTimeout(fadeTimer)
                clearTimeout(hideTimer)
            }
        }
    }, [currentSequence, isFadingOut])

    // Skip intro on click/keypress
    const skipIntro = useCallback(() => {
        setIsFadingOut(true)
        setTimeout(() => setShowIntro(false), 300)
    }, [])

    useEffect(() => {
        if (!showIntro) return

        const handleSkip = (e: KeyboardEvent | MouseEvent) => {
            if (e.type === 'keydown' && (e as KeyboardEvent).key === 'Escape') {
                skipIntro()
            }
        }

        window.addEventListener('keydown', handleSkip)
        return () => window.removeEventListener('keydown', handleSkip)
    }, [showIntro, skipIntro])

    if (!showIntro) {
        return <>{children}</>
    }

    // Render highlighted portions
    const renderText = () => {
        // Build up the complete typed text with highlighting
        let fullText = ''
        let highlightStart = -1
        let highlightEnd = -1

        for (let i = 0; i <= currentSequence && i < codeSequences.length; i++) {
            const seq = codeSequences[i]
            const textToAdd = i === currentSequence
                ? seq.text.substring(0, charIndex)
                : seq.text

            if (seq.isHighlight) {
                highlightStart = fullText.length
                highlightEnd = highlightStart + textToAdd.length
            }
            fullText += textToAdd
        }

        if (highlightStart >= 0 && highlightEnd > highlightStart) {
            return (
                <>
                    <span className="text-muted-foreground">{fullText.substring(0, highlightStart)}</span>
                    <span className="text-primary font-bold">{fullText.substring(highlightStart, highlightEnd)}</span>
                    <span className="text-muted-foreground">{fullText.substring(highlightEnd)}</span>
                </>
            )
        }

        return <span className="text-muted-foreground">{fullText}</span>
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {showIntro && (
                    <motion.div
                        key="intro"
                        className={cn(
                            "fixed inset-0 z-[100] flex items-center justify-center bg-background cursor-pointer",
                            className
                        )}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isFadingOut ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        onClick={skipIntro}
                    >
                        {/* Code display */}
                        <div className="relative">
                            {/* Terminal-style container */}
                            <motion.div
                                className="px-8 py-6 rounded-xl bg-card/80 backdrop-blur-md border border-border/50 shadow-2xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-4 text-xs text-muted-foreground font-mono">
                                        portfolio.java
                                    </span>
                                </div>

                                {/* Code text */}
                                <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                    {renderText()}
                                    <motion.span
                                        className="inline-block w-[2px] h-[1.2em] bg-primary ml-[2px] align-middle"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                                    />
                                </div>
                            </motion.div>

                            {/* Skip hint */}
                            <motion.p
                                className="text-center mt-6 text-xs text-muted-foreground/60"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                Click anywhere or press ESC to skip
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content - always rendered but hidden during intro */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showIntro ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default IntroAnimation
