<template>
  <div class="bg-white py-16">
    <div class="container-custom">
      <h1 class="mb-8 text-4xl font-bold text-gray-900">{{ t('nav.about') }}</h1>
      <div class="prose max-w-none">
        <p class="text-lg text-gray-700">
          {{ t('hero.subtitle') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const { t } = useI18n()

useHead({
  title: t('nav.about'),
})
</script>

