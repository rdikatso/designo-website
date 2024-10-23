<template>
    <div class="page-banner" :style="{ backgroundImage: `url(${backgroundImage})`}">
      <h1>{{ title }}</h1>
      <p class="banner-desc">{{ description }}</p>
      <div class="container">
        <div class="row">
            
        </div>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        default: '/newsletter-background.svg'
    }
})
</script>

<style scoped>
.page-banner {
background-size: cover;
background-position: center;
background-repeat: no-repeat;
min-height: 250px;
border-radius: 15px;
background-color: #E7816B;
padding: 3rem 4rem;
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.banner-desc {
max-width: 400px;
text-align: center;
}
  </style>