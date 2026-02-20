import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaCode, FaCubes, FaTools } from 'react-icons/fa'
import {
  skillsFrameworks,
  skillsLanguages,
  skillsTools,
} from '../data/portfolioData'

const categories = [
  { title: 'Languages', icon: FaCode, skills: skillsLanguages },
  { title: 'Frameworks', icon: FaCubes, skills: skillsFrameworks },
  { title: 'Skills & Tools', icon: FaTools, skills: skillsTools },
]

const levelConfig = {
  advanced: { label: 'Advanced', color: 'bg-emerald-400', border: 'border-emerald-400/30' },
  intermediate: { label: 'Intermediate', color: 'bg-amber-400', border: 'border-amber-400/30' },
  familiar: { label: 'Familiar', color: 'bg-rose-400', border: 'border-rose-400/30' },
}

function getLevel(weight) {
  if (weight >= 4) return 'advanced'
  if (weight === 3) return 'intermediate'
  return 'familiar'
}

function SkillLevel({ weight }) {
  const level = getLevel(weight)
  const { label, color, border } = levelConfig[level]

  return (
    <span
      className={`group/level inline-flex items-center gap-0 hover:gap-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-400 border ${border} rounded-full p-1 hover:px-2 hover:py-0.5 transition-all duration-300 cursor-default`}
    >
      <span className={`w-2 h-2 rounded-full shrink-0 ${color}`} />
      <span className="max-w-0 overflow-hidden opacity-0 group-hover/level:max-w-24 group-hover/level:opacity-100 transition-all duration-300 whitespace-nowrap">
        {label}
      </span>
    </span>
  )
}

const COLLAPSED_HEIGHT = 240

function SkillCard({ title, icon: Icon, skills, index, className = '' }) {
  const [expanded, setExpanded] = useState(false)
  const [needsCollapse, setNeedsCollapse] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      setNeedsCollapse(contentRef.current.scrollHeight > COLLAPSED_HEIGHT)
    }
  }, [skills])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`glass glass-hover p-6 md:p-8 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600/20 to-amber-600/20 border border-white/10">
          <Icon className="text-xl text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="relative">
        <div
          ref={contentRef}
          className="flex flex-wrap gap-3 overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{
            maxHeight: !needsCollapse || expanded
              ? contentRef.current?.scrollHeight ?? 'none'
              : `${COLLAPSED_HEIGHT}px`,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 bg-white/5 border border-white/5 rounded-xl px-3.5 py-2 text-sm"
            >
              <span className="text-gray-200">{skill.name}</span>
              <SkillLevel weight={skill.weight} />
            </div>
          ))}
        </div>

        {needsCollapse && !expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#071208]/80 to-transparent pointer-events-none" />
        )}
      </div>

      <AnimatePresence>
        {needsCollapse && (
          <motion.button
            layout
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-1.5 mx-auto mt-4 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Show less' : 'Show more'}</span>
            <FaChevronDown
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Skills
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              {...cat}
              index={i}
              className={i === categories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-xs text-gray-500">
          {Object.values(levelConfig).map(({ label, color }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${color}`} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
