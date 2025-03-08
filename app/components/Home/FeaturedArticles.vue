<script lang="ts" setup>
const { data: articles } = await useAsyncData("articles-home", () => {
  return queryCollection("articles").order("published", "DESC").limit(3).all();
});
</script>

<template>
  <div>
    <h2 class="text-xs font-semibold text-gray-400 mb-6">Recent Articles</h2>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Articles"
        to="/articles"
        variant="outline"
        color="primary"
      />
    </div>
  </div>
</template>
