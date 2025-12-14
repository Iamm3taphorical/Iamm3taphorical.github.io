"use client"

import { useEffect } from 'react'
import { NavBar } from '@/components/sections/NavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { CurrentFocusSection } from '@/components/sections/CurrentFocusSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'
import { IntroAnimation } from '@/components/ui/intro-animation'
import { renderCanvas, stopCanvas } from '@/components/ui/canvas'

export default function Home() {
  useEffect(() => {
    // Initialize canvas animation with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      renderCanvas()
    }, 100)

    return () => {
      clearTimeout(timer)
      stopCanvas()
    }
  }, [])

  return (
    <IntroAnimation>
      {/* Canvas Animation - Fixed on top of everything with pointer-events-none */}
      <canvas
        id="canvas"
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen bg-transparent text-foreground antialiased selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <CurrentFocusSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
        <Footer />
      </main>
    </IntroAnimation>
  )
}
