<script setup lang="ts">
import type { NotionPage } from '~/type'
import { getThumbnail } from '~/utils/getThumbnail'

const description =
  'Khám phá bộ sưu tập sách được tuyển chọn kỹ lưỡng, giúp bạn mở rộng tri thức và tìm cảm hứng cho những trang sách tiếp theo. Từ những tác phẩm kinh điển đến hiện đại, hãy tìm cho mình một cuốn sách yêu thích.'
useSeoMeta({
  title: 'Books | Tuan Duc Tran',
  description,
  ogTitle: 'Books | Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})

const { data: books } = await useFetch<NotionPage[]>('/api/books.json')
</script>

<template>
  <div>
    <Header class="mb-8" title="Books" :description="description" />
    <ul class="flex flex-col gap-4">
      <li v-for="book in books" :key="book.id">
        <NuxtLink
          :to="book.public_url"
          :title="book.title"
          target="_blank"
          external
          class="-m-2 flex min-w-0 items-center gap-3 rounded-lg p-2 text-sm hover:bg-neutral-100 dark:hover:bg-white/10"
        >
          <UAvatar
            :src="getThumbnail(book.public_url)"
            :alt="book.title"
            class="rounded-md"
          />
          <p class="truncate text-neutral-700 dark:text-neutral-200">
            {{ book.title }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
