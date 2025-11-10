<template>
  <header
    :class="headerClasses"
    class="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm transition-all duration-300"
  >
    <div class="container-custom">
      <div class="flex h-16 items-center justify-between lg:h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <img
            src="/images/logo.png"
            alt="BEE BEE Travel"
            class="h-10 w-auto sm:h-12"
            loading="eager"
          />
          <span class="hidden text-xl font-bold text-secondary-700 sm:inline">BEE BEE Travel</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center space-x-1 lg:flex">
          <template v-for="item in navItems" :key="item.path || item.label">
            <!-- Dropdown Menu Item -->
            <div v-if="item.children" class="relative">
              <button
                type="button"
                class="flex items-center space-x-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                :class="{ 'bg-primary-50 text-primary-600': isActiveParent(item) }"
                @click="toggleDropdown(item.label)"
              >
                <span>{{ t(item.label) }}</span>
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Transition name="fade">
                <div
                  v-if="openDropdown === item.label"
                  v-click-outside="() => closeDropdown()"
                  class="absolute left-0 top-full mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
                >
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                    active-class="bg-primary-50 text-primary-600"
                    @click="closeDropdown()"
                  >
                    {{ t(child.label) }}
                  </RouterLink>
                </div>
              </Transition>
            </div>
            <!-- Regular Menu Item -->
            <NavLink
              v-else
              :to="item.path!"
              :label="t(item.label)"
            />
          </template>
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
                  :class="{ 'bg-primary-50 text-primary-600': loc.value === (locale.value as Locale) }"
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
          <template v-for="item in navItems" :key="item.path || item.label">
            <!-- Dropdown Menu Item (Mobile) -->
            <div v-if="item.children">
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                :class="{ 'bg-primary-50 text-primary-600': isActiveParent(item) }"
                @click="toggleMobileDropdown(item.label)"
              >
                <span>{{ t(item.label) }}</span>
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Transition name="slide-down">
                <div v-if="openMobileDropdown === item.label" class="ml-4 mt-1 space-y-1">
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="block rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50"
                    active-class="bg-primary-50 text-primary-600"
                    @click="closeMobileMenu"
                  >
                    {{ t(child.label) }}
                  </RouterLink>
                </div>
              </Transition>
            </div>
            <!-- Regular Menu Item (Mobile) -->
            <RouterLink
              v-else
              :key="item.path"
              :to="item.path!"
              class="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              active-class="bg-primary-50 text-primary-600"
              @click="closeMobileMenu"
            >
              {{ t(item.label) }}
            </RouterLink>
          </template>
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
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import Button from '@/components/base/Button.vue'
import NavLink from '@/components/layout/NavLink.vue'
import type { Locale } from '@/types/common'

const { t, locale } = useI18n()
const appStore = useAppStore()

const isLangMenuOpen = ref(false)
const isScrolled = ref(false)
const openDropdown = ref<string | null>(null)
const openMobileDropdown = ref<string | null>(null)

interface NavItem {
  path?: string
  label: string
  children?: Array<{ path: string; label: string }>
}

const navItems: NavItem[] = [
  { path: '/routes', label: 'nav.routes' },
  {
    label: 'nav.travelPlanning',
    children: [
      { path: '/schedule', label: 'nav.schedule' },
      { path: '/promos', label: 'nav.promos' },
    ],
  },
  {
    label: 'nav.about',
    children: [
      { path: '/about', label: 'nav.about' },
      { path: '/faq', label: 'nav.faq' },
      { path: '/reviews', label: 'nav.reviews' },
      { path: '/for-agencies', label: 'nav.forAgencies' },
      { path: '/for-tourists', label: 'nav.forTourists' },
      { path: '/cooperation', label: 'nav.cooperation' },
    ],
  },
  {
    label: 'nav.blog',
    children: [
      { path: '/blog', label: 'nav.blog' },
      { path: '/blog/reports', label: 'nav.blogReports' },
      { path: '/blog/articles', label: 'nav.blogArticles' },
      { path: '/blog/route-info', label: 'nav.blogRouteInfo' },
      { path: '/blog/culture-history', label: 'nav.blogCultureHistory' },
    ],
  },
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

function toggleDropdown(label: string) {
  openDropdown.value = openDropdown.value === label ? null : label
}

function closeDropdown() {
  openDropdown.value = null
}

function toggleMobileDropdown(label: string) {
  openMobileDropdown.value = openMobileDropdown.value === label ? null : label
}

function isActiveParent(item: NavItem): boolean {
  if (!item.children) return false
  const route = useRoute()
  return item.children.some((child) => route.path === child.path)
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

