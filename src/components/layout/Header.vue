<template>
  <header
    :class="headerClasses"
    class="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm transition-all duration-300"
  >
    <div class="container-custom">
      <div class="flex h-16 items-center justify-between lg:h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md">
            <span class="text-xl font-bold">B</span>
          </div>
          <span class="hidden text-xl font-bold text-gray-900 sm:inline">BEE BEE Travel</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center space-x-1 lg:flex">
          <NavLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :label="t(item.label)"
          />
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              type="button"
              class="flex items-center space-x-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              @click="toggleLangMenu"
            >
              <span>{{ currentLocaleLabel }}</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Language Menu -->
            <Transition name="fade">
              <div
                v-if="isLangMenuOpen"
                v-click-outside="closeLangMenu"
                class="absolute right-0 top-full mt-2 w-32 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
              >
                <button
                  v-for="loc in localeOptions"
                  :key="loc.value"
                  type="button"
                  class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                  :class="{ 'bg-primary-50 text-primary-600': loc.value === locale.value }"
                  @click="changeLocale(loc.value)"
                >
                  {{ loc.label }}
                </button>
              </div>
            </Transition>
          </div>

          <!-- CTA Button (Desktop) -->
          <Button variant="primary" size="sm" class="hidden lg:inline-flex" @click="handleConsultClick">
            {{ t('hero.ctaConsult') }}
          </Button>

          <!-- Mobile Menu Toggle -->
          <button
            type="button"
            class="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            @click="toggleMobileMenu"
          >
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="border-t border-gray-200 bg-white lg:hidden">
        <nav class="container-custom space-y-1 py-4">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            active-class="bg-primary-50 text-primary-600"
            @click="closeMobileMenu"
          >
            {{ t(item.label) }}
          </RouterLink>
          <Button variant="primary" block class="mt-4" @click="handleConsultClick">
            {{ t('hero.ctaConsult') }}
          </Button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import Button from '@/components/base/Button.vue'
import NavLink from '@/components/layout/NavLink.vue'
import type { Locale } from '@/types/common'

const { t, locale } = useI18n()
const appStore = useAppStore()

const isLangMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { path: '/routes', label: 'nav.routes' },
  { path: '/promos', label: 'nav.promos' },
  { path: '/about', label: 'nav.about' },
  { path: '/faq', label: 'nav.faq' },
  { path: '/contact', label: 'nav.contact' },
]

const localeOptions = [
  { value: 'th-TH' as Locale, label: 'ไทย' },
  { value: 'en' as Locale, label: 'English' },
  { value: 'zh-CN' as Locale, label: '简体中文' },
]

const currentLocaleLabel = computed(() => {
  return localeOptions.find((l) => l.value === locale.value)?.label || 'ไทย'
})

const isMobileMenuOpen = computed(() => appStore.isMobileMenuOpen)

const headerClasses = computed(() => ({
  'shadow-md': isScrolled.value,
}))

function toggleLangMenu() {
  isLangMenuOpen.value = !isLangMenuOpen.value
}

function closeLangMenu() {
  isLangMenuOpen.value = false
}

function changeLocale(newLocale: Locale) {
  // 更新 i18n locale
  locale.value = newLocale
  // 同步到 store
  appStore.setLocale(newLocale)
  // 关闭菜单
  closeLangMenu()
  
  console.log('Language changed to:', newLocale)
}

function toggleMobileMenu() {
  appStore.toggleMobileMenu()
}

function closeMobileMenu() {
  appStore.closeMobileMenu()
}

function handleConsultClick() {
  // 跳转到联系页面
  window.location.href = '/contact'
}

// Directive for click outside
const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    const handler = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value()
      }
    }
    // @ts-ignore
    el._clickOutside = handler
    document.addEventListener('click', handler, true)
  },
  unmounted(el: any) {
    if (el._clickOutside) {
      document.removeEventListener('click', el._clickOutside, true)
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

