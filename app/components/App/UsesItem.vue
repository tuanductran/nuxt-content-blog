<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li>
    <NuxtLink
      :to="item.url"
      :title="item.name"
      class="group"
      target="_blank"
      external
    >
      <p
        class="group-hover:text-primary-600 text-base font-semibold text-gray-700 dark:text-gray-300"
      >
        {{ item.name }}
      </p>
      <p class="text-sm text-gray-500">
        {{ item.description }}
      </p>
    </NuxtLink>
  </li>
</template>
