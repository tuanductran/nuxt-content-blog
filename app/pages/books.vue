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

const pageSize = ref(10)
const startCursor = ref<string | null>(null)

const { data, pending, error } = await useAsyncData('books', async () => {
  const response = await $fetch<{
    results: NotionPage[]
    has_more: boolean
    next_cursor: string | null
  }>('/api/books', {
    query: {
      page_size: pageSize.value,
      start_cursor: startCursor.value || undefined
    }
  })

  return response
})

const books = ref(data.value?.results || [])
const hasMore = ref(data.value?.has_more || false)
const startCursor = ref(data.value?.next_cursor || null)
const isLoading = ref(false)

const toast = useToast()

const fetchBooks = async () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true

  try {
    const response = await $fetch<{
      results: NotionPage[]
      has_more: boolean
      next_cursor: string | null
    }>('/api/books', {
      query: {
        page_size: pageSize.value,
        start_cursor: startCursor.value || undefined
      }
    })

    if (response?.results) {
      books.value.push(...response.results)
      startCursor.value = response.next_cursor
      hasMore.value = response.has_more
    } else {
      hasMore.value = false
    }
  } catch (error) {
    console.error(error)
    toast.add({ title: 'Error loading data', color: 'error' })
    hasMore.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <AppHeader class="mb-8" title="Books" :description="description" />
    <div v-if="pending" class="text-center">Loading books...</div>
    <div v-else-if="error" class="text-center">
      Error loading books
    </div>
    <ul v-else class="flex flex-col gap-4">
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
    <div v-if="hasMore" class="mt-6 flex items-center justify-center text-sm">
      <UButton
        label="Load more"
        variant="outline"
        color="primary"
        :loading="isLoading"
        @click="fetchBooks"
      />
    </div>
  </div>
</template>
