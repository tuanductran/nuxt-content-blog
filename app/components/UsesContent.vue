<script setup lang="ts">
interface UseItem {
  name: string
  url?: string
  description?: string
}

defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array as () => UseItem[],
    required: true
  }
})
</script>

<template>
  <ul class="flex flex-col gap-4">
    <UsesHeader :title="title" />
    <UsesItem v-for="(item, id) in items" :key="id" :item="item" />
  </ul>
</template>
