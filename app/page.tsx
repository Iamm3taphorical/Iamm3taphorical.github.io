"use client"

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

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
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
  )
}
