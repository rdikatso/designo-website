<template>
    <div class="container">
        <PageBanner :title="pageTitle" :description="pageDescription"/>
        Page Banner With Image
        <PageBannerWithImage  :title="pageTitle" :description="pageDescription" />
        <div class="page-content">
          <div>
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
          </div>
          <div class="featured-section">
            <div class="row">
              <div class="col-lg-6">
                <div class="featured-item" :class="{ mobile: isMobile }" style="background-image: url(/home/desktop/image-app-design.jpg)">
                  <div class="content">
                    <h3>Web Design</h3>
                    <nuxt-link to="/web-design" class="featured-link">
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
import PageBannerWithImage from '@/components/PageBannerWithImage.vue'

const pageTitle = ref('App Design');
const pageDescription = ref(
  'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
);
const webDesignItems = ref([
  {
    image: '/app-design/desktop/image-airfilter.jpg',
    title: 'Airfilter',
    description: 'Solving the problem of poor indoor air quality by filtering the air',
  },
  {
    image: '/app-design/desktop/image-eyecam.jpg',
    title: 'Eyecam',
    description: 'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    image: '/app-design/desktop/image-faceit.jpg',
    title: 'Faceit',
    description: 'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    image: '/app-design/desktop/image-loopstudios.jpg',
    title: 'Todo',
    description: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    image: '/app-design/desktop/image-todo.jpg',
    title: 'Loopstudios',
    description: 'A VR experience app made for Loopstudios',
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
 @media (min-width: 768px) and (max-width: 991px){
  .card-img-top {
    width: 50%;
    object-fit: cover;
  }
  .card-body {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

 }
</style>