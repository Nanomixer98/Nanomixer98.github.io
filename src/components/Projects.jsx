import { motion } from 'framer-motion'
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'
import useGithubRepos from '../hooks/useGithubRepos'
import { githubConfig } from '../data/portfolioData'

const langColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  PHP: '#4F5D95',
  Java: '#b07219',
  Shell: '#89e051',
}

function ProjectCard({ repo, index }) {
  const hasPages = githubConfig.githubPages.includes(repo.name)
  const pagesUrl = `https://${githubConfig.username}.github.io/${repo.name}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass glass-hover p-5 md:p-6 flex flex-col h-full"
    >
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-white text-base">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              {repo.name}
            </a>
          </h3>
          <div className="flex items-center gap-2 ml-3 shrink-0">
            {hasPages && (
              <a
                href={pagesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Live demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        {repo.description && (
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
            {repo.description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-3 border-t border-white/5">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: langColors[repo.language] || '#8b8b8b',
              }}
            />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1">
            <FaStar className="text-amber-500/70" />
            <span>{repo.stargazers_count}</span>
          </div>
        )}
        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1">
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { repos, loading, error } = useGithubRepos()

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Projects
          </h2>
          <p className="text-gray-400 mt-3">
            Open source projects from my GitHub
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-gray-400">
            <p>Could not load projects. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.slice(0, 9).map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}

        {!loading && !error && repos.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href={`https://github.com/${githubConfig.username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-sm text-gray-300 hover:text-white font-medium"
            >
              View all on GitHub
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
