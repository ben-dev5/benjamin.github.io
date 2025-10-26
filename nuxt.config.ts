export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['nuxt-mail', {
  message: {
    to: 'yedidiacahn71@gmail.com',
  },
  smtp: {
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth : {
      user : '59f0ca4d930313',
      pass : '145d2f42361751',
    },
  },
}],
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    baseURL : '/benjamin.github.io/',
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});