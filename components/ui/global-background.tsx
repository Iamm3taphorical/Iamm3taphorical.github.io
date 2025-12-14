"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    life: number
    initialSize: number
    hue: number
}

export function GlobalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mousePosRef = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number | null>(null)
    const lastTimeRef = useRef(0)
    const hueRef = useRef(200) // Start with blue hue

    const createParticle = useCallback((x: number, y: number): Particle => {
        return {
            x,
            y,
            size: Math.random() * 4 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: -Math.random() * 2 - 0.5,
            life: 80,
            initialSize: Math.random() * 4 + 1,
            hue: hueRef.current,
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        // Mouse move handler - optimized with throttling
        let lastMoveTime = 0
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now()
            if (now - lastMoveTime < 16) return // ~60fps throttle
            lastMoveTime = now

            mousePosRef.current = { x: e.clientX, y: e.clientY }

            // Add particles on mouse move (limited)
            if (particlesRef.current.length < 100) {
                for (let i = 0; i < 2; i++) {
                    particlesRef.current.push(
                        createParticle(
                            e.clientX + (Math.random() * 20 - 10),
                            e.clientY + (Math.random() * 20 - 10)
                        )
                    )
                }
            }
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0]
                mousePosRef.current = { x: touch.clientX, y: touch.clientY }

                if (particlesRef.current.length < 50) {
                    particlesRef.current.push(
                        createParticle(touch.clientX, touch.clientY)
                    )
                }
            }
        }

        // Animation loop - optimized
        const animate = (timestamp: number) => {
            // Limit to ~30fps for performance
            if (timestamp - lastTimeRef.current < 33) {
                animationFrameRef.current = requestAnimationFrame(animate)
                return
            }
            lastTimeRef.current = timestamp

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update hue slowly for color cycling
            hueRef.current = (hueRef.current + 0.2) % 360

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter((particle) => {
                if (particle.life <= 0 || particle.size <= 0) return false

                // Update particle
                particle.x += particle.speedX
                particle.y += particle.speedY
                particle.life -= 1.5
                particle.size = Math.max(0, particle.initialSize * (particle.life / 80))

                // Draw particle
                if (particle.size > 0) {
                    const opacity = (particle.life / 80) * 0.4
                    ctx.beginPath()
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                    ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${opacity})`
                    ctx.fill()
                }

                return true
            })

            // Draw cursor glow (simple gradient)
            if (mousePosRef.current.x > 0 && mousePosRef.current.y > 0) {
                const gradient = ctx.createRadialGradient(
                    mousePosRef.current.x,
                    mousePosRef.current.y,
                    0,
                    mousePosRef.current.x,
                    mousePosRef.current.y,
                    100
                )
                gradient.addColorStop(0, `hsla(${hueRef.current}, 80%, 60%, 0.15)`)
                gradient.addColorStop(1, "transparent")
                ctx.fillStyle = gradient
                ctx.fillRect(
                    mousePosRef.current.x - 100,
                    mousePosRef.current.y - 100,
                    200,
                    200
                )
            }

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        // Start animation
        animationFrameRef.current = requestAnimationFrame(animate)

        // Add event listeners with passive flag for performance
        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        window.addEventListener("touchmove", handleTouchMove, { passive: true })

        return () => {
            window.removeEventListener("resize", updateCanvasSize)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("touchmove", handleTouchMove)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [createParticle])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                mixBlendMode: "screen",
                opacity: 0.8
            }}
        />
    )
}

export default GlobalBackground
