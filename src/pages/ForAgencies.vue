<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">{{ t('nav.forAgencies') }}</h1>
    <p class="text-gray-600">代理商页面 - 代理商合作政策和申请流程</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.forAgencies'),
})
</script>

