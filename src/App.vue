<template>
  <div id="app" class="min-h-screen bg-white">
    <RouterView />
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import Toast from '@/components/base/Toast.vue'

const { locale } = useI18n()

// 设置全局 meta
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
    },
  ],
})
</script>

