"use client"

import * as React from "react"
import { useState, useRef, useCallback } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { MousePointerClick } from "lucide-react"

interface ParticleButtonProps extends ButtonProps {
    onSuccess?: () => void
    successDuration?: number
    showIcon?: boolean
    particleCount?: number
}

interface Particle {
    id: number
    x: number
    y: number
    angle: number
    speed: number
}

function SuccessParticles({
    buttonRef,
    particleCount = 8,
}: {
    buttonRef: React.RefObject<HTMLButtonElement | null>
    particleCount?: number
}) {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return null

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Generate particles in a circle pattern
    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: centerX,
        y: centerY,
        angle: (i / particleCount) * Math.PI * 2 + Math.random() * 0.5,
        speed: 40 + Math.random() * 30,
    }))

    return (
        <AnimatePresence>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        background: `hsl(${(particle.id / particleCount) * 360}, 80%, 60%)`,
                        boxShadow: `0 0 6px hsl(${(particle.id / particleCount) * 360}, 80%, 60%)`,
                    }}
                    initial={{
                        scale: 0,
                        x: 0,
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        scale: [0, 1.5, 0],
                        x: Math.cos(particle.angle) * particle.speed,
                        y: Math.sin(particle.angle) * particle.speed - 20, // slight upward bias
                        opacity: [1, 1, 0],
                    }}
                    transition={{
                        duration: 0.6,
                        delay: particle.id * 0.02,
                        ease: "easeOut",
                    }}
                />
            ))}
        </AnimatePresence>
    )
}

// Audio context singleton for better performance
let audioContext: AudioContext | null = null

function getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null

    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
        } catch {
            return null
        }
    }
    return audioContext
}

function playClickSound() {
    const ctx = getAudioContext()
    if (!ctx) return

    try {
        // Resume context if suspended (browser autoplay policy)
        if (ctx.state === 'suspended') {
            ctx.resume()
        }

        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)

        // Pleasant click sound - higher pitch with quick decay
        oscillator.frequency.setValueAtTime(880, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1)
        oscillator.type = 'sine'

        gainNode.gain.setValueAtTime(0.15, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)

        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.1)
    } catch {
        // Audio not supported or blocked
    }
}

function ParticleButton({
    children,
    onClick,
    onSuccess,
    successDuration = 600,
    showIcon = true,
    particleCount = 8,
    className,
    disabled,
    ...props
}: ParticleButtonProps) {
    const [showParticles, setShowParticles] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined'
        && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return

        // Play sound
        playClickSound()

        // Trigger particles (unless reduced motion)
        if (!prefersReducedMotion) {
            setShowParticles(true)
            setIsPressed(true)

            setTimeout(() => {
                setShowParticles(false)
                setIsPressed(false)
                onSuccess?.()
            }, successDuration)
        } else {
            onSuccess?.()
        }

        // Call original onClick
        onClick?.(e)
    }, [disabled, onClick, onSuccess, successDuration, prefersReducedMotion])

    return (
        <>
            {showParticles && (
                <SuccessParticles
                    buttonRef={buttonRef}
                    particleCount={particleCount}
                />
            )}
            <Button
                ref={buttonRef}
                onClick={handleClick}
                disabled={disabled}
                className={cn(
                    "relative overflow-visible",
                    isPressed && "scale-95",
                    "transition-transform duration-100 ease-out",
                    className
                )}
                {...props}
            >
                {children}
                {showIcon && (
                    <MousePointerClick className="h-4 w-4 ml-2 opacity-70" />
                )}
            </Button>
        </>
    )
}

export { ParticleButton }
export type { ParticleButtonProps }
