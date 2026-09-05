import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { personalInfo } from '../data/portfolioData'
import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()
  const { search } = useLocation()

  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>

        <Link
          to={{ pathname: '/privacy', search }}
          className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t('footer.privacy')}
        </Link>

        <div className="flex items-center gap-4">
          <a
            href={`https://github.com/${personalInfo.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedinUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  )
}
