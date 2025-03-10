<script setup lang="ts">
import { getThumbnail } from '~/utils/getThumbnail'

const description =
  'Khám phá danh sách các bookmark hữu ích, bao gồm công cụ phát triển, thiết kế và tài nguyên hữu ích cho lập trình viên. Hãy lưu lại những trang web quan trọng để dễ dàng truy cập sau này.'
useSeoMeta({
  title: 'Bookmarks | Tuan Duc Tran',
  description,
  ogTitle: 'Bookmarks | Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})

const { data: bookmarks } = await useAsyncData('bookmarks', () =>
  queryCollection('bookmarks').order('name', 'ASC').all()
)
</script>

<template>
  <div>
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.url">
        <NuxtLink
          :to="bookmark.url"
          :title="bookmark.name"
          target="_blank"
          external
          class="-m-2 flex min-w-0 items-center gap-3 rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.name"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
