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
    <AppHeader
      class="mb-12"
      title="Tôi đang sử dụng gì?"
      :description="description"
    />
    <div class="flex flex-col gap-16">
      <ul class="flex flex-col gap-4">
        <AppUsesHeader title="Ứng dụng" />
        <AppUsesItem
          v-for="(item, id) in category.applications"
          :key="id"
          :item="item"
        />
      </ul>
      <ul class="flex flex-col gap-4">
        <AppUsesHeader title="Phần cứng" />
        <AppUsesItem
          v-for="(item, id) in category.hardware"
          :key="id"
          :item="item"
        />
      </ul>
      <ul class="flex flex-col gap-4">
        <AppUsesHeader title="Phần mềm" />
        <AppUsesItem
          v-for="(item, id) in category.software"
          :key="id"
          :item="item"
        />
      </ul>
      <ul class="flex flex-col gap-4">
        <AppUsesHeader title="Dịch vụ" />
        <AppUsesItem
          v-for="(item, id) in category.services"
          :key="id"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>
