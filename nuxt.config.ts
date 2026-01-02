// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  // Optional configuration
  icon: {
    // Default size
    size: "1em",

    // Default class
    class: "icon",

    // Aliases
    aliases: {
      nuxt: "logos:nuxt-icon",
      search: "mdi:magnify", // Alias for search icon
    },
  },
  css: [
    "@/assets/css/theme.css",
    // '~/assets/scss/fonts.scss',
    "~/assets/css/main.css",
    // '~/assets/scss/custom.scss'
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "swiper/css/effect-fade",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // @ts-ignore
});
