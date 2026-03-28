import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { trackEvent } from '../hooks/useAnalytics'

const socialLinks = [
  {
    icon: FaGithub,
    href: `https://github.com/${personalInfo.githubUsername}`,
    label: 'GitHub',
  },
  {
    icon: FaLinkedinIn,
    href: `https://linkedin.com/in/${personalInfo.linkedinUsername}`,
    label: 'LinkedIn',
  },
  {
    icon: FaEnvelope,
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
  },
]

export default function Hero() {
  const { displayed, phase } = useTypingEffect(personalInfo.title, 120, 5000)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-emerald-600 dark:text-emerald-400 text-lg md:text-xl mb-4 font-medium"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 gradient-text leading-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-10 h-10"
        >
          <span>{displayed}</span>
          <span
            className={`inline-block w-[3px] h-7 bg-amber-500 dark:bg-amber-400 ml-1 align-middle ${
              phase === 'paused' ? 'animate-[typing-cursor_1s_infinite]' : ''
            }`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              onClick={() => trackEvent('social-click', { platform: label })}
              className="glass glass-hover p-4 rounded-full text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-5 h-8 rounded-full border-2 border-gray-400 dark:border-gray-500 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 bg-gray-400 rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
