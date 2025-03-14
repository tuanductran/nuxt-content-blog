<script setup lang="ts">
import type { NotionPage } from '~/type'
import { getThumbnail } from '~/utils/getThumbnail'

const description =
  'Tổng hợp tất cả ghi chú của tôi về phát triển bản thân, kỹ năng sống, và nhiều chủ đề khác, sắp xếp theo thứ tự thời gian.'

useSeoMeta({
  title: 'Notes | Tuan Duc Tran',
  description,
  ogTitle: 'Notes | Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})

const pageSize = ref(10)
const startCursor = ref<string | null>(null)

const { data, pending, error } = await useAsyncData('notes', async () => {
  const response = await $fetch<{
    results: NotionPage[]
    has_more: boolean
    next_cursor: string | null
  }>('/api/notes', {
    query: {
      page_size: pageSize.value,
      start_cursor: startCursor.value || undefined
    }
  })

  return response
})

const notes = ref(data.value?.results || [])
const hasMore = ref(data.value?.has_more || false)
const startCursor = ref(data.value?.next_cursor || null)
const isLoading = ref(false)

const toast = useToast()

const fetchNotes = async () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true

  try {
    const response = await $fetch<{
      results: NotionPage[]
      has_more: boolean
      next_cursor: string | null
    }>('/api/notes', {
      query: {
        page_size: pageSize.value,
        start_cursor: startCursor.value || undefined
      }
    })

    if (response?.results) {
      notes.value.push(...response.results)
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
    <AppHeader class="mb-8" title="Notes" :description="description" />
    <div v-if="pending" class="text-center">Loading notes...</div>
    <div v-else-if="error" class="text-center">
      Error loading notes
    </div>
    <ul v-else class="flex flex-col gap-4">
      <li v-for="note in notes" :key="note.id">
        <NuxtLink
          :to="note.public_url"
          :title="note.title"
          target="_blank"
          external
          class="-m-2 flex min-w-0 items-center gap-3 rounded-lg p-2 text-sm hover:bg-neutral-100 dark:hover:bg-white/10"
        >
          <UAvatar
            :src="getThumbnail(note.public_url)"
            :alt="note.title"
            class="rounded-md"
          />
          <p class="truncate text-neutral-700 dark:text-neutral-200">
            {{ note.title }}
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
        @click="fetchNotes"
      />
    </div>
  </div>
</template>
