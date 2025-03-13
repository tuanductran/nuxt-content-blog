<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles-home', () => {
  return queryCollection('articles').order('published', 'DESC').limit(3).all()
})
</script>

<template>
  <div>
    <h2 class="mb-6 text-xs font-semibold text-neutral-400">Recent Articles</h2>
    <ul class="flex flex-col gap-8">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="mt-6 flex items-center justify-center text-sm">
      <UButton
        label="All Articles"
        to="/articles"
        variant="outline"
        color="primary"
      />
    </div>
  </div>
</template>
