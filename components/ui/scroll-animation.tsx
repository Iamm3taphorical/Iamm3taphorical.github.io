"use client"

import { useRef, ReactNode } from "react"
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
    duration = 0.4,
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    const getVariants = (): Variants => {
        const directions = {
            up: { y: 20, x: 0 },
            down: { y: -20, x: 0 },
            left: { y: 0, x: 20 },
            right: { y: 0, x: -20 },
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
                    duration,
                    delay,
                    ease: "easeOut",
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
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
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
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
