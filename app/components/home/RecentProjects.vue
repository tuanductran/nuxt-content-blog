<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects-home', () => {
  return queryCollection('projects').order('name', 'ASC').limit(3).all()
})
</script>

<template>
  <div>
    <h2 class="mb-6 text-xs font-semibold text-neutral-400">Recent Projects</h2>
    <div class="flex flex-col gap-4">
      <ProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="mt-6 flex items-center justify-center text-sm">
      <UButton
        label="All Projects"
        to="/projects"
        variant="outline"
        color="primary"
      />
    </div>
  </div>
</template>
