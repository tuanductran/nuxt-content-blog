<script setup lang="ts">
const description
  = "Tổng hợp tất cả ghi chú của tôi về phát triển bản thân, kỹ năng sống, và nhiều chủ đề khác, sắp xếp theo thứ tự thời gian.";
useSeoMeta({
  title: "Notes | Tuan Duc Tran",
  description,
  ogTitle: "Notes | Tuan Duc Tran",
  ogDescription: description,
  ogImage: "/favicon.jpg",
  twitterCard: "summary_large_image",
});

const { data: notes } = await useAsyncData("all-notes", () =>
  queryCollection("notes")
    .where("path", "LIKE", "/notes%")
    .order("published", "DESC")
    .all());
</script>

<template>
  <AppHeader class="mb-16" title="Notes" :description="description" />
  <ul class="space-y-16">
    <li v-for="(note, id) in notes" :key="id">
      <AppArticleCard :article="note" />
    </li>
  </ul>
</template>
