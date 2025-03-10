<script lang="ts" setup>
import { formatDate } from '~/utils/date'

defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink :to="article.path" :title="article.title" class="group">
    <article>
      <time
        class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-gray-400 dark:text-gray-500"
        :datetime="article.published"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
        </span>
        {{ formatDate(article.published) }}
      </time>
      <h2
        class="font-display group-hover:text-primary-600 text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100"
      >
        {{ article.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {{ article.description }}
      </p>
    </article>
  </NuxtLink>
</template>
