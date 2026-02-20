import useTheme from './hooks/useTheme'
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
