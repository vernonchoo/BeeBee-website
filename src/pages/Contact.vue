<template>
  <div class="bg-white py-16">
    <div class="container-custom max-w-2xl">
      <h1 class="mb-8 text-4xl font-bold text-gray-900">{{ t('nav.contact') }}</h1>
      <Card padding="lg">
        <InquiryModal v-model="showModal" />
        <Button variant="primary" size="lg" @click="showModal = true">
          {{ t('inquiry.title') }}
        </Button>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'
import InquiryModal from '@/components/inquiry/InquiryModal.vue'

const { t } = useI18n()
const showModal = ref(false)

useHead({
  title: t('nav.contact'),
})
</script>

