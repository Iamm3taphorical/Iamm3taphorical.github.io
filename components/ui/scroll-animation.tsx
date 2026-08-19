'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollAnimationProps { children: ReactNode; className?: string; delay?: number; direction?: 'up' | 'down' | 'left' | 'right' | 'scale'; duration?: number; once?: boolean }
export function ScrollAnimation({ children, className, delay = 0, duration = .35, once = true }: ScrollAnimationProps) { const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once, margin: '-8% 0px' }); return <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration, delay, ease: 'easeOut' }} className={cn(className)}>{children}</motion.div> }
export function StaggerContainer({ children, className, staggerDelay = .045 }: { children: ReactNode; className?: string; staggerDelay?: number }) { const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true, margin: '-5% 0px' }); const variants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: staggerDelay } } }; return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className={className}>{children}</motion.div> }
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) { const variants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: .3, ease: 'easeOut' } } }; return <motion.div variants={variants} className={className}>{children}</motion.div> }
export default ScrollAnimation
