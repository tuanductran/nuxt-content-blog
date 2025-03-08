<script setup lang="ts">
const route = useRoute();

const { data: articles } = await useAsyncData(route.path, async () => {
  return await queryCollection("articles").path(route.path).first();
});

if (!articles.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: articles.value?.title,
  description: articles.value?.description,
  ogTitle: articles.value?.title,
  ogDescription: articles.value?.description,
  ogImage: articles.value?.cover || "/favicon.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <article>
        <h1>{{ articles?.title }}</h1>
        <ContentRenderer v-if="articles" :value="articles" />
      </article>
    </div>
  </main>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
