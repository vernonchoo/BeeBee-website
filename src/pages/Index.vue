<template>
  <div>
    <HeroSection />
    <FeaturedRoutes />
    <PromoSection />
    <USPSection />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedRoutes from '@/components/home/FeaturedRoutes.vue'
import PromoSection from '@/components/home/PromoSection.vue'
import USPSection from '@/components/home/USPSection.vue'

const { t } = useI18n()

useHead({
  title: t('hero.title'),
  meta: [
    {
      name: 'description',
      content: t('hero.subtitle'),
    },
  ],
})
</script>

