<script setup lang="ts">
const description
  = "Các phần mềm tôi sử dụng, những thiết bị yêu thích và các công cụ tôi khuyên dùng. Đây là danh sách tổng hợp những món đồ mà tôi yêu thích nhất.";
useSeoMeta({
  title: "Uses | Tuan Duc Tran",
  description,
  ogTitle: "Uses | Tuan Duc Tran",
  ogDescription: description,
  ogImage: "/favicon.jpg",
  twitterCard: "summary_large_image",
});
const { data: items } = await useAsyncData("uses", () =>
  queryCollection("uses").order("name", "ASC").all());
const hardware = items.value?.filter((item) => item.category === "hardware");
const software = items.value?.filter((item) => item.category === "software");
</script>

<template>
  <AppHeader
    class="mb-12"
    title="Tôi đang sử dụng gì?"
    :description="description"
  />
  <div class="space-y-24">
    <ul class="space-y-8">
      <AppUsesHeader title="Phần cứng" />
      <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
    </ul>
    <ul class="space-y-8">
      <AppUsesHeader title="Phần mềm" />
      <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
    </ul>
  </div>
</template>
