<template>
  <div v-if="!loading && promoData" class="bg-white">
    <!-- Hero Banner -->
    <div class="relative h-96 overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500">
      <img
        v-if="promoData.coverImage"
        :src="promoData.coverImage"
        :alt="getLocalizedText(promoData.title)"
        class="h-full w-full object-cover opacity-50"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white">
          <Badge v-if="promoData.badge" variant="gold" size="lg" class="mb-4">
            {{ promoData.badge }}
          </Badge>
          <h1 class="mb-4 text-4xl font-bold lg:text-5xl">
            {{ getLocalizedText(promoData.title) }}
          </h1>
          <p v-if="promoData.desc" class="text-xl text-white/90">
            {{ getLocalizedText(promoData.desc) }}
          </p>
        </div>
      </div>
    </div>

    <div class="container-custom py-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Breadcrumb -->
          <nav class="mb-4 flex items-center space-x-2 text-sm text-gray-600">
            <RouterLink to="/" class="hover:text-primary-600">
              {{ t('nav.home') }}
            </RouterLink>
            <span>/</span>
            <RouterLink to="/promos" class="hover:text-primary-600">
              {{ t('nav.promos') }}
            </RouterLink>
            <span>/</span>
            <span class="text-gray-900">{{ getLocalizedText(promoData.title) }}</span>
          </nav>

          <!-- Category & City -->
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="secondary" size="md">
              {{ t('promos.category') }}: {{ t(`promos.${promoData.type}`) }}
            </Badge>
            <Badge v-if="promoData.city" variant="secondary" size="md">
              {{ t(`cities.${promoData.city}`) }}
            </Badge>
            <Badge v-if="promoData.discountPercent" variant="primary" size="md">
              {{ t('promos.discount', { n: promoData.discountPercent }) }}
            </Badge>
          </div>

          <!-- Content -->
          <section v-if="promoData.content" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('promos.content') }}
            </h2>
            <div class="prose max-w-none whitespace-pre-line text-gray-700">
              {{ getLocalizedText(promoData.content) }}
            </div>
          </section>

          <!-- Usage Instructions -->
          <section v-if="promoData.usageInstructions" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('promos.usageInstructions') }}
            </h2>
            <Card padding="md" class="bg-gray-50">
              <div class="prose max-w-none whitespace-pre-line text-gray-700">
                {{ getLocalizedText(promoData.usageInstructions) }}
              </div>
            </Card>
          </section>

          <!-- Terms & Conditions -->
          <section v-if="promoData.terms" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('promos.terms') }}
            </h2>
            <Card padding="md" class="border-yellow-200 bg-yellow-50">
              <div class="prose max-w-none whitespace-pre-line text-gray-700">
                {{ getLocalizedText(promoData.terms) }}
              </div>
            </Card>
          </section>

          <!-- Applicable Routes -->
          <section
            v-if="promoData.applicableRoutes && promoData.applicableRoutes.length > 0"
            class="mb-8"
          >
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('promos.applicableRoutes') }}
            </h2>
            <div class="space-y-2">
              <RouterLink
                v-for="routeId in promoData.applicableRoutes"
                :key="routeId"
                :to="`/routes/${routeId}`"
                class="block rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary-500 hover:bg-primary-50"
              >
                <span class="font-medium text-primary-600 hover:underline">{{ routeId }}</span>
              </RouterLink>
            </div>
          </section>

          <!-- Gallery -->
          <section v-if="promoData.gallery && promoData.gallery.length > 0" class="mb-8">
            <h2 class="mb-4 text-2xl font-bold text-gray-900">
              {{ t('common.gallery') }}
            </h2>
            <div class="grid gap-4 sm:grid-cols-2">
              <img
                v-for="(image, index) in promoData.gallery"
                :key="index"
                :src="image"
                :alt="`${getLocalizedText(promoData.title)} - ${index + 1}`"
                class="h-64 w-full rounded-lg object-cover"
              />
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24">
            <Card padding="md">
              <!-- Price -->
              <div v-if="promoData.priceTHB" class="mb-6 text-center">
                <div class="mb-2 text-sm text-gray-600">
                  {{ t('promos.price') }}
                </div>
                <div class="mb-2 flex items-center justify-center gap-2">
                  <span class="text-3xl font-bold text-primary-600">
                    {{ formatCurrency(promoData.priceTHB) }}
                  </span>
                  <span
                    v-if="promoData.originalPriceTHB"
                    class="text-lg text-gray-500 line-through"
                  >
                    {{ formatCurrency(promoData.originalPriceTHB) }}
                  </span>
                </div>
                <div v-if="promoData.originalPriceTHB" class="text-sm text-green-600">
                  {{ t('promos.save') }}:
                  {{ formatCurrency(promoData.originalPriceTHB - promoData.priceTHB) }}
                </div>
              </div>

              <!-- Validity -->
              <div class="mb-6 space-y-3 border-t border-gray-200 pt-6">
                <div v-if="promoData.validFrom" class="flex items-center text-sm text-gray-600">
                  <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="font-medium">{{ t('promos.validFrom') }}:</span>
                  <span class="ml-2">{{ formatDate(promoData.validFrom) }}</span>
                </div>
                <div v-if="promoData.validUntil" class="flex items-center text-sm text-gray-600">
                  <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="font-medium">{{ t('promos.validUntil') }}:</span>
                  <span class="ml-2">{{ formatDate(promoData.validUntil) }}</span>
                </div>
              </div>

              <!-- Purchase Button -->
              <div class="space-y-3">
                <Button
                  v-if="promoData.purchaseLink"
                  variant="primary"
                  size="lg"
                  block
                  @click="handlePurchase"
                >
                  {{ getLocalizedText(promoData.purchaseLinkText) || t('promos.purchaseNow') }}
                </Button>
                <Button variant="outline" size="lg" block @click="handleShare">
                  <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  {{ t('common.share') }}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else-if="loading" class="container-custom py-16">
    <Skeleton height="400px" class="mb-8" />
    <Skeleton height="40px" class="mb-4" />
    <Skeleton height="20px" width="60%" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { getPromoDetail } from '@/api/promos'
import type { PromoItem } from '@/types/promo'
import type { LocalizedText } from '@/types/route'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'
import Badge from '@/components/base/Badge.vue'
import Skeleton from '@/components/base/Skeleton.vue'
import { formatCurrency, formatDate } from '@/utils/format'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const loading = ref(true)
const promoData = ref<PromoItem | null>(null)

function getLocalizedText(text: LocalizedText | Partial<LocalizedText> | undefined): string {
  if (!text) return ''
  return (text as any)[locale.value] || (text as any).en || (text as any).th || ''
}

function handlePurchase() {
  if (promoData.value?.purchaseLink) {
    if (promoData.value.purchaseLink.startsWith('http')) {
      window.open(promoData.value.purchaseLink, '_blank')
    } else {
      router.push(promoData.value.purchaseLink)
    }
  }
}

function handleShare() {
  if (navigator.share) {
    navigator
      .share({
        title: getLocalizedText(promoData.value?.title),
        text: getLocalizedText(promoData.value?.desc),
        url: window.location.href,
      })
      .catch(() => {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href)
      })
  } else {
    navigator.clipboard.writeText(window.location.href)
  }
}

onMounted(async () => {
  try {
    const id = route.params.id as string
    promoData.value = await getPromoDetail(id)
  } catch (error) {
    console.error('Failed to load promo:', error)
  } finally {
    loading.value = false
  }
})

// SEO
useHead(
  computed(() => ({
    title: promoData.value ? getLocalizedText(promoData.value.title) : t('promos.title'),
    meta: [
      {
        name: 'description',
        content: promoData.value ? getLocalizedText(promoData.value.desc) : '',
      },
    ],
  }))
)
</script>
