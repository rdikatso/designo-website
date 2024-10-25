<template>
    <div
      class="page-banner-with-image"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="container">
        <div class="row">
          <div class="col text-content">
            <h1>{{ title }}</h1>
            <p class="banner-desc">{{ description }}</p>
          </div>
          <div v-if="rightImage" class="col image-content">
            <img :src="rightImage" alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      default: "/newsletter-background.svg",
    },
    rightImage: {
      type: String,
      default: null,
    },
  });
  </script>
  
  <style scoped>
  .page-banner-with-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 250px;
    border-radius: 15px;
    background-color: #e7816b;
    padding: 3rem 4rem;
    color: #fff;
    display: flex;
    align-items: center;
  }
  
  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .banner-desc {
    max-width: 400px;
    text-align: left;
  }
  
  .image-content img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  </style>