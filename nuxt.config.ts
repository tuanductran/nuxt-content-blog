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
    '@nuxthub/core',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxt/eslint'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'h-full'
      },
      bodyAttrs: {
        class: 'antialiased bg-gray-50 dark:bg-black min-h-screen'
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

  googleFonts: {
    display: 'swap',
    families: {
      Inter: [400, 500, 600, 700, 800, 900]
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

  hub: {
    cache: true
  },

  typescript: {
    typeCheck: true
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ['/books/*', '/notes/*']
        }
      }
    }
  }
})
