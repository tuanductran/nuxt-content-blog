<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>();

const title
  = props.error?.statusCode === 404
    ? "404 - Page Not Found"
    : "An Error Occurred";
const description
  = props.error?.statusCode === 404
    ? "The page you are looking for does not exist or has been removed."
    : "An error occurred while loading the page. Please try again later.";
</script>

<template>
  <main class="min-h-screen">
    <AppHeader :title="title" :description="description" />
  </main>
</template>
