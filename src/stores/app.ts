import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Locale } from '@/types/common'

export const useAppStore = defineStore('app', () => {
  // State
  const locale = ref<Locale>((import.meta.env.VITE_DEFAULT_LOCALE as Locale) || 'th-TH')
  const currency = ref<'THB' | 'CNY'>('THB')
  const isMobileMenuOpen = ref(false)

  // Getters
  const availableLocales = computed<Locale[]>(() => {
    const locales = import.meta.env.VITE_AVAILABLE_LOCALES || 'th-TH,en,zh-CN'
    return locales.split(',') as Locale[]
  })

  // Actions
  function setLocale(newLocale: Locale) {
    locale.value = newLocale
    // 也可以存储到 localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  function setCurrency(newCurrency: 'THB' | 'CNY') {
    currency.value = newCurrency
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  return {
    locale,
    currency,
    isMobileMenuOpen,
    availableLocales,
    setLocale,
    setCurrency,
    toggleMobileMenu,
    closeMobileMenu,
  }
})

