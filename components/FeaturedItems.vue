<template>
    <div class="featured-section">
      <div class="row">
        <div class="col-md-6">
            <div class="featured-item main-content" :class="{ mobile: isMobile }" style="background-image: url(/home/desktop/image-web-design-small.jpg)">
                <div class="content">
                    <h3>Web Design</h3>
                    <nuxt-link to="/web-design" class="featured-link">
                    View Projects
                    <span class="chevron-icon">&gt;</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="col-md-6">
          <div class="featured-item" :class="{ mobile: isMobile }" style="background-image: url(/home/desktop/image-app-design.jpg)">
            <div class="content">
              <h3>App Design</h3>
              <nuxt-link to="/app-design" class="featured-link">
                View Projects
                <span class="chevron-icon">&gt;</span>
              </nuxt-link>
            </div>
          </div>
          <div class="featured-item" :class="{ mobile: isMobile }" style="background-image: url(/home/desktop/image-graphic-design.jpg)">
            <div class="content">
              <h3>Graphic Design</h3>
              <nuxt-link to="/graphic-design" class="featured-link">
                View Projects
                <span class="chevron-icon">&gt;</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isMobile = ref(false);
  
  const checkScreenSize = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  
  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
  </script>
  <style scoped>
 .featured-section {
    margin-top: 4rem;
    .featured-item {
        background-size: cover;
        background-position: center;
        height: 300px;
        display: flex;
        align-items: flex-end;
        margin-bottom: 1rem;
        position: relative;
        border-radius: 15px;
    }
    .content {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    border-radius: 15px;
    }

    h3 {
    margin: 0;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .featured-link {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    color: white;
    text-decoration: none;
  }

  .chevron-icon {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #E7816B;
  }
 }

 @media screen and (min-width: 678px){
    .featured-section {
        .main-content {
            height: calc(600px + 1rem);
        }
    }
  
  } 
  
  </style>
  