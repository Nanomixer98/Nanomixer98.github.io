import { useEffect, useState } from 'react'

export function useTypingEffect(text, speed = 100, pauseMs = 60000) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    let timeout
    let i = 0
    let currentPhase = 'typing'

    function tick() {
      if (currentPhase === 'typing') {
        if (i < text.length) {
          i++
          setDisplayed(text.slice(0, i))
          timeout = setTimeout(tick, speed)
        } else {
          currentPhase = 'paused'
          setPhase('paused')
          timeout = setTimeout(tick, pauseMs)
        }
      } else if (currentPhase === 'paused') {
        currentPhase = 'deleting'
        setPhase('deleting')
        tick()
      } else if (currentPhase === 'deleting') {
        if (i > 0) {
          i--
          setDisplayed(text.slice(0, i))
          timeout = setTimeout(tick, speed / 2)
        } else {
          currentPhase = 'typing'
          setPhase('typing')
          timeout = setTimeout(tick, speed * 3)
        }
      }
    }

    tick()
    return () => clearTimeout(timeout)
  }, [text, speed, pauseMs])

  return { displayed, phase }
}
