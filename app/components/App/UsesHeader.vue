<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li>
    <span class="text-sm font-medium text-neutral-600 dark:text-neutral-500">{{
      title
    }}</span>
  </li>
</template>
