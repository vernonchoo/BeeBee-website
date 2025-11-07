<template>
  <div class="bg-gray-50 py-8">
    <div class="container-custom">
      <h1 class="mb-8 text-3xl font-bold text-gray-900">{{ t('common.search') }}</h1>
      
      <SearchBox class="mb-8" />

      <!-- Search Results -->
      <div v-if="routes.length > 0">
        <h2 class="mb-4 text-xl font-semibold text-gray-900">
          {{ t('common.noResults') }}: {{ routes.length }}
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RouteCard v-for="route in routes" :key="route.id" :route="route" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SearchBox from '@/components/search/SearchBox.vue'
import RouteCard from '@/components/routes/RouteCard.vue'

const { t } = useI18n()
const routes = ref([])
</script>

