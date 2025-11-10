<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">
      {{ t('nav.blogCultureHistory') }}
    </h1>
    <p class="text-gray-600">中国历史文化页面 - 介绍中国的历史、文化和传统</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.blogCultureHistory'),
})
</script>
