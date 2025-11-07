<template>
  <div
    :class="cardClasses"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  hover?: boolean
  bordered?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hover: false,
  bordered: false,
  padding: 'md',
  clickable: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const cardClasses = computed(() => {
  const baseClasses = 'card'
  const hoverClass = props.hover ? 'card-hover' : ''
  const borderedClass = props.bordered ? 'border border-gray-200' : ''
  const clickableClass = props.clickable ? 'cursor-pointer' : ''
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  }

  return [
    baseClasses,
    hoverClass,
    borderedClass,
    clickableClass,
    paddingClasses[props.padding],
  ].filter(Boolean).join(' ')
})

function handleClick(event: MouseEvent) {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

