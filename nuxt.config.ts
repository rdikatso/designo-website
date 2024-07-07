// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css : [
    "~/assets/main.scss", 
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  plugins: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
  ],
})
