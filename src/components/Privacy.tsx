import { Link, useLocation } from 'react-router-dom'
import { personalInfo } from '../data/portfolioData'
import { useLanguage } from '../hooks/useLanguage'

const SECTIONS: Array<[string, string]> = [
  ['privacy.intro.title', 'privacy.intro.body'],
  ['privacy.controller.title', 'privacy.controller.body'],
  ['privacy.data.title', 'privacy.data.body'],
  ['privacy.third.title', 'privacy.third.body'],
  ['privacy.basis.title', 'privacy.basis.body'],
  ['privacy.rights.title', 'privacy.rights.body'],
  ['privacy.retention.title', 'privacy.retention.body'],
  ['privacy.optout.title', 'privacy.optout.body'],
  ['privacy.changes.title', 'privacy.changes.body'],
]

export default function Privacy() {
  const { t, locale, setLocale } = useLanguage()
  const { search } = useLocation()

  return (
    <>
      <header className="glass py-3">
        <div className="max-w-3xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link
            to={{ pathname: '/', search }}
            className="text-xl font-bold gradient-text"
            aria-label={t('privacy.back')}
          >
            AN
          </Link>

          <div
            className="flex items-center rounded-lg border border-black/10 dark:border-white/10 overflow-hidden"
            role="tablist"
            aria-label="Language"
          >
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                role="tab"
                aria-selected={locale === l}
                onClick={() => setLocale(l)}
                className={`px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-all duration-200 cursor-pointer ${
                  locale === l
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-2">
              {t('privacy.title')}
            </h1>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {t('privacy.updated')}
            </p>
          </div>

        <div className="flex flex-col gap-6">
          {SECTIONS.map(([titleKey, bodyKey]) => (
            <article key={titleKey} className="glass p-6 md:p-8">
              <h2 className="text-lg font-semibold mb-3">{t(titleKey)}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {t(bodyKey)}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={{ pathname: '/', search }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
          >
            &larr; {t('privacy.back')}
          </Link>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-5">
            {personalInfo.email}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
