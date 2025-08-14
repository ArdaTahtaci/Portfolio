import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { EducationSection } from './sections/EducationSection'
import { HackathonsSection } from './sections/HackathonsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ArticlesSection } from './sections/ArticlesSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f14] dark:text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <HackathonsSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
