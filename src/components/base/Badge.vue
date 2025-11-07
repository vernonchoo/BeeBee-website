<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'tech' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  dot: false,
})

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium'
  
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    tech: 'bg-tech-100 text-tech-700',
    gold: 'bg-gold text-white',
  }

  const sizeClasses = {
    sm: props.dot ? 'h-2 w-2' : 'px-2 py-0.5 text-xs',
    md: props.dot ? 'h-2.5 w-2.5' : 'px-2.5 py-1 text-sm',
    lg: props.dot ? 'h-3 w-3' : 'px-3 py-1.5 text-base',
  }

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
  ].filter(Boolean).join(' ')
})
</script>

