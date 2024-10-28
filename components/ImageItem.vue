<template>
    <div
      class="item-with-image"
    >
      <div class="">
        <div class="row">
          <div v-if="image" :class="['col-lg-5 image-content', reverse ? 'order-lg-1' : 'order-lg-2']">
            <img :src="image" alt="Banner Image" />
          </div>
          <div :class="['col-lg-7 text-content', reverse ?  'order-lg-2' : 'order-lg-1']">
            <h1 class="banner-title">{{ title }}</h1>
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
    image: {
      type: String,
      default: null,
    },
    reverse : {
        type: Boolean,
        default: false,
    }
  });
  </script>
  
  <style scoped>
  .item-with-image {
    min-height: 250px;
    border-radius: 15px;
    background-color: #FDF3F0;
    color: #333136;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .banner-title{
    color: #E7816B;
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
  }

  @media (min-width: 1025px) {
    .item-with-image {
        max-height: 640px;
    }
    .text-content {
        padding: 0 4rem;
    }
  }
  </style>