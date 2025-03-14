<script setup lang="ts">
const description =
  'Tổng hợp tất cả bài viết dài của tôi về lập trình, giao diện người dùng, thiết kế sản phẩm và nhiều chủ đề khác, sắp xếp theo thứ tự thời gian.'
useSeoMeta({
  title: 'Articles | Tuan Duc Tran',
  description,
  ogTitle: 'Articles | Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})

const { data: articles } = await useAsyncData('all-articles', () =>
  queryCollection('articles')
    .where('path', 'LIKE', '/articles%')
    .order('published', 'DESC')
    .all()
)
</script>

<template>
  <div>
    <Header class="mb-16" title="Articles" :description="description" />
    <ul class="flex flex-col gap-8">
      <li v-for="(article, id) in articles" :key="id">
        <ArticleCard :article="article" />
      </li>
    </ul>
  </div>
</template>
