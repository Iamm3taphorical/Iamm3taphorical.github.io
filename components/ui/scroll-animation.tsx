"use client"

import { useRef, ReactNode, useEffect, useState } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

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
                filter: isMobile ? "none" : "blur(4px)",
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
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
