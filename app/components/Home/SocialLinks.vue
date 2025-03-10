<script lang="ts" setup>
const { data: links } = await useAsyncData('social-all', () =>
  queryCollection('social').order('name', 'ASC').all()
)
</script>

<template>
  <div>
    <h2 class="mb-4 text-xs font-semibold text-gray-400">Follow</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        :title="link.name"
        target="_blank"
        external
        class="group flex items-end gap-4 dark:hover:text-gray-300"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 group-hover:border-gray-700 dark:border-gray-800"
        />
        <Icon :name="link.icon" class="size-6" />
      </NuxtLink>
    </div>
  </div>
</template>
