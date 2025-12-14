"use client"

// Canvas-based animated line trails following cursor - rainbow color cycling effect
// Optimized for 60fps desktop / 30fps mobile with proper cleanup

interface NodePoint {
    x: number
    y: number
    vx: number
    vy: number
}

interface LineTrail {
    spring: number
    friction: number
    nodes: NodePoint[]
    update: () => void
    draw: () => void
}

interface Oscillator {
    phase: number
    offset: number
    frequency: number
    amplitude: number
    update: () => number
}

// Module-level state (managed carefully)
let ctx: CanvasRenderingContext2D | null = null
let oscillator: Oscillator | null = null
let hueValue = 0
let pos = { x: 0, y: 0 }
let lines: LineTrail[] = []
let animationId: number | null = null
let lastFrameTime = 0
let isInitialized = false
let eventListenersAttached = false

// Configuration - dynamically set based on device
const getConfig = () => {
    const isMobile = typeof window !== 'undefined' &&
        (window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0)

    return {
        friction: 0.5,
        trails: isMobile ? 30 : 60,      // Fewer trails on mobile
        size: isMobile ? 25 : 40,        // Smaller nodes on mobile
        dampening: 0.025,
        tension: 0.99,
        targetFPS: isMobile ? 30 : 60,   // Lower FPS on mobile
        lineWidth: isMobile ? 6 : 10,
        opacity: isMobile ? 0.03 : 0.025,
    }
}

let config = getConfig()

function createNode(x: number, y: number): NodePoint {
    return { x, y, vx: 0, vy: 0 }
}

function createOscillator(opts: Partial<Oscillator>): Oscillator {
    return {
        phase: opts.phase || 0,
        offset: opts.offset || 0,
        frequency: opts.frequency || 0.001,
        amplitude: opts.amplitude || 1,
        update() {
            this.phase += this.frequency
            hueValue = this.offset + Math.sin(this.phase) * this.amplitude
            return hueValue
        }
    }
}

function createLine(spring: number): LineTrail {
    const lineSpring = spring + 0.1 * Math.random() - 0.05
    const lineFriction = config.friction + 0.01 * Math.random() - 0.005
    const nodes: NodePoint[] = []

    for (let i = 0; i < config.size; i++) {
        nodes.push(createNode(pos.x, pos.y))
    }

    return {
        spring: lineSpring,
        friction: lineFriction,
        nodes,
        update() {
            let currentSpring = this.spring
            let node = this.nodes[0]

            node.vx += (pos.x - node.x) * currentSpring
            node.vy += (pos.y - node.y) * currentSpring

            for (let i = 0; i < this.nodes.length; i++) {
                node = this.nodes[i]

                if (i > 0) {
                    const prev = this.nodes[i - 1]
                    node.vx += (prev.x - node.x) * currentSpring
                    node.vy += (prev.y - node.y) * currentSpring
                    node.vx += prev.vx * config.dampening
                    node.vy += prev.vy * config.dampening
                }

                node.vx *= this.friction
                node.vy *= this.friction
                node.x += node.vx
                node.y += node.vy
                currentSpring *= config.tension
            }
        },
        draw() {
            if (!ctx) return

            const firstNode = this.nodes[0]
            ctx.beginPath()
            ctx.moveTo(firstNode.x, firstNode.y)

            for (let i = 1; i < this.nodes.length - 2; i++) {
                const node = this.nodes[i]
                const nextNode = this.nodes[i + 1]
                const x = 0.5 * (node.x + nextNode.x)
                const y = 0.5 * (node.y + nextNode.y)
                ctx.quadraticCurveTo(node.x, node.y, x, y)
            }

            const secondLast = this.nodes[this.nodes.length - 2]
            const last = this.nodes[this.nodes.length - 1]
            if (secondLast && last) {
                ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y)
            }

            ctx.stroke()
        }
    }
}

function initLines() {
    lines = []
    for (let i = 0; i < config.trails; i++) {
        lines.push(createLine(0.45 + (i / config.trails) * 0.025))
    }
}

// Event handlers with proper binding
function handleMove(e: MouseEvent | TouchEvent) {
    if ('touches' in e && e.touches.length > 0) {
        pos.x = e.touches[0].pageX
        pos.y = e.touches[0].pageY
    } else if ('clientX' in e) {
        pos.x = e.clientX
        pos.y = e.clientY
    }
}

function handleFirstInteraction(e: MouseEvent | TouchEvent) {
    // Remove first interaction listeners
    document.removeEventListener('mousemove', handleFirstInteraction)
    document.removeEventListener('touchstart', handleFirstInteraction)

    // Add continuous tracking
    document.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('touchmove', handleMove, { passive: true })
    document.addEventListener('touchstart', handleMove, { passive: true })

    // Initialize position and start
    handleMove(e)
    initLines()

    if (!animationId) {
        lastFrameTime = performance.now()
        render()
    }
}

function render() {
    if (!ctx || !isInitialized) return

    const now = performance.now()
    const elapsed = now - lastFrameTime
    const frameInterval = 1000 / config.targetFPS

    // Frame rate limiting
    if (elapsed < frameInterval) {
        animationId = requestAnimationFrame(render)
        return
    }

    lastFrameTime = now - (elapsed % frameInterval)

    // Clear and draw
    ctx.globalCompositeOperation = 'source-over'
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.globalCompositeOperation = 'lighter'

    if (oscillator) {
        ctx.strokeStyle = `hsla(${Math.round(oscillator.update())}, 100%, 50%, ${config.opacity})`
    }
    ctx.lineWidth = config.lineWidth

    for (let i = 0; i < lines.length; i++) {
        lines[i].update()
        lines[i].draw()
    }

    animationId = requestAnimationFrame(render)
}

function resizeCanvas() {
    if (!ctx) return

    // Use devicePixelRatio for crisp rendering on high-DPI displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2x for performance
    const width = window.innerWidth
    const height = window.innerHeight

    ctx.canvas.width = width * dpr
    ctx.canvas.height = height * dpr
    ctx.canvas.style.width = `${width}px`
    ctx.canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    // Recalculate config on resize (device might rotate)
    config = getConfig()
}

export function renderCanvas() {
    if (typeof window === 'undefined') return
    if (isInitialized) return // Prevent double initialization

    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) return

    ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    isInitialized = true

    // Initialize oscillator for rainbow colors
    oscillator = createOscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    })

    // Set initial position to center
    pos.x = window.innerWidth / 2
    pos.y = window.innerHeight / 2

    // Setup resize handler
    window.addEventListener('resize', resizeCanvas, { passive: true })
    window.addEventListener('orientationchange', resizeCanvas, { passive: true })

    // Initial resize
    resizeCanvas()

    // Setup interaction listeners (only once)
    if (!eventListenersAttached) {
        document.addEventListener('mousemove', handleFirstInteraction, { passive: true })
        document.addEventListener('touchstart', handleFirstInteraction, { passive: true })
        eventListenersAttached = true
    }

    // Handle visibility changes for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationId) {
                cancelAnimationFrame(animationId)
                animationId = null
            }
        } else if (isInitialized && lines.length > 0) {
            lastFrameTime = performance.now()
            render()
        }
    })
}

export function stopCanvas() {
    isInitialized = false

    if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
    }

    // Clean up event listeners
    document.removeEventListener('mousemove', handleFirstInteraction)
    document.removeEventListener('touchstart', handleFirstInteraction)
    document.removeEventListener('mousemove', handleMove)
    document.removeEventListener('touchmove', handleMove)
    document.removeEventListener('touchstart', handleMove)
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('orientationchange', resizeCanvas)

    eventListenersAttached = false
    lines = []
    ctx = null
    oscillator = null
}
