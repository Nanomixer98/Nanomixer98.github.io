import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import type { LanguageContextValue } from '../context/LanguageContext'

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
