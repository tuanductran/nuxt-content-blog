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
        class="relative z-10 order-first mb-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500"
        :datetime="article.published"
      >
        {{ formatDate(article.published) }}
      </time>
      <h2
        class="group-hover:text-primary-600 text-base font-semibold tracking-tight text-neutral-800 dark:text-neutral-100"
      >
        {{ article.title }}
      </h2>
      <p
        class="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400"
      >
        {{ article.description }}
      </p>
    </article>
  </NuxtLink>
</template>
