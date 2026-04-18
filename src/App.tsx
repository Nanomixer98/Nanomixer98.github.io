import useTheme from './hooks/useTheme'
import { useSectionTracking } from './hooks/useAnalytics'
import { LanguageProvider } from './context/LanguageContext'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
