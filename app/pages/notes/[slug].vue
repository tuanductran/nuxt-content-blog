<script setup lang="ts">
const route = useRoute()

const { data: notes } = await useAsyncData(route.path, async () => {
  return await queryCollection('notes').path(route.path).first()
})

if (!notes.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: notes.value?.title,
  description: notes.value?.description,
  ogTitle: notes.value?.title,
  ogDescription: notes.value?.description,
  ogImage: notes.value?.cover || '/favicon.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div
    class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:rounded-lg prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10"
  >
    <article>
      <h1>{{ notes?.title }}</h1>
      <ContentRenderer v-if="notes" :value="notes" />
    </article>
  </div>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
