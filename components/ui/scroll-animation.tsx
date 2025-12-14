"use client"

import { useRef, ReactNode, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, Variants, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

// Page flip wrapper for sections - creates book page turning effect
interface PageFlipSectionProps {
    children: ReactNode
    className?: string
    index: number
}

export function PageFlipSection({ children, className, index }: PageFlipSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Smooth spring for the rotation
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

    // Calculate rotation based on scroll - page flip from left to right
    const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [15, 0, 0, -15])
    const smoothRotateY = useSpring(rotateY, springConfig)

    // Shadow intensity changes with rotation
    const shadowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0, 0, 0.3])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95])
    const smoothScale = useSpring(scale, springConfig)

    return (
        <motion.div
            ref={ref}
            style={{
                rotateY: smoothRotateY,
                scale: smoothScale,
                transformPerspective: 1200,
                transformOrigin: index % 2 === 0 ? "left center" : "right center",
            }}
            className={cn(
                "relative will-change-transform",
                className
            )}
        >
            {/* Page shadow effect */}
            <motion.div
                style={{ opacity: shadowOpacity }}
                className={cn(
                    "absolute inset-0 pointer-events-none z-10",
                    index % 2 === 0
                        ? "bg-gradient-to-r from-black/20 to-transparent"
                        : "bg-gradient-to-l from-black/20 to-transparent"
                )}
            />
            {children}
        </motion.div>
    )
}

// Standard scroll animation component
interface ScrollAnimationProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "scale"
    duration?: number
    once?: boolean
}

export function ScrollAnimation({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, margin: "-50px" })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    const getVariants = (): Variants => {
        // Reduced motion for mobile
        const distance = isMobile ? 20 : 30

        const directions = {
            up: { y: distance, x: 0 },
            down: { y: -distance, x: 0 },
            left: { y: 0, x: distance },
            right: { y: 0, x: -distance },
            scale: { y: 0, x: 0 },
        }

        const { x, y } = directions[direction]

        return {
            hidden: {
                opacity: 0,
                y,
                x,
                scale: direction === "scale" ? 0.95 : 1,
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                transition: {
                    duration: isMobile ? duration * 0.7 : duration,
                    delay: isMobile ? delay * 0.5 : delay,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            },
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={cn("will-change-transform", className)}
        >
            {children}
        </motion.div>
    )
}

// Stagger container for grouped animations
interface StaggerContainerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.08,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-30px" })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? staggerDelay * 0.5 : staggerDelay,
                delayChildren: 0.05,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    }

    return (
        <motion.div variants={itemVariants} className={cn("will-change-transform", className)}>
            {children}
        </motion.div>
    )
}

export default ScrollAnimation
