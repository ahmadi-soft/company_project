import { createI18n } from 'vue-i18n'
import en from '~/i18n/locales/en.json'
import zh from '~/i18n/locales/zh.json'
import ar from '~/i18n/locales/ar.json'

export default defineNuxtPlugin((nuxtApp) => {
  const messages = {
    en,
    zh,
    ar
  }

  // If user previously selected a language, prefer it on the client
  let initialLocale = 'en'
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale')
    if (stored && ['en', 'zh', 'ar'].includes(stored)) initialLocale = stored
  }

  const i18n = createI18n({
    legacy: false,
    locale: initialLocale,
    fallbackLocale: 'en',
    messages
  })

  nuxtApp.vueApp.use(i18n)
})
