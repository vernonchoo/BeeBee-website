<template>
  <footer class="border-t border-gray-200 bg-gray-50">
    <!-- Main Footer -->
    <div class="container-custom py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <!-- Brand -->
        <div>
          <div class="mb-4 flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="BEE BEE Travel"
              class="h-10 w-auto"
              loading="lazy"
            />
            <span class="text-xl font-bold text-secondary-700">BEE BEE Travel</span>
          </div>
          <p class="text-sm text-gray-600">
            {{ t('hero.subtitle') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            {{ t('nav.routes') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="city in cities" :key="city.value">
              <RouterLink
                :to="`/routes?city=${city.value}`"
                class="text-sm text-gray-600 transition-colors hover:text-primary-600"
              >
                {{ t(city.label) }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            {{ t('footer.about') }}
          </h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/about" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.about') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/reviews" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.reviews') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/faq" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.faq') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/for-agencies" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.forAgencies') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/for-tourists" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.forTourists') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/cooperation" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.cooperation') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.contact') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Blog -->
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            {{ t('nav.blog') }}
          </h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/blog" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.blog') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog/reports" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.blogReports') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog/articles" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.blogArticles') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog/route-info" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.blogRouteInfo') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog/culture-history" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
                {{ t('nav.blogCultureHistory') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            {{ t('footer.newsletter') }}
          </h3>
          <p class="mb-4 text-sm text-gray-600">
            {{ t('footer.followUs') }}
          </p>
          <form class="flex" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              :placeholder="t('footer.emailPlaceholder')"
              class="flex-1 rounded-l-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <Button type="submit" variant="primary" size="sm" class="rounded-l-none">
              {{ t('footer.subscribe') }}
            </Button>
          </form>
          <!-- Social Media -->
          <div class="mt-4 flex space-x-3">
            <a href="#" class="text-gray-400 transition-colors hover:text-primary-600" aria-label="Facebook">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 transition-colors hover:text-tech-600" aria-label="LINE">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 transition-colors hover:text-tech-600" aria-label="Instagram">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-200 bg-gray-100">
      <div class="container-custom py-6">
        <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p class="text-sm text-gray-600">
            {{ t('footer.copyright') }}
          </p>
          <div class="flex space-x-6">
            <RouterLink to="/privacy" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
              {{ t('footer.privacy') }}
            </RouterLink>
            <RouterLink to="/terms" class="text-sm text-gray-600 transition-colors hover:text-primary-600">
              {{ t('footer.terms') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/base/Button.vue'
import { useToast } from '@/composables/useToast'

const { t } = useI18n()
const { success } = useToast()

const email = ref('')

const cities = [
  { value: 'shanghai', label: 'cities.shanghai' },
  { value: 'guangzhou', label: 'cities.guangzhou' },
  { value: 'beijing', label: 'cities.beijing' },
  { value: 'zhuhai', label: 'cities.zhuhai' },
]

function handleSubscribe() {
  if (email.value) {
    // TODO: Submit to API
    success(t('common.success'))
    email.value = ''
  }
}
</script>

