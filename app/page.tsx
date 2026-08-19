import { NavBar } from '@/components/sections/NavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { CurrentFocusSection } from '@/components/sections/CurrentFocusSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
      <main className="relative min-h-screen bg-transparent text-foreground antialiased overflow-x-hidden">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <CurrentFocusSection />
        <ProjectsSection />
        <CertificationsSection />
        <AwardsSection />
        <ContactSection />
        <Footer />
      </main>
  )
}
