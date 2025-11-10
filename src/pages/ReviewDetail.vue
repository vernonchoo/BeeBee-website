<template>
  <div class="container-custom py-8">
    <h1 class="mb-6 text-3xl font-bold">评价详情</h1>
    <p class="text-gray-600">评价详情页面 - 展示单个评价的详细信息</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const reviewId = route.params.id

useHead({
  title: '评价详情',
})
</script>

