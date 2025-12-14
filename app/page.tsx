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
import { renderCanvas, stopCanvas } from '@/components/ui/canvas'

export default function Home() {
  useEffect(() => {
    // Initialize canvas animation
    renderCanvas()

    return () => {
      stopCanvas()
    }
  }, [])

  return (
    <>
      {/* Canvas Background - Fixed behind everything */}
      <canvas
        id="canvas"
        className="fixed inset-0 z-0 pointer-events-none"
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
    </>
  )
}
