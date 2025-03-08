export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-02-27",

  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxthub/core",
    "nuxt-umami",
  ],

  umami: {
    domains: ["tuanductran.pages.dev"],
    proxy: "cloak",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
      link: [
        {
          rel: "icon",
          type: "image/jpg",
          href: "/favicon.jpg",
        },
      ],
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
        },
      },
    },
    preview: {
      api: "https://api.nuxt.studio",
    },
  },

  image: {
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "ik.imagekit.io",
    ],
  },

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  hub: {
    cache: true,
  },

  typescript: {
    typeCheck: true,
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/books/*"],
        },
      },
    },
  },
});
