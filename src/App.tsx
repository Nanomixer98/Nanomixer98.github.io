import { useEffect } from "react";
import { bind } from "cuelume"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Background from './components/Background'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Privacy from './components/Privacy'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import { LanguageProvider } from './context/LanguageContext'
import { useSectionTracking } from './hooks/useAnalytics'
import useTheme from './hooks/useTheme'

bind()

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Home() {
  const { dark, toggle } = useTheme()
  useSectionTracking(['home', 'skills', 'timeline', 'projects', 'contact'])

  return (
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
  )
}

function PrivacyPage() {
  return (
    <div className={`text-gray-900 dark:text-white transition-colors duration-300`}>
      <Background />
      <main>
        <Privacy />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
