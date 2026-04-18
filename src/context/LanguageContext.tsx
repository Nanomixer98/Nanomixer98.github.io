import { createContext, useState, useCallback, useMemo } from 'react'
import type { ReactNode } from 'react'
import { translations, DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../i18n'
import type { Locale } from '../i18n'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang')

  if (lang && SUPPORTED_LOCALES.includes(lang as Locale)) {
    return lang as Locale
  }

  return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)

    const url = new URL(window.location.href)
    url.searchParams.set('lang', newLocale)
    window.history.replaceState({}, '', url.toString())
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[locale][key] ?? translations[DEFAULT_LOCALE][key] ?? key
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
