<template>
    <div class="container">
        <PageBanner :title="pageTitle" :description="pageDescription"/>
        <div class="page-content">
            <div class="row">
                <div v-for="(item, index) in webDesignItems" :key="index" class="col-12 col-lg-4 mt-4">
                    <div class="card flex-md-row flex-lg-column">
                        <img :src="item.image" class="card-img-top" :alt="item.title"/>
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="featured-section">
            <div class="row">
              <div class="col-lg-6">
                <div class="featured-item" :class="{ mobile: isMobile }" style="background-image: url(/home/desktop/image-app-design.jpg)">
                  <div class="content">
                    <h3>App Design</h3>
                    <nuxt-link to="/app-design" class="featured-link">
                      View Projects
                      <span class="chevron-icon">&gt;</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
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
        </div>
    </div>
</template>
<script setup>
import PageBanner from '@/components/PageBanner.vue';

const pageTitle = ref('Web Design');
const pageDescription = ref(
  'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
);
const webDesignItems = ref([
  {
    image: '/web-design/desktop/image-blogr.jpg',
    title: 'Blogr',
    description: 'Blogr is a platform for creating an online blog or publication',
  },
  {
    image: '/web-design/desktop/image-builder.jpg',
    title: 'Builder',
    description: 'Connects users the local contractors based on their location',
  },
  {
    image: '/web-design/desktop/image-camp.jpg',
    title: 'Camp',
    description: 'Get expert training in coding, data design, and digital marketing',
  },
  {
    image: '/web-design/desktop/image-express.jpg',
    title: 'Express',
    description: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    image: '/web-design/desktop/image-photon.jpg',
    title: 'Photon',
    description: 'A state-of-the-art music playet with high-resolution audio and DSP effects',
  },
  {
    image: '/web-design/desktop/image-transfer.jpg',
    title: 'Transfer',
    description: 'Site for low-cost money transfers and sending money within seconds',
  },
]);

</script>
<style scoped>
.page-banner {

    background-image: url('/newsletter-background.svg');
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
.featured-section {
    letter-spacing: 0.25em;
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
      transition: 0.3s;

      &:hover {
        background-color: rgba(231, 129, 107, 0.7);
      }
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
    text-transform: uppercase;
  }

  .chevron-icon {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #E7816B;
  }
 }
</style>