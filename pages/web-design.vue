<template>
    <div class="container">
        <PageBanner :title="pageTitle" :description="pageDescription"/>
    </div>
</template>
<script setup>
import PageBanner from '@/components/PageBanner.vue';

const pageTitle = ref('App Design');
const pageDescription = ref(
  'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
);

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