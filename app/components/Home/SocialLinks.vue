<script lang="ts" setup>
const { data: links } = await useAsyncData('social-all', () =>
  queryCollection('social').order('name', 'ASC').all()
)
</script>

<template>
  <div>
    <h2 class="mb-4 text-xs font-semibold text-neutral-400">Follow</h2>
    <div class="flex flex-col gap-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        :title="link.name"
        target="_blank"
        external
        class="group flex items-end gap-4 dark:hover:text-neutral-300"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div class="flex-1" />
        <Icon :name="link.icon" class="size-6" />
      </NuxtLink>
    </div>
  </div>
</template>
