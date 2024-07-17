<template>
  <div>
   <NuxtLayout>
    <NuxtPage />
   </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Designo` : 'Designo';
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
