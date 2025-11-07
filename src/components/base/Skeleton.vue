<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  width?: string
  height?: string
  circle?: boolean
  className?: string
}

const props = defineProps<Props>()

const skeletonClasses = computed(() => {
  const baseClasses = 'skeleton'
  const circleClass = props.circle ? 'rounded-full' : 'rounded'
  
  return [baseClasses, circleClass, props.className].filter(Boolean).join(' ')
})

const skeletonStyles = computed(() => ({
  width: props.width || '100%',
  height: props.height || '1rem',
}))
</script>

<template>
  <div :class="skeletonClasses" :style="skeletonStyles" />
</template>

