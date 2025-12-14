"use client"

import { useEffect, useCallback, createContext, useContext, ReactNode } from "react"

// Sound context for global sound management
const SoundContext = createContext<{
    playClick: () => void
    playHover: () => void
}>({
    playClick: () => { },
    playHover: () => { },
})

export function useSounds() {
    return useContext(SoundContext)
}

export function SoundProvider({ children }: { children: ReactNode }) {
    const playClick = useCallback(() => {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()

            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.1)
        } catch (e) {
            // Audio not supported
        }
    }, [])

    const playHover = useCallback(() => {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()

            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)

            oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
            oscillator.type = 'sine'

            gainNode.gain.setValueAtTime(0.03, audioContext.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05)

            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.05)
        } catch (e) {
            // Audio not supported
        }
    }, [])

    // Add global click sound
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                playClick()
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [playClick])

    return (
        <SoundContext.Provider value={{ playClick, playHover }}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider
