<template>
  <Card hover clickable class="group overflow-hidden" padding="none" @click="goToDetail">
    <!-- 图片 -->
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-200">
      <img
        :src="route.coverImage || '/images/placeholder.jpg'"
        :alt="getLocalizedText(route.title)"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <!-- 徽章 -->
      <div class="absolute left-3 top-3 flex flex-wrap gap-2">
        <Badge v-for="theme in route.themes.slice(0, 2)" :key="theme" variant="primary" size="sm">
          {{ t(`themes.${theme}`) }}
        </Badge>
      </div>
      <!-- 收藏按钮 -->
      <button
        type="button"
        class="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-600 shadow-md transition-colors hover:bg-white hover:text-primary-600"
        @click.stop="toggleFavorite"
      >
        <svg
          class="h-5 w-5"
          :class="{ 'fill-primary-600 text-primary-600': isFav }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>

    <!-- 内容 -->
    <div class="p-4">
      <!-- 城市 -->
      <div class="mb-2 flex items-center text-sm text-gray-600">
        <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {{ t(`cities.${route.city}`) }}
      </div>

      <!-- 标题 -->
      <h3 class="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
        {{ getLocalizedText(route.title) }}
      </h3>

      <!-- 信息 -->
      <div class="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
        <span class="flex items-center">
          <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ t('routes.days', { n: route.durationDays }) }}
        </span>
        <span class="flex items-center">
          <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {{ t('routes.age', { min: route.ageMin, max: route.ageMax }) }}
        </span>
      </div>

      <!-- 价格和操作 -->
      <div class="flex items-center justify-between border-t border-gray-100 pt-3">
        <div>
          <div class="text-xs text-gray-500">{{ t('routes.from') }}</div>
          <div class="text-xl font-bold text-primary-600">
            {{ formatCurrency(route.priceTHB) }}
          </div>
        </div>
        <Button variant="primary" size="sm" @click.stop="goToDetail">
          {{ t('routes.viewDetails') }}
        </Button>
      </div>

      <!-- 剩余席位 -->
      <div v-if="route.seatsRemaining && route.seatsRemaining < 10" class="mt-2 text-xs text-orange-600">
        {{ t('routes.seatsLeft', { n: route.seatsRemaining }) }}
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { RouteItem, LocalizedText } from '@/types/route'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'
import Badge from '@/components/base/Badge.vue'
import { formatCurrency } from '@/utils/format'
import { useFavorites } from '@/composables/useFavorites'

interface Props {
  route: RouteItem
}

const props = defineProps<Props>()

const { t, locale } = useI18n()
const router = useRouter()
const { isFavorite, toggleFavorite: toggleFav } = useFavorites()

const isFav = computed(() => isFavorite(props.route.id, 'route'))

function getLocalizedText(text: LocalizedText): string {
  return text[locale.value as keyof LocalizedText] || text.en || text.th
}

function goToDetail() {
  router.push(`/routes/${props.route.id}`)
}

function toggleFavorite() {
  toggleFav(props.route.id, 'route')
}
</script>

