// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  // head: {
  //   title: 'Designo Website',
  //   meta : [
  //     {
  //       charset: 'utf-8'
  //     },
  //     {
  //       name: 'viewport', content: 'width=device-width, initial-scale=1' 
  //     }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  //     { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'}
  //   ]
  // },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Amazing Website'
    }
  },
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
