<template>
  <Card class="mx-auto max-w-4xl" padding="md">
    <form class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" @submit.prevent="handleSearch">
      <!-- 目的地 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700">
          {{ t('search.destination') }}
        </label>
        <select
          v-model="searchParams.city"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          <option value="">{{ t('search.selectCity') }}</option>
          <option v-for="city in cities" :key="city.value" :value="city.value">
            {{ t(city.label) }}
          </option>
        </select>
      </div>

      <!-- 年龄 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700">
          {{ t('search.age') }}
        </label>
        <input
          v-model="searchParams.age"
          type="number"
          :placeholder="t('search.selectAge')"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          min="3"
          max="18"
        />
      </div>

      <!-- 主题 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700">
          {{ t('search.theme') }}
        </label>
        <select
          v-model="searchParams.theme"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          <option value="">{{ t('search.selectTheme') }}</option>
          <option v-for="theme in themes" :key="theme.value" :value="theme.value">
            {{ t(theme.label) }}
          </option>
        </select>
      </div>

      <!-- 搜索按钮 -->
      <div class="flex items-end">
        <Button type="submit" variant="primary" size="lg" block>
          {{ t('search.searchButton') }}
        </Button>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'

const { t } = useI18n()
const router = useRouter()

const searchParams = ref({
  city: '',
  age: null as number | null,
  theme: '',
})

const cities = [
  { value: 'shanghai', label: 'cities.shanghai' },
  { value: 'guangzhou', label: 'cities.guangzhou' },
  { value: 'beijing', label: 'cities.beijing' },
  { value: 'zhuhai', label: 'cities.zhuhai' },
]

const themes = [
  { value: 'STEM', label: 'themes.STEM' },
  { value: 'AI', label: 'themes.AI' },
  { value: 'Culture', label: 'themes.Culture' },
  { value: 'History', label: 'themes.History' },
  { value: 'Aerospace', label: 'themes.Aerospace' },
]

function handleSearch() {
  const query: Record<string, any> = {}
  
  if (searchParams.value.city) {
    query.city = [searchParams.value.city]
  }
  
  if (searchParams.value.age) {
    query.ageMin = searchParams.value.age
    query.ageMax = searchParams.value.age
  }
  
  if (searchParams.value.theme) {
    query.theme = [searchParams.value.theme]
  }

  router.push({
    path: '/routes',
    query,
  })
}
</script>

