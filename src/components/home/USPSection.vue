<template>
  <section class="bg-white py-16 sm:py-24">
    <div class="container-custom">
      <!-- USP网格 -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(usp, index) in usps"
          :key="index"
          class="group text-center"
        >
          <!-- 图标 -->
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300"
            :class="usp.bgClass"
          >
            <component :is="usp.icon" class="h-8 w-8" :class="usp.iconClass" />
          </div>

          <!-- 标题 -->
          <h3 class="mb-2 text-lg font-semibold text-gray-900">
            {{ t(usp.title) }}
          </h3>

          <!-- 描述 -->
          <p class="text-sm text-gray-600">
            {{ t(usp.desc) }}
          </p>
        </div>
      </div>

      <!-- 统计数据 -->
      <div class="mt-16 grid gap-8 border-t border-gray-200 pt-16 sm:grid-cols-3">
        <div class="text-center">
          <div class="mb-2 text-4xl font-bold text-primary-600">1000+</div>
          <div class="text-gray-600">{{ t('usp.reviews') }}</div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-4xl font-bold text-tech-600">4.8/5</div>
          <div class="text-gray-600">{{ t('usp.reviewsDesc') }}</div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-4xl font-bold text-gold">100%</div>
          <div class="text-gray-600">{{ t('usp.safety') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// SVG 图标组件
const ShieldIcon = () => h('svg', { class: 'h-8 w-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }),
])

const UsersIcon = () => h('svg', { class: 'h-8 w-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' }),
])

const GlobeIcon = () => h('svg', { class: 'h-8 w-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }),
])

const LightningIcon = () => h('svg', { class: 'h-8 w-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' }),
])

const usps = [
  {
    icon: ShieldIcon,
    title: 'usp.safety',
    desc: 'usp.safetyDesc',
    bgClass: 'bg-primary-100 group-hover:bg-primary-200',
    iconClass: 'text-primary-600',
  },
  {
    icon: UsersIcon,
    title: 'usp.expert',
    desc: 'usp.expertDesc',
    bgClass: 'bg-tech-100 group-hover:bg-tech-200',
    iconClass: 'text-tech-600',
  },
  {
    icon: GlobeIcon,
    title: 'usp.culture',
    desc: 'usp.cultureDesc',
    bgClass: 'bg-gold/20 group-hover:bg-gold/30',
    iconClass: 'text-gold-dark',
  },
  {
    icon: LightningIcon,
    title: 'usp.tech',
    desc: 'usp.techDesc',
    bgClass: 'bg-tech-100 group-hover:bg-tech-200',
    iconClass: 'text-tech-600',
  },
]
</script>

