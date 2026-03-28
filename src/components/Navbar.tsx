import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaSun, FaMoon } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import { trackEvent } from '../hooks/useAnalytics'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-emerald-500/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text">
          AN
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={onToggle}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {dark ? <FaSun className="text-base" /> : <FaMoon className="text-base" />}
          </button>

          <a
            href={personalInfo.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('resume-click', { source: 'navbar' })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-emerald-600 to-amber-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <HiDownload className="text-base" />
            Resume
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggle}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('resume-click', { source: 'navbar-mobile' })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-emerald-600 to-amber-600 text-white text-sm font-medium w-fit"
          >
            <HiDownload />
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
