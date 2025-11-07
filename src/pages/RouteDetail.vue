<template>
  <div v-if="!loading && route" class="bg-white">
    <!-- Gallery Section -->
    <div class="relative h-96 overflow-hidden bg-gray-200">
      <img
        :src="route.coverImage || '/images/placeholder.jpg'"
        :alt="getLocalizedText(route.title)"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="container-custom py-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Breadcrumb -->
          <nav class="mb-4 flex items-center space-x-2 text-sm text-gray-600">
            <RouterLink to="/" class="hover:text-primary-600">{{ t('nav.home') }}</RouterLink>
            <span>/</span>
            <RouterLink to="/routes" class="hover:text-primary-600">{{ t('nav.routes') }}</RouterLink>
            <span>/</span>
            <span class="text-gray-900">{{ getLocalizedText(route.title) }}</span>
          </nav>

          <!-- Title -->
          <h1 class="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
            {{ getLocalizedText(route.title) }}
          </h1>
          <p v-if="route.subtitle" class="mb-6 text-lg text-gray-600">
            {{ getLocalizedText(route.subtitle) }}
          </p>

          <!-- Meta Info -->
          <div class="mb-8 flex flex-wrap items-center gap-4 border-b border-gray-200 pb-6">
            <div class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {{ t(`cities.${route.city}`) }}
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ t('routes.days', { n: route.durationDays }) }}
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ t('routes.age', { min: route.ageMin, max: route.ageMax }) }}
            </div>
            <div class="flex gap-2">
              <Badge v-for="theme in route.themes" :key="theme" variant="tech">
                {{ t(`themes.${theme}`) }}
              </Badge>
            </div>
          </div>

          <!-- Highlights -->
          <section v-if="route.highlights && route.highlights.length > 0" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">{{ t('routeDetail.highlights') }}</h2>
            <ul class="space-y-2">
              <li v-for="(highlight, index) in route.highlights" :key="index" class="flex items-start">
                <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ highlight }}</span>
              </li>
            </ul>
          </section>

          <!-- Includes/Excludes -->
          <div class="mb-8 grid gap-6 sm:grid-cols-2">
            <div v-if="route.includes">
              <h3 class="mb-3 font-semibold text-gray-900">{{ t('routeDetail.included') }}</h3>
              <ul class="space-y-2">
                <li v-for="(item, index) in route.includes" :key="index" class="flex items-start text-sm text-gray-700">
                  <svg class="mr-2 mt-0.5 h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="route.excludes">
              <h3 class="mb-3 font-semibold text-gray-900">{{ t('routeDetail.excluded') }}</h3>
              <ul class="space-y-2">
                <li v-for="(item, index) in route.excludes" :key="index" class="flex items-start text-sm text-gray-700">
                  <svg class="mr-2 mt-0.5 h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <Card padding="md">
              <!-- Price -->
              <div class="mb-6 text-center">
                <div class="mb-1 text-sm text-gray-600">{{ t('routes.from') }}</div>
                <div class="text-3xl font-bold text-primary-600">
                  {{ formatCurrency(route.priceTHB) }}
                </div>
                <div class="text-sm text-gray-600">{{ t('routes.perPerson') }}</div>
              </div>

              <!-- Actions -->
              <div class="space-y-3">
                <Button variant="primary" size="lg" block @click="openInquiryModal">
                  {{ t('routeDetail.inquireNow') }}
                </Button>
                <Button variant="outline" size="lg" block @click="toggleFavorite">
                  <svg class="mr-2 h-5 w-5" :class="{ 'fill-current': isFav }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {{ isFav ? t('routeDetail.removeFromFavorites') : t('routeDetail.addToFavorites') }}
                </Button>
              </div>

              <!-- Next Dates -->
              <div v-if="route.nextStartDates && route.nextStartDates.length > 0" class="mt-6 border-t pt-6">
                <h4 class="mb-3 font-semibold text-gray-900">{{ t('routes.nextDeparture') }}</h4>
                <div class="space-y-2">
                  <div
                    v-for="date in route.nextStartDates.slice(0, 3)"
                    :key="date"
                    class="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700"
                  >
                    {{ formatDate(date) }}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <!-- Inquiry Modal -->
    <InquiryModal v-model="showInquiryModal" :route-id="route.id" />
  </div>
  
  <div v-else-if="loading" class="container-custom py-16">
    <Skeleton height="400px" class="mb-8" />
    <Skeleton height="40px" class="mb-4" />
    <Skeleton height="20px" width="60%" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { getRouteDetail } from '@/api/routes'
import type { RouteItem, LocalizedText } from '@/types/route'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'
import Badge from '@/components/base/Badge.vue'
import Skeleton from '@/components/base/Skeleton.vue'
import InquiryModal from '@/components/inquiry/InquiryModal.vue'
import { formatCurrency, formatDate } from '@/utils/format'
import { useFavorites } from '@/composables/useFavorites'

const route = useRoute()
const { t, locale } = useI18n()
const { isFavorite, toggleFavorite: toggleFav } = useFavorites()

const loading = ref(true)
const routeData = ref<RouteItem | null>(null)
const showInquiryModal = ref(false)

const isFav = computed(() => {
  return routeData.value ? isFavorite(routeData.value.id, 'route') : false
})

onMounted(async () => {
  try {
    const id = route.params.id as string
    routeData.value = await getRouteDetail(id)
  } catch (error) {
    console.error('Failed to load route:', error)
  } finally {
    loading.value = false
  }
})

function getLocalizedText(text: LocalizedText | Partial<LocalizedText> | undefined): string {
  if (!text) return ''
  return (text as any)[locale.value] || (text as any).en || (text as any).th || ''
}

function toggleFavorite() {
  if (routeData.value) {
    toggleFav(routeData.value.id, 'route')
  }
}

function openInquiryModal() {
  showInquiryModal.value = true
}

// SEO
useHead(computed(() => ({
  title: routeData.value ? getLocalizedText(routeData.value.title) : t('routes.title'),
  meta: [
    {
      name: 'description',
      content: routeData.value ? getLocalizedText(routeData.value.subtitle) : '',
    },
  ],
})))
</script>

