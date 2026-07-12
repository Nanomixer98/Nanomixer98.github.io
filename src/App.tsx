import { bind } from "cuelume"
import Background from './components/Background'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import { LanguageProvider } from './context/LanguageContext'
import { useSectionTracking } from './hooks/useAnalytics'
import useTheme from './hooks/useTheme'

bind()

export default function App() {
  const { dark, toggle } = useTheme()
  useSectionTracking(['home', 'skills', 'timeline', 'projects', 'contact'])

  return (
    <LanguageProvider>
      <div className={`text-gray-900 dark:text-white transition-colors duration-300`}>
        <Background />
        <Navbar dark={dark} onToggle={toggle} />
        <main>
          <Hero />
          <Skills />
          <Timeline />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
