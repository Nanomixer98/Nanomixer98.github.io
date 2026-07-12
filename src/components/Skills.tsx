import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaCode, FaCubes, FaTools } from 'react-icons/fa';
import {
  skillsFrameworks,
  skillsLanguages,
  skillsTools,
} from '../data/portfolioData';
import { useLanguage } from '../hooks/useLanguage';
import type { SkillCategory } from '../types';

const COLLAPSED_HEIGHT = 240;

function getLevel(weight: number) {
  if (weight >= 4) return 'advanced';
  if (weight === 3) return 'intermediate';
  return 'familiar';
}

function SkillLevel({ weight }: { weight: number }) {
  const level = getLevel(weight);

  const levelConfig: Record<string, string> = {
    advanced: 'bg-emerald-400',
    intermediate: 'bg-amber-400',
    familiar: 'bg-rose-400',
  };

  const color = levelConfig[level];
  return <span className={`w-2 h-2 rounded-full shrink-0 ${color}`} />;
}

function SkillCard({
  title,
  icon: Icon,
  skills,
  index,
  className = '',
}: SkillCategory & { index: number; className?: string }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setNeedsCollapse(contentRef.current.scrollHeight > COLLAPSED_HEIGHT);
    }
  }, [skills]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`glass glass-hover p-6 md:p-8 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-linear-to-br from-emerald-600/20 to-amber-600/20 border border-black/5 dark:border-white/10">
          <Icon className="text-xl text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="relative">
        <div
          ref={contentRef}
          className="flex flex-wrap gap-3 overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{
            maxHeight:
              !needsCollapse || expanded
                ? (contentRef.current?.scrollHeight ?? 'none')
                : `${COLLAPSED_HEIGHT}px`,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-3.5 py-2 text-sm"
            >
              <span className="text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
              <SkillLevel weight={skill.weight} />
            </div>
          ))}
        </div>

        {needsCollapse && !expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{
              background: `linear-gradient(to top, var(--collapse-fade), transparent)`,
            }}
          />
        )}
      </div>

      <AnimatePresence>
        {needsCollapse && (
          <motion.button
            layout
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-1.5 mx-auto mt-4 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span data-cuelume-press="bloom">
              {expanded ? t('skills.showLess') : t('skills.showMore')}
            </span>
            <FaChevronDown
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  const categories: SkillCategory[] = [
    { title: t('skills.languages'), icon: FaCode, skills: skillsLanguages },
    { title: t('skills.frameworks'), icon: FaCubes, skills: skillsFrameworks },
    { title: t('skills.tools'), icon: FaTools, skills: skillsTools },
  ];

  const legendItems = [
    { labelKey: 'skills.advanced', color: 'bg-emerald-400' },
    { labelKey: 'skills.intermediate', color: 'bg-amber-400' },
    { labelKey: 'skills.familiar', color: 'bg-rose-400' },
  ];

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
            {t('skills.title')}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mb-8 text-xs text-gray-500">
          {legendItems.map(({ labelKey, color }) => (
            <div key={labelKey} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${color}`} />
              {t(labelKey)}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              {...cat}
              index={i}
              className={
                i === categories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
