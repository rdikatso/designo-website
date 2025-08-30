// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "./"),
  },

  css : [
    "bootstrap/dist/css/bootstrap.min.css",
    '@fortawesome/fontawesome-svg-core/styles.css',
    "@/assets/main.scss"
  ],

  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vee-validate.js'
  ],
  modules: ["@nuxtjs/leaflet"]
})