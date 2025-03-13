<script setup lang="ts">
const route = useRoute()

const { data: articles } = await useAsyncData(route.path, async () => {
  return await queryCollection('articles').path(route.path).first()
})

if (!articles.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: articles.value?.title,
  description: articles.value?.description,
  ogTitle: articles.value?.title,
  ogDescription: articles.value?.description,
  ogImage: articles.value?.cover || '/favicon.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <article
    class="prose prose-neutral dark:prose-invert prose-blockquote:not-italic prose-pre:bg-neutral-900 prose-img:rounded-lg prose-img:ring-1 prose-img:ring-neutral-200 dark:prose-img:ring-white/10 max-w-full"
  >
    <h1>{{ articles?.title }}</h1>
    <ContentRenderer v-if="articles" :value="articles" />
  </article>
</template>

<style>
article h2 a,
article h3 a {
  @apply no-underline;
}
</style>
