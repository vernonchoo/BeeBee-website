<template>
  <div class="bg-gray-50 py-8">
    <div class="container-custom">
      <div class="lg:grid lg:grid-cols-4 lg:gap-8">
        <!-- 筛选侧栏 (Desktop) -->
        <aside class="hidden lg:block">
          <div class="sticky top-24">
            <FilterPanel v-model:filters="filters" @update:filters="handleFilterChange" />
          </div>
        </aside>

        <!-- 主内容区 -->
        <div class="lg:col-span-3">
          <!-- 头部 -->
          <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">{{ t('routes.title') }}</h1>
              <p v-if="!loading" class="mt-1 text-gray-600">
                {{ t('common.noResults') }}: {{ total }}
              </p>
            </div>

            <div class="flex gap-2">
              <!-- 移动端筛选按钮 -->
              <Button variant="outline" class="lg:hidden" @click="showFilterDrawer = true">
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                {{ t('common.filter') }}
              </Button>

              <!-- 排序 -->
              <select
                v-model="filters.sort"
                class="rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                @change="handleFilterChange"
              >
                <option value="popular">{{ t('filters.popular') }}</option>
                <option value="newest">{{ t('filters.newest') }}</option>
                <option value="price_asc">{{ t('filters.priceLowToHigh') }}</option>
                <option value="price_desc">{{ t('filters.priceHighToLow') }}</option>
                <option value="duration_asc">{{ t('filters.durationShort') }}</option>
                <option value="duration_desc">{{ t('filters.durationLong') }}</option>
              </select>
            </div>
          </div>

          <!-- 活动筛选标签 -->
          <div v-if="hasActiveFilters" class="mb-6 flex flex-wrap items-center gap-2">
            <Badge
              v-for="(value, key) in activeFilterTags"
              :key="`${key}-${value}`"
              variant="primary"
              size="md"
              class="cursor-pointer"
              @click="removeFilter(key as string, value)"
            >
              {{ value }}
              <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Badge>
            <button
              type="button"
              class="text-sm text-gray-600 hover:text-primary-600"
              @click="clearFilters"
            >
              {{ t('common.clear') }}
            </button>
          </div>

          <!-- 加载状态 -->
          <div v-if="loading" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div v-for="i in 6" :key="i" class="card p-4">
              <Skeleton height="200px" class="mb-4" />
              <Skeleton height="24px" class="mb-2" />
              <Skeleton height="16px" width="60%" />
            </div>
          </div>

          <!-- 线路列表 -->
          <div v-else-if="routes.length > 0" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <RouteCard v-for="route in routes" :key="route.id" :route="route" />
          </div>

          <!-- 空状态 -->
          <div v-else class="py-16 text-center">
            <svg class="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-4 text-lg font-medium text-gray-900">{{ t('routes.noRoutesFound') }}</h3>
            <p class="mt-2 text-gray-600">{{ t('common.noResults') }}</p>
            <Button variant="primary" class="mt-6" @click="clearFilters">
              {{ t('common.clear') }}
            </Button>
          </div>

          <!-- 分页 -->
          <div v-if="totalPages > 1" class="mt-8 flex justify-center">
            <nav class="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
              >
                {{ t('common.previous') }}
              </Button>
              <Button
                v-for="page in visiblePages"
                :key="page"
                :variant="page === currentPage ? 'primary' : 'outline'"
                size="sm"
                @click="goToPage(page)"
              >
                {{ page }}
              </Button>
              <Button
                variant="outline"
                size="sm"
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
              >
                {{ t('common.next') }}
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- 移动端筛选抽屉 -->
    <Drawer v-model="showFilterDrawer" :title="t('filters.title')" width="320px">
      <FilterPanel v-model:filters="filters" @update:filters="handleFilterChangeAndClose" />
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { getRouteList } from '@/api/routes'
import type { RouteItem, RouteListQuery } from '@/types/route'
import Button from '@/components/base/Button.vue'
import Badge from '@/components/base/Badge.vue'
import Drawer from '@/components/base/Drawer.vue'
import Skeleton from '@/components/base/Skeleton.vue'
import RouteCard from '@/components/routes/RouteCard.vue'
import FilterPanel from '@/components/routes/FilterPanel.vue'
import { parseQuery, stringifyQuery } from '@/utils/url'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const loading = ref(true)
const routes = ref<RouteItem[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = 12
const showFilterDrawer = ref(false)

const filters = ref<RouteListQuery>({
  city: [],
  ageMin: undefined,
  ageMax: undefined,
  theme: [],
  sort: 'popular',
  page: 1,
  pageSize,
})

// 从 URL 初始化筛选条件
onMounted(() => {
  const queryParams = parseQuery(route.query as any)
  filters.value = { ...filters.value, ...queryParams }
  loadRoutes()
})

// 计算属性
const totalPages = computed(() => Math.ceil(total.value / pageSize))

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  const end = Math.min(totalPages.value, start + maxVisible - 1)

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const hasActiveFilters = computed(() => {
  return (
    (filters.value.city && filters.value.city.length > 0) ||
    filters.value.ageMin !== undefined ||
    filters.value.ageMax !== undefined ||
    (filters.value.theme && filters.value.theme.length > 0)
  )
})

const activeFilterTags = computed(() => {
  const tags: Record<string, string> = {}

  if (filters.value.city && filters.value.city.length > 0) {
    filters.value.city.forEach((city) => {
      tags[`city-${city}`] = t(`cities.${city}`)
    })
  }

  if (filters.value.theme && filters.value.theme.length > 0) {
    filters.value.theme.forEach((theme) => {
      tags[`theme-${theme}`] = t(`themes.${theme}`)
    })
  }

  if (filters.value.ageMin !== undefined || filters.value.ageMax !== undefined) {
    tags.age = `${filters.value.ageMin || 3}-${filters.value.ageMax || 18} ${t('search.age')}`
  }

  return tags
})

// 方法
async function loadRoutes() {
  loading.value = true
  try {
    const response = await getRouteList(filters.value)
    routes.value = response.items
    total.value = response.total
    currentPage.value = response.page
  } catch (error) {
    console.error('Failed to load routes:', error)
  } finally {
    loading.value = false
  }
}

function handleFilterChange() {
  filters.value.page = 1
  updateURL()
  loadRoutes()
}

function handleFilterChangeAndClose() {
  showFilterDrawer.value = false
  handleFilterChange()
}

function updateURL() {
  const query = stringifyQuery(filters.value)
  router.replace({ query: query as any })
}

function removeFilter(key: string, value: string) {
  const [type, val] = key.split('-')

  if (type === 'city') {
    filters.value.city = filters.value.city?.filter((c) => c !== val)
  } else if (type === 'theme') {
    filters.value.theme = filters.value.theme?.filter((t) => t !== val)
  } else if (type === 'age') {
    filters.value.ageMin = undefined
    filters.value.ageMax = undefined
  }

  handleFilterChange()
}

function clearFilters() {
  filters.value = {
    city: [],
    theme: [],
    sort: 'popular',
    page: 1,
    pageSize,
  }
  handleFilterChange()
}

function goToPage(page: number) {
  filters.value.page = page
  updateURL()
  loadRoutes()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// SEO
useHead({
  title: t('routes.title'),
  meta: [
    {
      name: 'description',
      content: t('hero.subtitle'),
    },
  ],
})
</script>

