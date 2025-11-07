<template>
  <section id="featured-routes" class="bg-white py-16 sm:py-24">
    <div class="container-custom">
      <!-- 标题 -->
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          {{ t('routes.featured') }}
        </h2>
        <p class="text-lg text-gray-600">
          {{ t('hero.subtitle') }}
        </p>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="i in 4" :key="i" class="card p-4">
          <Skeleton height="200px" class="mb-4" />
          <Skeleton height="24px" class="mb-2" />
          <Skeleton height="16px" width="60%" />
        </div>
      </div>

      <!-- 线路卡片 -->
      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <RouteCard
          v-for="route in routes"
          :key="route.id"
          :route="route"
        />
      </div>

      <!-- 查看更多 -->
      <div class="mt-12 text-center">
        <Button variant="outline" size="lg" @click="goToRoutes">
          {{ t('common.viewAll') }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getRouteList } from '@/api/routes'
import type { RouteItem } from '@/types/route'
import Button from '@/components/base/Button.vue'
import RouteCard from '@/components/routes/RouteCard.vue'
import Skeleton from '@/components/base/Skeleton.vue'

const { t } = useI18n()
const router = useRouter()

const loading = ref(true)
const routes = ref<RouteItem[]>([])

onMounted(async () => {
  try {
    const response = await getRouteList({ pageSize: 4 })
    routes.value = response.items
  } catch (error) {
    console.error('Failed to load routes:', error)
  } finally {
    loading.value = false
  }
})

function goToRoutes() {
  router.push('/routes')
}
</script>

