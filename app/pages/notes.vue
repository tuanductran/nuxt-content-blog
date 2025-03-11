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
const notes = ref<NotionPage[]>([])
const hasMore = ref(true)
const isLoading = ref(false)

const toast = useToast()

const fetchNotes = async () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true

  try {
    const data = await $fetch<{
      results: NotionPage[]
      has_more: boolean
      next_cursor: string | null
    }>('https://api-mynotes.tuanductran-dev-f18.workers.dev', {
      params: {
        page_size: pageSize.value,
        start_cursor: startCursor.value || undefined
      }
    })

    if (data?.results) {
      notes.value.push(...data.results)
      startCursor.value = data.next_cursor
      hasMore.value = data.has_more
    } else {
      hasMore.value = false
    }
  } catch (error) {
    console.error(error)
    toast.add({ title: 'Error loading data', color: 'red' })
    hasMore.value = false
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchNotes)
</script>

<template>
  <div>
    <AppHeader class="mb-8" title="Notes" :description="description" />
    <ul class="space-y-2">
      <li v-for="note in notes" :key="note.id">
        <NuxtLink
          :to="note.public_url"
          :title="note.title"
          target="_blank"
          external
          class="-m-2 flex min-w-0 items-center gap-3 rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10"
        >
          <UAvatar
            :src="getThumbnail(note.public_url)"
            :alt="note.title"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
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
