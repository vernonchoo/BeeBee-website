<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">{{ t('nav.forTourists') }}</h1>
    <p class="text-gray-600">游客指南页面 - 行前准备、签证信息、安全须知</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.forTourists'),
})
</script>

