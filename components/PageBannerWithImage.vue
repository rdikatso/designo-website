<template>
    <div
      class="page-banner-with-image"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="">
        <div class="row">
          <div v-if="rightImage" class="col-lg-5 image-content order-lg-2">
            <img :src="rightImage" alt="Banner Image" />
          </div>
          <div class="col-lg-7 text-content order-lg-1">
            <h1>{{ title }}</h1>
            <p class="banner-desc">{{ description }}</p>
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
    color: #fff;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
  }
  
  .banner-desc {
    text-align: left;
  }

  .image-content img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (min-width: 1025px) {
    .text-content {
        padding: 0 4rem;
    }
  }
  </style>