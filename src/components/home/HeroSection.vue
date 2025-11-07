<template>
  <section class="gradient-hero bg-pattern-wave relative overflow-hidden py-16 sm:py-24 lg:py-32">
    <!-- 装饰元素 -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary-500 blur-3xl"></div>
      <div class="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-tech-500 blur-3xl"></div>
    </div>

    <div class="container-custom relative">
      <div class="mx-auto max-w-4xl text-center">
        <!-- 标题 -->
        <h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
        </h1>
        <p class="mb-8 text-lg text-gray-600 sm:text-xl lg:text-2xl">
          {{ t('hero.subtitle') }}
        </p>

        <!-- CTA按钮 -->
        <div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" @click="scrollToRoutes">
            {{ t('hero.cta') }}
          </Button>
          <Button variant="outline" size="lg" @click="openConsultModal">
            {{ t('hero.ctaConsult') }}
          </Button>
        </div>

        <!-- 搜索框 -->
        <SearchBox />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '@/components/base/Button.vue'
import SearchBox from '@/components/search/SearchBox.vue'

const { t } = useI18n()

function scrollToRoutes() {
  const element = document.getElementById('featured-routes')
  element?.scrollIntoView({ behavior: 'smooth' })
}

function openConsultModal() {
  // TODO: 打开咨询模态框
  console.log('Open consult modal')
}
</script>

