<script setup lang="ts">
import type { GitHubUser } from '~/type'

const { data: user } = await useAsyncData('githubUser', () =>
  $fetch<GitHubUser>('https://api.github.com/users/tuanductran')
)
</script>

<template>
  <div class="flex flex-col gap-6">
    <NuxtImg
      :src="user?.avatar_url"
      :alt="user?.name"
      class="size-12 rounded-full sm:size-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100"
    >
      {{ user?.name }}!
    </h1>
    <p class="text-neutral-900 dark:text-neutral-400">
      {{ user?.bio }}
    </p>
  </div>
</template>
