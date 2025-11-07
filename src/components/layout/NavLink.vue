<template>
  <RouterLink
    :to="to"
    class="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
    active-class="bg-primary-50 text-primary-600"
  >
    {{ label }}
  </RouterLink>
</template>

<script setup lang="ts">
interface Props {
  to: string
  label: string
}

defineProps<Props>()
</script>

