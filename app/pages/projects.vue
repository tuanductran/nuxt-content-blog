<script setup lang="ts">
const description =
  'Tôi đã thực hiện rất nhiều dự án nhỏ trong suốt những năm qua, nhưng đây là những dự án mà tôi tự hào nhất. Nhiều trong số đó là mã nguồn mở, vì vậy nếu bạn thấy điều gì đó thú vị, hãy khám phá mã nguồn và đóng góp nếu bạn có ý tưởng để cải thiện chúng.'
useSeoMeta({
  title: 'Projects | Tuan Duc Tran',
  description,
  ogTitle: 'Projects | Tuan Duc Tran',
  ogDescription: description,
  ogImage: '/favicon.jpg',
  twitterCard: 'summary_large_image'
})

const { data: projects } = await useAsyncData('projects-all', () =>
  queryCollection('projects').order('name', 'ASC').all()
)
</script>

<template>
  <div>
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="flex flex-col gap-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </div>
</template>
