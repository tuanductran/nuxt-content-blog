<script setup lang="ts">
const items = [
  { name: 'Home', path: '/', icon: 'solar:home-smile-outline' },
  { name: 'Articles', path: '/articles', icon: 'solar:document-add-outline' },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'solar:folder-with-files-outline'
  },
  { name: 'Bookmarks', path: '/bookmarks', icon: 'solar:bookmark-linear' },
  { name: 'Books', path: '/books', icon: 'solar:book-minimalistic-outline' },
  { name: 'Uses', path: '/uses', icon: 'solar:backpack-outline' },
  { name: 'Notes', path: '/notes', icon: 'solar:document-outline' }
]
</script>

<template>
  <header class="fixed top-0 z-50 w-full">
    <nav class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <ul
        class="my-4 flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              :title="item.name"
              class="hover:text-primary-500 dark:hover:text-primary-400 relative flex items-center justify-center px-3 py-4 transition"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon aria-hidden="true" :name="item.icon" class="z-10 size-5" />
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1" />
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </header>
</template>
