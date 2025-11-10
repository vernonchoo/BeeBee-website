<template>
  <div class="space-y-6">
    <h3 class="text-lg font-semibold text-gray-900">
      {{ t('filters.title') }}
    </h3>

    <!-- 国家 -->
    <div>
      <h4 class="mb-3 font-medium text-gray-900">
        {{ t('filters.country') }}
      </h4>
      <div class="space-y-2">
        <label
          v-for="country in countries"
          :key="country.value"
          class="flex cursor-pointer items-center"
        >
          <input
            v-model="localFilters.country"
            type="checkbox"
            :value="country.value"
            class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            @change="onCountryChange"
          />
          <span class="ml-2 text-sm text-gray-700">{{ t(country.label) }}</span>
        </label>
      </div>
    </div>

    <!-- 城市 -->
    <div>
      <h4 class="mb-3 font-medium text-gray-900">
        {{ t('filters.city') }}
      </h4>
      <div class="space-y-2">
        <label
          v-for="city in availableCities"
          :key="city.value"
          class="flex cursor-pointer items-center"
        >
          <input
            v-model="localFilters.city"
            type="checkbox"
            :value="city.value"
            class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span class="ml-2 text-sm text-gray-700">{{ t(city.label) }}</span>
        </label>
      </div>
    </div>

    <!-- 年龄范围 -->
    <div>
      <h4 class="mb-3 font-medium text-gray-900">
        {{ t('filters.ageRange') }}
      </h4>
      <div class="space-y-3">
        <div>
          <label class="mb-1 block text-sm text-gray-600">{{ t('search.selectAge') }} (最小)</label>
          <input
            v-model.number="localFilters.ageMin"
            type="number"
            min="3"
            max="18"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label class="mb-1 block text-sm text-gray-600">{{ t('search.selectAge') }} (最大)</label>
          <input
            v-model.number="localFilters.ageMax"
            type="number"
            min="3"
            max="18"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
    </div>

    <!-- 主题 -->
    <div>
      <h4 class="mb-3 font-medium text-gray-900">
        {{ t('filters.theme') }}
      </h4>
      <div class="space-y-2">
        <label v-for="theme in themes" :key="theme.value" class="flex cursor-pointer items-center">
          <input
            v-model="localFilters.theme"
            type="checkbox"
            :value="theme.value"
            class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span class="ml-2 text-sm text-gray-700">{{ t(theme.label) }}</span>
        </label>
      </div>
    </div>

    <!-- 应用按钮 -->
    <Button variant="primary" block @click="applyFilters">
      {{ t('common.apply') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { RouteListQuery } from '@/types/route'
import Button from '@/components/base/Button.vue'

interface Props {
  filters: RouteListQuery
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:filters': [filters: RouteListQuery]
}>()

const { t } = useI18n()

const localFilters = ref<RouteListQuery>({ ...props.filters })

// 国家列表
const countries = [{ value: 'china', label: 'countries.china' }]

// 国家到城市的映射
const countryCityMap: Record<string, Array<{ value: string; label: string }>> = {
  china: [
    { value: 'shanghai', label: 'cities.shanghai' },
    { value: 'guangzhou', label: 'cities.guangzhou' },
    { value: 'beijing', label: 'cities.beijing' },
    { value: 'zhuhai', label: 'cities.zhuhai' },
  ],
}

// 根据选择的国家显示对应的城市
const availableCities = computed(() => {
  const selectedCountries = localFilters.value.country || []
  if (selectedCountries.length === 0) {
    // 如果没有选择国家，显示所有城市
    return countryCityMap.china
  }

  // 合并所有选中国家的城市
  const cities: Array<{ value: string; label: string }> = []
  const citySet = new Set<string>()

  selectedCountries.forEach((country) => {
    const citiesForCountry = countryCityMap[country] || []
    citiesForCountry.forEach((city) => {
      if (!citySet.has(city.value)) {
        citySet.add(city.value)
        cities.push(city)
      }
    })
  })

  return cities
})

const themes = [
  { value: 'STEM', label: 'themes.STEM' },
  { value: 'AI', label: 'themes.AI' },
  { value: 'Culture', label: 'themes.Culture' },
  { value: 'History', label: 'themes.History' },
  { value: 'Sports', label: 'themes.Sports' },
  { value: 'Arts', label: 'themes.Arts' },
  { value: 'Aerospace', label: 'themes.Aerospace' },
]

// 当国家选择改变时，过滤城市选择
function onCountryChange() {
  const availableCityValues = availableCities.value.map((c) => c.value)

  // 移除不在可用城市列表中的城市选择
  if (localFilters.value.city) {
    localFilters.value.city = localFilters.value.city.filter((city) =>
      availableCityValues.includes(city)
    )
  }
}

watch(
  () => props.filters,
  (newFilters) => {
    localFilters.value = { ...newFilters }
  },
  { deep: true }
)

function applyFilters() {
  emit('update:filters', localFilters.value)
}
</script>
