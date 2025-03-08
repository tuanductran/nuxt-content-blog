<script setup lang="ts">
import type { GitHubUser } from "~/type";

const { data: user } = await useAsyncData("githubUser", () =>
  $fetch<GitHubUser>("https://api.github.com/users/tuanductran"));
</script>

<template>
  <div class="space-y-6">
    <NuxtImg
      :src="user?.avatar_url"
      :alt="user?.name"
      class="rounded-full size-12 sm:size-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      {{ user?.name }}!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      {{ user?.bio }}
    </p>
  </div>
</template>
