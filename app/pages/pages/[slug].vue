<script setup lang="ts">
const route = useRoute()

const { data: pages } = await useAsyncData(route.path, async () => {
  return await queryCollection('pages').path(route.path).first()
})

if (!pages.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: pages.value?.title,
  description: pages.value?.description,
  ogTitle: pages.value?.title,
  ogDescription: pages.value?.description,
  ogImage: pages.value?.cover || '/favicon.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <article
    class="prose prose-neutral dark:prose-invert prose-blockquote:not-italic prose-pre:bg-neutral-900 prose-img:rounded-lg prose-img:ring-1 prose-img:ring-neutral-200 dark:prose-img:ring-white/10 max-w-full"
  >
    <h1>{{ pages?.title }}</h1>
    <ContentRenderer v-if="pages" :value="pages" />
  </article>
</template>

<style>
.article h2 a,
.article h3 a {
  @apply no-underline;
}
</style>
