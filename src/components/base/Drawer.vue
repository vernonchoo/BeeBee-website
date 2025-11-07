<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50"
        @click.self="handleClose"
      >
        <!-- 遮罩 -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="handleClose" />
        
        <!-- 抽屉内容 -->
        <div
          :class="drawerClasses"
          role="dialog"
          aria-modal="true"
          @click.stop
        >
          <!-- 头部 -->
          <div v-if="$slots.header || title" class="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <slot name="header">
              <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
            </slot>
            <button
              type="button"
              class="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              @click="handleClose"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- 主体 -->
          <div class="flex-1 overflow-y-auto px-6 py-4">
            <slot />
          </div>
          
          <!-- 底部 -->
          <div v-if="$slots.footer" class="border-t border-gray-200 px-6 py-4">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  placement?: 'left' | 'right'
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  placement: 'right',
  width: '320px',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const drawerClasses = computed(() => {
  const baseClasses = 'absolute top-0 flex h-full flex-col bg-white shadow-2xl'
  const placementClass = props.placement === 'left' ? 'left-0' : 'right-0'
  
  return [baseClasses, placementClass].join(' ')
})

function handleClose() {
  emit('update:modelValue', false)
  emit('close')
}

// 防止背景滚动
watch(() => props.modelValue, (value) => {
  if (value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-from {
  transform: translateX(100%);
}

.drawer-leave-to {
  transform: translateX(100%);
}
</style>

