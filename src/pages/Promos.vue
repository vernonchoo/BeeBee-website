<template>
  <div class="bg-gray-50 py-8">
    <div class="container-custom">
      <div class="mb-8">
        <h1 class="mb-4 text-3xl font-bold text-gray-900">{{ t('promos.title') }}</h1>
        <p class="text-gray-600">{{ t('promos.featured') }}</p>
      </div>

      <!-- Tab Filter -->
      <div class="mb-8 flex flex-wrap gap-2">
        <Button
          v-for="tab in tabs"
          :key="tab.value"
          :variant="activeTab === tab.value ? 'primary' : 'outline'"
          @click="activeTab = tab.value"
        >
          {{ t(tab.label) }}
        </Button>
      </div>

      <!-- Promos Grid -->
      <div v-if="!loading && filteredPromos.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PromoCard v-for="promo in filteredPromos" :key="promo.id" :promo="promo" />
      </div>

      <!-- Loading -->
      <div v-else-if="loading" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in 6" :key="i" class="card p-4">
          <Skeleton height="200px" class="mb-4" />
          <Skeleton height="24px" class="mb-2" />
          <Skeleton height="16px" width="60%" />
        </div>
      </div>

      <!-- Empty -->
      <div v-else class="py-16 text-center">
        <p class="text-gray-600">{{ t('promos.noPromosFound') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { getPromoList } from '@/api/promos'
import type { PromoItem, PromoType } from '@/types/promo'
import Button from '@/components/base/Button.vue'
import PromoCard from '@/components/promos/PromoCard.vue'
import Skeleton from '@/components/base/Skeleton.vue'

const { t } = useI18n()

const loading = ref(true)
const promos = ref<PromoItem[]>([])
const activeTab = ref<PromoType | 'all'>('all')

const tabs = [
  { value: 'all', label: 'common.viewAll' },
  { value: 'flight', label: 'promos.flight' },
  { value: 'hotel', label: 'promos.hotel' },
  { value: 'bundle', label: 'promos.bundle' },
]

const filteredPromos = computed(() => {
  if (activeTab.value === 'all') {
    return promos.value
  }
  return promos.value.filter((p) => p.type === activeTab.value)
})

onMounted(async () => {
  try {
    const response = await getPromoList()
    promos.value = response.items
  } catch (error) {
    console.error('Failed to load promos:', error)
  } finally {
    loading.value = false
  }
})

useHead({
  title: t('promos.title'),
  meta: [{ name: 'description', content: t('promos.featured') }],
})
</script>

