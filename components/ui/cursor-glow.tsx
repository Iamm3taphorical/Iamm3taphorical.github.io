"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CursorGlow() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }
    const smoothX = useSpring(cursorX, springConfig)
    const smoothY = useSpring(cursorY, springConfig)

    const requestRef = useRef<number | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        // Check for interactive elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isInteractive = Boolean(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive')
            )

            setIsHovering(isInteractive)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseenter", handleMouseEnter)
        window.addEventListener("mouseleave", handleMouseLeave)
        window.addEventListener("mouseover", handleElementHover)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseenter", handleMouseEnter)
            window.removeEventListener("mouseleave", handleMouseLeave)
            window.removeEventListener("mouseover", handleElementHover)
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current)
            }
        }
    }, [cursorX, cursorY, isVisible])

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null
    }

    return (
        <>
            {/* Main glow */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ duration: 0.15 }}
            >
                <div
                    className={`rounded-full transition-all duration-300 ${isHovering
                        ? 'w-16 h-16 bg-gradient-radial from-sky-400/30 to-transparent'
                        : 'w-8 h-8 bg-gradient-radial from-sky-400/40 to-transparent'
                        }`}
                    style={{
                        boxShadow: isHovering
                            ? '0 0 60px 20px rgba(56, 189, 248, 0.3), 0 0 100px 40px rgba(56, 189, 248, 0.15)'
                            : '0 0 40px 10px rgba(56, 189, 248, 0.2), 0 0 60px 20px rgba(56, 189, 248, 0.1)',
                    }}
                />
            </motion.div>

            {/* Trail effect */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 0.5 : 0,
                }}
            >
                <div
                    className="w-64 h-64 rounded-full bg-gradient-radial from-sky-500/10 via-blue-500/5 to-transparent blur-2xl"
                />
            </motion.div>
        </>
    )
}

export default CursorGlow
