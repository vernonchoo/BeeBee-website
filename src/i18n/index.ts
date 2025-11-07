import { createI18n } from 'vue-i18n'
import thTH from './locales/th-TH.json'
import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'

export type MessageSchema = typeof thTH

const i18n = createI18n<[MessageSchema], 'th-TH' | 'en' | 'zh-CN'>({
  legacy: false,
  locale: import.meta.env.VITE_DEFAULT_LOCALE || 'th-TH',
  fallbackLocale: 'en',
  messages: {
    'th-TH': thTH,
    en: en,
    'zh-CN': zhCN,
  },
})

export default i18n

