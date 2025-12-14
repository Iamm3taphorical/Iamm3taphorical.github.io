"use client"

import { useCallback, createContext, useContext, useRef, ReactNode } from "react"

// Audio context singleton for better performance
let sharedAudioContext: AudioContext | null = null

function getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null

    if (!sharedAudioContext) {
        try {
            sharedAudioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
        } catch {
            return null
        }
    }

    // Resume if suspended (browser autoplay policy)
    if (sharedAudioContext.state === 'suspended') {
        sharedAudioContext.resume()
    }

    return sharedAudioContext
}

// Sound context for global sound management
const SoundContext = createContext<{
    playClick: () => void
    playHover: () => void
    playSuccess: () => void
}>({
    playClick: () => { },
    playHover: () => { },
    playSuccess: () => { },
})

export function useSounds() {
    return useContext(SoundContext)
}

export function SoundProvider({ children }: { children: ReactNode }) {
    // Throttle to prevent sound spam
    const lastClickTime = useRef(0)
    const lastHoverTime = useRef(0)

    const playClick = useCallback(() => {
        const now = Date.now()
        if (now - lastClickTime.current < 50) return // 50ms throttle
        lastClickTime.current = now

        const ctx = getAudioContext()
        if (!ctx) return

        try {
            const oscillator = ctx.createOscillator()
            const gainNode = ctx.createGain()

            oscillator.connect(gainNode)
            gainNode.connect(ctx.destination)

            // Pleasant click sound
            oscillator.frequency.setValueAtTime(800, ctx.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1)
            oscillator.type = 'sine'

            gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)

            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.1)
        } catch {
            // Audio not supported
        }
    }, [])

    const playHover = useCallback(() => {
        const now = Date.now()
        if (now - lastHoverTime.current < 100) return // 100ms throttle
        lastHoverTime.current = now

        const ctx = getAudioContext()
        if (!ctx) return

        try {
            const oscillator = ctx.createOscillator()
            const gainNode = ctx.createGain()

            oscillator.connect(gainNode)
            gainNode.connect(ctx.destination)

            // Soft hover sound
            oscillator.frequency.setValueAtTime(600, ctx.currentTime)
            oscillator.type = 'sine'

            gainNode.gain.setValueAtTime(0.03, ctx.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)

            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 0.05)
        } catch {
            // Audio not supported
        }
    }, [])

    const playSuccess = useCallback(() => {
        const ctx = getAudioContext()
        if (!ctx) return

        try {
            // Play a pleasant two-note success sound
            const playNote = (freq: number, delay: number) => {
                const oscillator = ctx.createOscillator()
                const gainNode = ctx.createGain()

                oscillator.connect(gainNode)
                gainNode.connect(ctx.destination)

                oscillator.frequency.setValueAtTime(freq, ctx.currentTime + delay)
                oscillator.type = 'sine'

                gainNode.gain.setValueAtTime(0, ctx.currentTime + delay)
                gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + delay + 0.02)
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.15)

                oscillator.start(ctx.currentTime + delay)
                oscillator.stop(ctx.currentTime + delay + 0.15)
            }

            playNote(523.25, 0)    // C5
            playNote(659.25, 0.1)  // E5
        } catch {
            // Audio not supported
        }
    }, [])

    return (
        <SoundContext.Provider value={{ playClick, playHover, playSuccess }}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider
