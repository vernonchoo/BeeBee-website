<template>
  <div v-if="!loading && routeData" class="bg-white">
    <!-- Gallery Section -->
    <div class="relative h-96 overflow-hidden bg-gray-200">
      <img
        :src="routeData.coverImage || '/images/placeholder.jpg'"
        :alt="getLocalizedText(routeData.title)"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="container-custom py-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Breadcrumb -->
          <nav class="mb-4 flex items-center space-x-2 text-sm text-gray-600">
            <RouterLink to="/" class="hover:text-primary-600">
              {{ t('nav.home') }}
            </RouterLink>
            <span>/</span>
            <RouterLink to="/routes" class="hover:text-primary-600">
              {{ t('nav.routes') }}
            </RouterLink>
            <span>/</span>
            <span class="text-gray-900">{{ getLocalizedText(routeData.title) }}</span>
          </nav>

          <!-- Title -->
          <h1 class="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
            {{ getLocalizedText(routeData.title) }}
          </h1>
          <p v-if="routeData.subtitle" class="mb-6 text-lg text-gray-600">
            {{ getLocalizedText(routeData.subtitle) }}
          </p>

          <!-- Meta Info -->
          <div class="mb-8 flex flex-wrap items-center gap-4 border-b border-gray-200 pb-6">
            <div v-if="routeData.departureCity" class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {{ getLocalizedText(routeData.departureCity) }}
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              {{ t(`cities.${routeData.city}`) }}
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {{ t('routes.days', { n: routeData.durationDays }) }}
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {{ t('routes.age', { min: routeData.ageMin, max: routeData.ageMax }) }}
            </div>
            <div class="flex gap-2">
              <Badge v-for="theme in routeData.themes" :key="theme" variant="tech">
                {{ t(`themes.${theme}`) }}
              </Badge>
            </div>
          </div>

          <!-- Flight Information -->
          <section v-if="routeData.flightInfo" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('routeDetail.flightInfo') }}
            </h2>
            <Card padding="md">
              <div class="space-y-4">
                <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div class="flex items-center">
                    <svg
                      class="mr-2 h-5 w-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span class="font-semibold text-gray-900">{{
                      routeData.flightInfo.airline
                    }}</span>
                  </div>
                  <span class="text-sm font-medium text-gray-700">{{
                    routeData.flightInfo.flightNumber
                  }}</span>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 class="mb-2 text-sm font-semibold text-gray-700">
                      {{ t('routeDetail.departure') }}
                    </h4>
                    <div class="space-y-1 text-sm text-gray-600">
                      <div class="font-medium">
                        {{ getLocalizedText(routeData.flightInfo.departure.city) }}
                      </div>
                      <div>{{ routeData.flightInfo.departure.airport }}</div>
                      <div>
                        {{ formatDate(routeData.flightInfo.departure.date) }}
                        {{ routeData.flightInfo.departure.time }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="mb-2 text-sm font-semibold text-gray-700">
                      {{ t('routeDetail.arrival') }}
                    </h4>
                    <div class="space-y-1 text-sm text-gray-600">
                      <div class="font-medium">
                        {{ getLocalizedText(routeData.flightInfo.arrival.city) }}
                      </div>
                      <div>{{ routeData.flightInfo.arrival.airport }}</div>
                      <div>
                        {{ formatDate(routeData.flightInfo.arrival.date) }}
                        {{ routeData.flightInfo.arrival.time }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <!-- Highlights -->
          <section v-if="routeData.highlights && routeData.highlights.length > 0" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('routeDetail.highlights') }}
            </h2>
            <ul class="space-y-2">
              <li
                v-for="(highlight, index) in routeData.highlights"
                :key="index"
                class="flex items-start"
              >
                <svg
                  class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-700">{{ highlight }}</span>
              </li>
            </ul>
          </section>

          <!-- Itinerary -->
          <section v-if="routeData.itinerary && routeData.itinerary.length > 0" class="mb-8">
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              {{ t('routeDetail.itinerary') }}
            </h2>
            <div class="space-y-6">
              <div
                v-for="day in routeData.itinerary"
                :key="day.day"
                class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div class="mb-4 flex items-center border-b border-gray-200 pb-3">
                  <div
                    class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600"
                  >
                    {{ day.day }}
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ t('routeDetail.day', { n: day.day }) }}: {{ getLocalizedText(day.title) }}
                  </h3>
                </div>
                <div class="space-y-4">
                  <div v-for="(activity, index) in day.activities" :key="index" class="flex gap-4">
                    <div class="flex-shrink-0">
                      <div
                        class="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                      >
                        {{ activity.time }}
                      </div>
                    </div>
                    <div class="flex-1">
                      <h4 class="mb-1 font-semibold text-gray-900">
                        {{ getLocalizedText(activity.title) }}
                      </h4>
                      <p class="text-sm text-gray-600">
                        {{ getLocalizedText(activity.description) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Includes/Excludes -->
          <div class="mb-8 grid gap-6 sm:grid-cols-2">
            <div v-if="routeData.includes">
              <h3 class="mb-3 font-semibold text-gray-900">
                {{ t('routeDetail.included') }}
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(item, index) in routeData.includes"
                  :key="index"
                  class="flex items-start text-sm text-gray-700"
                >
                  <svg
                    class="mr-2 mt-0.5 h-4 w-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="routeData.excludes">
              <h3 class="mb-3 font-semibold text-gray-900">
                {{ t('routeDetail.excluded') }}
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(item, index) in routeData.excludes"
                  :key="index"
                  class="flex items-start text-sm text-gray-700"
                >
                  <svg
                    class="mr-2 mt-0.5 h-4 w-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <!-- FAQ -->
          <section v-if="routeData.faq && routeData.faq.length > 0" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('routeDetail.faq') }}
            </h2>
            <div class="space-y-4">
              <div
                v-for="(item, index) in routeData.faq"
                :key="index"
                class="rounded-lg border border-gray-200 bg-white p-4"
              >
                <h4 class="mb-2 font-semibold text-gray-900">
                  {{ getLocalizedText(item.question) }}
                </h4>
                <p class="text-sm text-gray-600">
                  {{ getLocalizedText(item.answer) }}
                </p>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <Card padding="md">
              <!-- Price -->
              <div class="mb-6">
                <div class="flex items-baseline justify-center gap-3">
                  <div class="text-4xl font-bold text-primary-600">
                    {{ formatCurrency(routeData.priceTHB) }}
                  </div>
                  <div
                    v-if="
                      routeData.originalPriceTHB && routeData.originalPriceTHB > routeData.priceTHB
                    "
                    class="flex flex-col items-start"
                  >
                    <span class="text-lg text-gray-400 line-through">
                      {{ formatCurrency(routeData.originalPriceTHB) }}
                    </span>
                    <span class="text-sm font-semibold text-red-600">
                      {{ Math.round((1 - routeData.priceTHB / routeData.originalPriceTHB) * 100) }}%
                      {{ t('routes.off') }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="space-y-3">
                <Button variant="primary" size="lg" block @click="openInquiryModal">
                  {{ t('routeDetail.inquireNow') }}
                </Button>
              </div>

              <!-- Departure Dates -->
              <div
                v-if="routeData.nextStartDates && routeData.nextStartDates.length > 0"
                class="mt-6 border-t pt-6"
              >
                <h4 class="mb-3 font-semibold text-gray-900">
                  {{ t('routes.nextDeparture') }}
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="date in routeData.nextStartDates.slice(0, 5)"
                    :key="date"
                    class="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition-colors hover:border-primary-500 hover:bg-primary-50"
                  >
                    {{ formatDate(date) }}
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div v-if="routeData.seatsRemaining" class="mt-6 border-t pt-6">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600">{{
                    t('routes.seatsLeft', { n: routeData.seatsRemaining })
                  }}</span>
                  <span v-if="routeData.rating" class="flex items-center text-yellow-600">
                    <svg class="mr-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    {{ routeData.rating }}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <!-- Inquiry Modal -->
    <InquiryModal v-model="showInquiryModal" :route-id="routeData.id" />
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

const route = useRoute()
const { t, locale } = useI18n()

const loading = ref(true)
const routeData = ref<RouteItem | null>(null)
const showInquiryModal = ref(false)

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

function openInquiryModal() {
  showInquiryModal.value = true
}

// SEO
useHead(
  computed(() => ({
    title: routeData.value ? getLocalizedText(routeData.value.title) : t('routes.title'),
    meta: [
      {
        name: 'description',
        content: routeData.value ? getLocalizedText(routeData.value.subtitle) : '',
      },
    ],
  }))
)
</script>
