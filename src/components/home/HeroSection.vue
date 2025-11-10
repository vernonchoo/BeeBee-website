<template>
  <section class="relative h-screen min-h-[600px] overflow-hidden">
    <!-- 视频背景 -->
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop playsinline class="h-full w-full object-cover">
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
      <!-- 遮罩层 - 确保文字可读性 -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
    </div>

    <!-- 内容层 -->
    <div class="container-custom relative z-10 flex h-full items-center">
      <div class="mx-auto w-full max-w-4xl text-center">
        <!-- 标题 -->
        <h1
          class="mb-6 whitespace-nowrap text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
        >
          {{ t('hero.title') }}
        </h1>
        <p class="mb-12 text-lg text-white/90 drop-shadow-md sm:text-xl lg:text-2xl">
          {{ t('hero.subtitle') }}
        </p>

        <!-- 搜索框 -->
        <div class="mx-auto max-w-3xl">
          <div class="search-box-container rounded-2xl bg-white/95 p-6 backdrop-blur-sm">
            <SearchBox :no-card="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SearchBox from '@/components/search/SearchBox.vue'

const { t } = useI18n()

// 视频加载处理 - 确保视频自动播放
onMounted(() => {
  const video = document.querySelector('video')
  if (video) {
    video.play().catch((error) => {
      console.log('Video autoplay failed:', error)
    })
  }
})
</script>

<style scoped>
.search-box-container {
  /* 毛边阴影效果 - 多层阴影营造质感 */
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 5px 15px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  
  /* 使用 filter 增强毛边效果 */
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25));
  
  /* 过渡效果 */
  transition: all 0.3s ease;
}

.search-box-container:hover {
  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.35),
    0 15px 40px rgba(0, 0, 0, 0.25),
    0 8px 20px rgba(0, 0, 0, 0.2),
    0 3px 10px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.15);
  
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3));
  
  transform: translateY(-2px);
}
</style>
