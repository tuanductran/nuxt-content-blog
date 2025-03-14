<script setup lang="ts">
import { categorizeItems } from '~/utils/categorizeItems'

const description =
  'Các phần mềm tôi sử dụng, những thiết bị yêu thích và các công cụ tôi khuyên dùng. Đây là danh sách tổng hợp những món đồ mà tôi yêu thích nhất.'
useSeoMeta({
  title: 'Uses | Tuan Duc Tran',
  description,
  ogTitle: 'Uses | Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})
const { data: items } = await useAsyncData('uses', () =>
  queryCollection('uses').order('name', 'ASC').all()
)

const category = categorizeItems(items.value)
</script>

<template>
  <div>
    <Header
      class="mb-12"
      title="Tôi đang sử dụng gì?"
      :description="description"
    />
    <div class="flex flex-col gap-16">
      <UsesContent title="Ứng dụng" :items="category.applications" />
      <UsesContent title="Phần cứng" :items="category.hardware" />
      <UsesContent title="Phần mềm" :items="category.software" />
      <UsesContent title="Dịch vụ" :items="category.services" />
    </div>
  </div>
</template>
