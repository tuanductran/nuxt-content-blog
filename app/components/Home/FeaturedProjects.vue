<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-home", () => {
  return queryCollection("projects").order("name", "ASC").limit(3).all();
});
</script>

<template>
  <div>
    <h2 class="text-xs font-semibold text-gray-400 mb-6">Featured Project</h2>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects"
        to="/projects"
        variant="outline"
        color="primary"
      />
    </div>
  </div>
</template>
