<template>
  <div class="bg-gray-50 py-8">
    <!-- Hero Banner -->
    <div
      class="relative mb-8 h-64 overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500"
    >
      <div class="container-custom flex h-full items-center justify-center">
        <h1 class="text-4xl font-bold text-white lg:text-5xl">
          {{ t('schedule.title') }}
        </h1>
      </div>
    </div>

    <div class="container-custom">
      <!-- Loading State -->
      <div v-if="loading" class="py-16 text-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent"
        />
        <p class="mt-4 text-gray-600">
          {{ t('common.loading') }}
        </p>
      </div>

      <!-- Schedule Table -->
      <div
        v-else-if="groupedSchedule.length > 0"
        class="overflow-hidden rounded-lg bg-white shadow-sm"
      >
        <!-- Table Header -->
        <div
          class="grid grid-cols-7 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 font-semibold text-gray-900"
        >
          <div>{{ t('schedule.date') }}</div>
          <div>{{ t('schedule.tourName') }}</div>
          <div class="text-center">
            {{ t('schedule.days') }}
          </div>
          <div>{{ t('schedule.region') }}</div>
          <div class="text-right">
            {{ t('schedule.price') }}
          </div>
          <div class="text-center">
            {{ t('schedule.availability') }}
          </div>
          <div class="text-center">
            {{ t('schedule.signUp') }}
          </div>
        </div>

        <!-- Schedule Items Grouped by Month -->
        <div v-for="(monthGroup, monthIndex) in groupedSchedule" :key="monthGroup.month">
          <!-- Month Header -->
          <div class="border-b-2 border-gray-300 bg-gray-100 px-6 py-3">
            <h2 class="text-lg font-bold text-gray-900">
              {{ monthGroup.monthLabel }}
            </h2>
          </div>

          <!-- Schedule Rows -->
          <div
            v-for="(item, index) in monthGroup.items"
            :key="item.id"
            class="grid grid-cols-7 gap-4 border-b border-gray-200 px-6 py-4 transition-colors hover:bg-gray-50"
            :class="{ 'bg-white': index % 2 === 0, 'bg-gray-50': index % 2 === 1 }"
          >
            <!-- Date -->
            <div class="text-sm text-gray-700">
              {{ formatDateRange(item.startDate, item.endDate) }}
            </div>

            <!-- Tour Name -->
            <div>
              <RouterLink
                :to="`/routes/${item.routeId}`"
                class="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 hover:underline"
              >
                {{ getLocalizedText(item.route.title) }}
              </RouterLink>
            </div>

            <!-- Days -->
            <div class="text-center text-sm text-gray-700">
              {{ t('routes.days', { n: item.route.durationDays }) }}
            </div>

            <!-- Region -->
            <div class="text-sm text-gray-700">
              {{ t(`cities.${item.route.city}`) }}
            </div>

            <!-- Price -->
            <div class="text-right text-sm font-semibold text-gray-900">
              {{ formatCurrency(item.route.priceTHB) }}
            </div>

            <!-- Availability -->
            <div class="text-center">
              <span
                v-if="item.seatsRemaining > 5"
                class="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
              >
                {{ t('schedule.available') }}
              </span>
              <span
                v-else-if="item.seatsRemaining > 0"
                class="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800"
              >
                {{ t('schedule.limited') }}
              </span>
              <span
                v-else
                class="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800"
              >
                {{ t('schedule.full') }}
              </span>
              <div v-if="item.seatsRemaining > 0" class="mt-1 text-xs text-gray-500">
                {{ t('schedule.seatsRemaining', { n: item.seatsRemaining }) }}
              </div>
            </div>

            <!-- Sign Up Button -->
            <div class="flex items-center justify-center">
              <Button
                v-if="item.seatsRemaining > 0"
                variant="primary"
                size="sm"
                @click="handleSignUp(item)"
              >
                {{ t('schedule.signUp') }}
              </Button>
              <span v-else class="text-sm text-gray-400">{{ t('schedule.full') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="py-16 text-center">
        <svg
          class="mx-auto h-24 w-24 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">
          {{ t('schedule.title') }}
        </h3>
        <p class="mt-2 text-gray-600">
          {{ t('common.noResults') }}
        </p>
      </div>
    </div>

    <!-- Inquiry Modal -->
    <InquiryModal
      v-model="showInquiryModal"
      :route-id="selectedRouteId"
      :intended-date="selectedDate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import type { LocalizedText } from '@/types/route'
import { mockScheduleItems, type ScheduleItem } from '@/mocks/schedule'
import Button from '@/components/base/Button.vue'
import InquiryModal from '@/components/inquiry/InquiryModal.vue'
import { formatCurrency, formatDate as formatDateUtil } from '@/utils/format'

const { t, locale } = useI18n()
const router = useRouter()

const loading = ref(true)
const scheduleItems = ref<ScheduleItem[]>([])
const showInquiryModal = ref(false)
const selectedRouteId = ref<string>()
const selectedDate = ref<string>()

// Group schedule items by month
const groupedSchedule = computed(() => {
  const groups: Record<string, ScheduleItem[]> = {}

  scheduleItems.value.forEach((item) => {
    const date = new Date(item.startDate)
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    const monthLabel = formatMonthLabel(date)

    if (!groups[monthKey]) {
      groups[monthKey] = []
    }
    groups[monthKey].push(item)
  })

  // Convert to array and sort by month
  return Object.keys(groups)
    .sort()
    .map((monthKey) => {
      const date = new Date(monthKey + '-01')
      return {
        month: monthKey,
        monthLabel: formatMonthLabel(date),
        items: groups[monthKey],
      }
    })
})

function formatMonthLabel(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  if (locale.value === 'zh-CN') {
    return `${year}年${month}月`
  } else if (locale.value === 'th-TH') {
    const monthNames = [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ]
    return `${monthNames[month - 1]} ${year}`
  } else {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return `${monthNames[month - 1]} ${year}`
  }
}

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (locale.value === 'zh-CN') {
    const startMonth = start.getMonth() + 1
    const startDay = start.getDate()
    const endMonth = end.getMonth() + 1
    const endDay = end.getDate()

    if (startMonth === endMonth) {
      return `${startMonth}月${startDay}日至${endDay}日`
    } else {
      return `${startMonth}月${startDay}日至${endMonth}月${endDay}日`
    }
  } else if (locale.value === 'th-TH') {
    return `${formatDateUtil(startDate, locale.value as any)} - ${formatDateUtil(endDate, locale.value as any)}`
  } else {
    return `${formatDateUtil(startDate, locale.value as any)} - ${formatDateUtil(endDate, locale.value as any)}`
  }
}

function getLocalizedText(text: LocalizedText): string {
  return text[locale.value as keyof LocalizedText] || text.en || text.th
}

function handleSignUp(item: ScheduleItem) {
  selectedRouteId.value = item.routeId
  selectedDate.value = item.startDate
  showInquiryModal.value = true
}

onMounted(async () => {
  // Simulate loading
  setTimeout(() => {
    scheduleItems.value = mockScheduleItems
    loading.value = false
  }, 300)
})

// SEO
useHead({
  title: t('schedule.title'),
  meta: [
    {
      name: 'description',
      content: t('schedule.title'),
    },
  ],
})
</script>
