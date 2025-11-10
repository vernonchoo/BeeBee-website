<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">{{ t('nav.blogArticles') }}</h1>
    <p class="text-gray-600">文章页面 - 展示关于研学旅行的文章</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.blogArticles'),
})
</script>

