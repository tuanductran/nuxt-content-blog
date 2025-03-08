<script setup lang="ts">
import { useFixedHeader } from "vue-use-fixed-header";

const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const items = [
  { name: "Home", path: "/", icon: "solar:home-smile-outline" },
  { name: "Articles", path: "/articles", icon: "solar:document-add-outline" },
  {
    name: "Projects",
    path: "/projects",
    icon: "solar:folder-with-files-outline",
  },
  { name: "Bookmarks", path: "/bookmarks", icon: "solar:bookmark-linear" },
  { name: "Books", path: "/books", icon: "solar:book-minimalistic-outline" },
  { name: "Uses", path: "/uses", icon: "solar:backpack-outline" },
];
</script>

<template>
  <header ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              :title="item.name"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon aria-hidden="true" :name="item.icon" class="size-5 z-10" />
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1"></li>
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </header>
</template>
