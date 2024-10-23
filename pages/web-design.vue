<template>
    <div class="container">
        <PageBanner :title="pageTitle" :description="pageDescription"/>
        <div class="page-content">
            <div class="row">
                <div v-for="(item, index) in webDesignItems" :key="index" class="col-md-4 mt-4">
                    <div class="card">
                        <img :src="item.image" class="card-img-top" :alt="item.title"/>
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PageBanner from '@/components/PageBanner.vue';

const pageTitle = ref('App Design');
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
</style>