import { useEffect, useRef } from 'react'

function track(eventName, data) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, data)
  }
}

export function trackEvent(eventName, data) {
  track(eventName, data)
}

export function useSectionTracking(sectionIds) {
  const tracked = useRef(new Set())

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked.current.has(entry.target.id)) {
            tracked.current.add(entry.target.id)
            track('section-view', { section: entry.target.id })
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])
}
