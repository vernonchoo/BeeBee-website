<template>
  <section class="bg-gray-50 py-16 sm:py-24">
    <div class="container-custom">
      <!-- 标题 -->
      <div class="mb-12 flex items-center justify-between">
        <div>
          <h2 class="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            {{ t('promos.featured') }}
          </h2>
          <p class="text-gray-600">
            {{ t('promos.title') }}
          </p>
        </div>
        <Button variant="outline" @click="goToPromos">
          {{ t('common.viewAll') }}
        </Button>
      </div>

      <!-- 促销卡片 -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PromoCard
          v-for="promo in promos.slice(0, 3)"
          :key="promo.id"
          :promo="promo"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getPromoList } from '@/api/promos'
import type { PromoItem } from '@/types/promo'
import Button from '@/components/base/Button.vue'
import PromoCard from '@/components/promos/PromoCard.vue'

const { t } = useI18n()
const router = useRouter()

const promos = ref<PromoItem[]>([])

onMounted(async () => {
  try {
    const response = await getPromoList({ pageSize: 3 })
    promos.value = response.items
  } catch (error) {
    console.error('Failed to load promos:', error)
  }
})

function goToPromos() {
  router.push('/promos')
}
</script>

