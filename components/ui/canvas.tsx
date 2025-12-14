"use client"

// Canvas-based animated line trails that follow cursor movement
// @ts-nocheck

let ctx: CanvasRenderingContext2D | null = null
let f: any = null
let e = 0
let pos: { x: number; y: number } = { x: 0, y: 0 }
let lines: any[] = []
const E = {
    debug: true,
    friction: 0.5,
    trails: 80,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
}

function Node() {
    // @ts-ignore
    this.x = 0
    // @ts-ignore
    this.y = 0
    // @ts-ignore
    this.vy = 0
    // @ts-ignore
    this.vx = 0
}

function Oscillator(opts: any) {
    // @ts-ignore
    this.phase = opts.phase || 0
    // @ts-ignore
    this.offset = opts.offset || 0
    // @ts-ignore
    this.frequency = opts.frequency || 0.001
    // @ts-ignore
    this.amplitude = opts.amplitude || 1
}

Oscillator.prototype.update = function () {
    this.phase += this.frequency
    e = this.offset + Math.sin(this.phase) * this.amplitude
    return e
}

Oscillator.prototype.value = function () {
    return e
}

function Line(opts: any) {
    // @ts-ignore
    this.spring = opts.spring + 0.1 * Math.random() - 0.05
    // @ts-ignore
    this.friction = E.friction + 0.01 * Math.random() - 0.005
    // @ts-ignore
    this.nodes = []
    for (let i = 0; i < E.size; i++) {
        // @ts-ignore
        const t = new Node()
        t.x = pos.x
        t.y = pos.y
        // @ts-ignore
        this.nodes.push(t)
    }
}

Line.prototype.update = function () {
    let spring = this.spring
    let t = this.nodes[0]
    t.vx += (pos.x - t.x) * spring
    t.vy += (pos.y - t.y) * spring
    for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i]
        if (i > 0) {
            const n = this.nodes[i - 1]
            t.vx += (n.x - t.x) * spring
            t.vy += (n.y - t.y) * spring
            t.vx += n.vx * E.dampening
            t.vy += n.vy * E.dampening
        }
        t.vx *= this.friction
        t.vy *= this.friction
        t.x += t.vx
        t.y += t.vy
        spring *= E.tension
    }
}

Line.prototype.draw = function () {
    let x = this.nodes[0].x
    let y = this.nodes[0].y
    ctx?.beginPath()
    ctx?.moveTo(x, y)
    for (let i = 1; i < this.nodes.length - 2; i++) {
        const node = this.nodes[i]
        const nextNode = this.nodes[i + 1]
        x = 0.5 * (node.x + nextNode.x)
        y = 0.5 * (node.y + nextNode.y)
        ctx?.quadraticCurveTo(node.x, node.y, x, y)
    }
    const lastNode = this.nodes[this.nodes.length - 2]
    const endNode = this.nodes[this.nodes.length - 1]
    ctx?.quadraticCurveTo(lastNode.x, lastNode.y, endNode.x, endNode.y)
    ctx?.stroke()
    ctx?.closePath()
}

function onMousemove(event: MouseEvent | TouchEvent) {
    function initLines() {
        lines = []
        for (let i = 0; i < E.trails; i++) {
            // @ts-ignore
            lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }))
        }
    }

    function handleMove(e: MouseEvent | TouchEvent) {
        if ('touches' in e && e.touches) {
            pos.x = e.touches[0].pageX
            pos.y = e.touches[0].pageY
        } else if ('clientX' in e) {
            pos.x = e.clientX
            pos.y = e.clientY
        }
        e.preventDefault()
    }

    function handleTouch(e: TouchEvent) {
        if (e.touches.length === 1) {
            pos.x = e.touches[0].pageX
            pos.y = e.touches[0].pageY
        }
    }

    document.removeEventListener('mousemove', onMousemove as any)
    document.removeEventListener('touchstart', onMousemove as any)
    document.addEventListener('mousemove', handleMove as any)
    document.addEventListener('touchmove', handleMove as any)
    document.addEventListener('touchstart', handleTouch as any)
    handleMove(event)
    initLines()
    render()
}

function render() {
    if (ctx && (ctx as any).running) {
        ctx.globalCompositeOperation = 'source-over'
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.globalCompositeOperation = 'lighter'
        ctx.strokeStyle = `hsla(${Math.round(f.update())},100%,50%,0.025)`
        ctx.lineWidth = 10
        for (let i = 0; i < E.trails; i++) {
            const line = lines[i]
            line.update()
            line.draw()
        }
        ; (ctx as any).frame++
        window.requestAnimationFrame(render)
    }
}

function resizeCanvas() {
    if (ctx) {
        ctx.canvas.width = window.innerWidth - 20
        ctx.canvas.height = window.innerHeight
    }
}

export const renderCanvas = function () {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) return

    ctx = canvas.getContext('2d')
    if (!ctx) return

        ; (ctx as any).running = true
        ; (ctx as any).frame = 1

    // @ts-ignore
    f = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    })

    document.addEventListener('mousemove', onMousemove as any)
    document.addEventListener('touchstart', onMousemove as any)
    document.body.addEventListener('orientationchange', resizeCanvas)
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('focus', () => {
        if (ctx && !(ctx as any).running) {
            ; (ctx as any).running = true
            render()
        }
    })
    window.addEventListener('blur', () => {
        if (ctx) {
            ; (ctx as any).running = true
        }
    })
    resizeCanvas()
}

export const stopCanvas = function () {
    if (ctx) {
        ; (ctx as any).running = false
    }
}
