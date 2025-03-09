<script setup lang="ts">
import type { NotionPage } from "~/type";
import { getThumbnail } from "~/utils/getThumbnail";

const { data: books } = await useAsyncData("books", () =>
  $fetch<NotionPage[]>("https://api-mybooks.tuanductran-dev-f18.workers.dev"));

const description
  = "Khám phá bộ sưu tập sách được tuyển chọn kỹ lưỡng, giúp bạn mở rộng tri thức và tìm cảm hứng cho những trang sách tiếp theo. Từ những tác phẩm kinh điển đến hiện đại, hãy tìm cho mình một cuốn sách yêu thích.";
useSeoMeta({
  title: "Books | Tuan Duc Tran",
  description,
  ogTitle: "Books | Tuan Duc Tran",
  ogDescription: description,
  ogImage: "/favicon.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <AppHeader class="mb-8" title="Books" :description="description" />
  <ul class="space-y-2">
    <li v-for="book in books" :key="book.id">
      <NuxtLink
        :to="book.public_url"
        :title="book.title"
        target="_blank"
        external
        class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
      >
        <UAvatar
          :src="getThumbnail(book.public_url)"
          :alt="book.title"
          :ui="{ rounded: 'rounded-md' }"
        />
        <p class="truncate text-gray-700 dark:text-gray-200">
          {{ book.title }}
        </p>
      </NuxtLink>
    </li>
  </ul>
</template>
