import { en } from './en'
import { es } from './es'
import type { Locale } from './types'

export type { Locale }

export const translations: Record<Locale, Record<string, string>> = { en, es }
export const SUPPORTED_LOCALES: Locale[] = ['en', 'es']
export const DEFAULT_LOCALE: Locale = 'en'
