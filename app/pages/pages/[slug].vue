<script setup lang="ts">
const route = useRoute();

const { data: pages } = await useAsyncData(route.path, async () => {
  return await queryCollection("pages").path(route.path).first();
});

if (!pages.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: pages.value?.title,
  description: pages.value?.description,
  ogTitle: pages.value?.title,
  ogDescription: pages.value?.description,
  ogImage: pages.value?.cover || "/favicon.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div
    class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
  >
    <article>
      <h1>{{ pages?.title }}</h1>
      <ContentRenderer v-if="pages" :value="pages" />
    </article>
  </div>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
