<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">{{ t('nav.blogRouteInfo') }}</h1>
    <p class="text-gray-600">线路信息页面 - 详细的线路介绍和攻略</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.blogRouteInfo'),
})
</script>

