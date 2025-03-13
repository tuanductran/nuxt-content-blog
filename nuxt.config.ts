export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-02-27',

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxthub/core'
  ],

  css: ['~/assets/css/app.css'],

  hub: {
    cache: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'h-full'
      },
      bodyAttrs: {
        class: 'bg-neutral-50 dark:bg-black min-h-screen'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/jpg',
          href: '/favicon.jpg'
        }
      ],
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': '965f3c0e-5020-4994-8926-fe09d69bb199'
        }
      ]
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark'
          }
        }
      }
    },
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  image: {
    domains: ['raw.githubusercontent.com', 'avatars.githubusercontent.com']
  },

  icon: {
    clientBundle: {
      scan: true
    }
  },

  typescript: {
    strict: false
  },

  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }
})
