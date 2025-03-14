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

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
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

  routeRules: {
    // Pre-render
    '/': { prerender: true },
    '/api/books.json': { prerender: true },
    '/api/github.json': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      // For CF trailing slash issue
      autoSubfolderIndex: false
    }
  }
})
