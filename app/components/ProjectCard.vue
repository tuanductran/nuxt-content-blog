<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="project.url"
    :title="project.name"
    class="group -m-2 flex items-end gap-4 rounded-lg p-2"
    target="_blank"
    external
  >
    <div class="max-w-sm">
      <h3 class="group-hover:text-primary-600 text-sm font-medium">
        {{ project.name }}
      </h3>
      <p class="text-sm text-neutral-400">
        {{ project.description }}
      </p>
    </div>
    <div class="flex-1" />
    <Icon :name="project.icon" class="size-8" />
  </NuxtLink>
</template>
