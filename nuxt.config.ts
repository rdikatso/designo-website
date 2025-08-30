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
  runtimeConfig: {
    public: {
      FB_API_KEY: "AIzaSyBUCsa4CHnjTnUm8Joq7p1emYDcxdYVNE8",
      FB_AUTH_DOMAIN: "designo-product-catalog.firebaseapp.com",
      FB_PROJECT_ID: "designo-product-catalog",
      FB_STORAGE_BUCKET: "designo-product-catalog.firebasestorage.app",
      FB_MESSAGING_SENDER_ID: "165295827987",
      FB_APP_ID: "1:165295827987:web:2da998f65d4943a1fe63e6",
      FB_MEASUREMENT_ID: "G-Y3V4L9SEYF",
    },
  },

  modules: ["@nuxtjs/leaflet"]
})