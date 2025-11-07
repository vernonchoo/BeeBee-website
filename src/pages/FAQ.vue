<template>
  <div class="bg-white py-16">
    <div class="container-custom max-w-3xl">
      <h1 class="mb-8 text-4xl font-bold text-gray-900">{{ t('nav.faq') }}</h1>
      <div class="space-y-4">
        <Card v-for="(faq, index) in faqs" :key="index" padding="md">
          <h3 class="mb-2 font-semibold text-gray-900">{{ faq.q }}</h3>
          <p class="text-gray-700">{{ faq.a }}</p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import Card from '@/components/base/Card.vue'

const { t } = useI18n()

const faqs = [
  {
    q: 'ต้องมีพื้นฐานการเขียนโปรแกรมหรือไม่?',
    a: 'ไม่จำเป็น เราจะสอนตั้งแต่พื้นฐาน',
  },
  {
    q: 'มีอายุเท่าไหร่บ้างที่สามารถเข้าร่วมได้?',
    a: 'เด็กและเยาวชนอายุ 3-18 ปีสามารถเข้าร่วมได้',
  },
  {
    q: 'ราคารวมอะไรบ้าง?',
    a: 'รวมที่พัก อาหาร มัคคุเทศก์ ค่าเข้าชมสถานที่ และประกันการเดินทาง',
  },
]

useHead({
  title: t('nav.faq'),
})
</script>

