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
import { PageFlipSection } from '@/components/ui/scroll-animation'
import dynamic from 'next/dynamic'

// Dynamic import for shader background to avoid SSR issues
const ShaderBackground = dynamic(
  () => import('@/components/ui/shader-background'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      {/* Shader Background - Fixed behind everything */}
      <ShaderBackground />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen bg-transparent text-foreground antialiased selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
        <NavBar />

        {/* Hero - No page flip, it's the first section */}
        <HeroSection />

        {/* Page Flip Sections */}
        <PageFlipSection index={1}>
          <AboutSection />
        </PageFlipSection>

        <PageFlipSection index={2}>
          <EducationSection />
        </PageFlipSection>

        <PageFlipSection index={3}>
          <ExperienceSection />
        </PageFlipSection>

        <PageFlipSection index={4}>
          <SkillsSection />
        </PageFlipSection>

        <PageFlipSection index={5}>
          <CurrentFocusSection />
        </PageFlipSection>

        <PageFlipSection index={6}>
          <ProjectsSection />
        </PageFlipSection>

        <PageFlipSection index={7}>
          <AwardsSection />
        </PageFlipSection>

        <PageFlipSection index={8}>
          <ContactSection />
        </PageFlipSection>

        <Footer />
      </main>
    </>
  )
}
