<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">{{ t('nav.cooperation') }}</h1>
    <p class="text-gray-600">合作页面 - 学校合作、机构合作、媒体合作</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.cooperation'),
})
</script>

