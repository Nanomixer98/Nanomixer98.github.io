import { useState, useEffect } from 'react'
import { githubConfig } from '../data/portfolioData'

export default function useGithubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${githubConfig.username}/repos?per_page=100&sort=updated`
        )
        if (!res.ok) throw new Error('Failed to fetch repos')

        const data = await res.json()

        const filtered = data
          .filter((repo) => {
            if (githubConfig.exclude.archived && repo.archived) return false
            if (githubConfig.exclude.forks && repo.fork) return false
            if (githubConfig.exclude.projects.includes(repo.name)) return false
            return true
          })
          .sort((a, b) => b.stargazers_count - a.stargazers_count)

        setRepos(filtered)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { repos, loading, error }
}
