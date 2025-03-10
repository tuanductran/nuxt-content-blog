<script setup lang="ts">
const description =
  'Chào mừng bạn đến với không gian của tôi! Tôi là Trần Tuấn Đức, một nhà phát triển Front-End với tình yêu dành cho Vue.js và Nuxt.js'
useSeoMeta({
  title: 'Tuan Duc Tran',
  description,
  ogTitle: 'Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="space-y-24">
    <HomeIntro />
    <HomeSocialLinks />
    <HomeFeaturedProjects />
    <HomeFeaturedArticles />
  </div>
</template>
