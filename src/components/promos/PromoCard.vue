<template>
  <Card hover clickable padding="none" class="group overflow-hidden" @click="handleClick">
    <!-- 图片 -->
    <div class="relative aspect-[16/9] overflow-hidden bg-gray-200">
      <img
        :src="promo.coverImage || '/images/placeholder.jpg'"
        :alt="getLocalizedText(promo.title)"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <!-- 徽章 -->
      <div class="absolute left-3 top-3">
        <Badge v-if="promo.badge" variant="gold" size="md">
          {{ promo.badge }}
        </Badge>
        <Badge v-else-if="promo.discountPercent" variant="primary" size="md">
          {{ t('promos.discount', { n: promo.discountPercent }) }}
        </Badge>
      </div>
      <!-- 类型 -->
      <div class="absolute bottom-3 left-3">
        <Badge variant="secondary" size="sm">
          {{ t(`promos.${promo.type}`) }}
        </Badge>
      </div>
    </div>

    <!-- 内容 -->
    <div class="p-4">
      <!-- 城市 -->
      <div v-if="promo.city" class="mb-2 text-sm text-gray-600">
        {{ t(`cities.${promo.city}`) }}
      </div>

      <!-- 标题 -->
      <h3 class="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
        {{ getLocalizedText(promo.title) }}
      </h3>

      <!-- 描述 -->
      <p v-if="promo.desc" class="mb-3 line-clamp-2 text-sm text-gray-600">
        {{ getLocalizedText(promo.desc) }}
      </p>

      <!-- 价格 -->
      <div v-if="promo.priceTHB" class="mb-3">
        <div class="flex items-baseline gap-2">
          <span class="text-2xl font-bold text-primary-600">
            {{ formatCurrency(promo.priceTHB) }}
          </span>
          <span v-if="promo.originalPriceTHB" class="text-sm text-gray-500 line-through">
            {{ formatCurrency(promo.originalPriceTHB) }}
          </span>
        </div>
      </div>

      <!-- 有效期 -->
      <div v-if="promo.validUntil" class="flex items-center text-sm text-gray-600">
        <svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ t('promos.validUntil') }}: {{ formatDate(promo.validUntil) }}
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { PromoItem, LocalizedText } from '@/types/promo'
import Card from '@/components/base/Card.vue'
import Badge from '@/components/base/Badge.vue'
import { formatCurrency, formatDate } from '@/utils/format'

interface Props {
  promo: PromoItem
}

const props = defineProps<Props>()
const router = useRouter()
const { t, locale } = useI18n()

function getLocalizedText(text: LocalizedText | Partial<LocalizedText>): string {
  if (!text) return ''
  return (text as any)[locale.value] || (text as any).en || (text as any).th || ''
}

function handleClick() {
  if (props.promo.link) {
    if (props.promo.link.startsWith('http')) {
      window.open(props.promo.link, '_blank')
    } else {
      router.push(props.promo.link)
    }
  } else if (props.promo.purchaseLink) {
    // 如果有购买链接，跳转到详情页
    if (props.promo.purchaseLink.startsWith('http')) {
      window.open(props.promo.purchaseLink, '_blank')
    } else {
      router.push(props.promo.purchaseLink)
    }
  } else {
    // 默认跳转到详情页
    router.push(`/promos/${props.promo.id}`)
  }
}
</script>

