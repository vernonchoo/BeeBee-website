<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">{{ t('nav.blogReports') }}</h1>
    <p class="text-gray-600">旅行报告页面 - 展示往期活动的详细报告</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.blogReports'),
})
</script>

