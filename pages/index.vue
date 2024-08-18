<template>
    <Navigation />
    <div class="container">
        <div class="hero-img-wrapper">
            <div class="row">
                <div class="hero-container">
                <div class="col-md-6 hero-text">
                        <h2>
                            Award-winning custom designs and digital branding solutions
                        </h2>
                        <p>
                            With over 10 years in the industry, we are experienced in creating fully responsive websites,
                            app design and engaging brand experiences. Find out more about our services.
                        </p>
                        <CustomButton link="/our-company">Learn More</CustomButton>
                </div>
                <div class="col-md-6 hero-img-container">
                    <img src="/home/desktop/image-hero-phone.png" alt="Description of image" class="img-fluid">
                </div>
                </div>
            </div>
            <div class="hero-svg-layer">
                <svg width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
            </div>
        </div>
        <FeaturedItems />
        <div class="">
            <div class="row descriptive-items">
                <div class="descriptive-item d-flex flex-column justify-content-center align-items-center">
                    <div class="image-wrapper">
                        <img src="/home/desktop/illustration-passionate.svg"/>
                    </div>
                    <div class="content">
                        <h3 class="content-title">
                            Passionate
                        </h3>
                        <p class="content-desc">
                            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                        </p>
                    </div>
                </div>
                <div class="descriptive-item d-flex flex-column justify-content-center align-items-center">
                    <div class="image-wrapper">
                     <img src="/home/desktop/illustration-resourceful.svg"/>
                    </div>
                    <div class="content">
                        <h3 class="content-title">
                            Resourceful
                        </h3>
                        <p class="content-desc">
                            Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                        </p>
                    </div>
                </div>
                <div class="descriptive-item d-flex flex-column justify-content-center align-items-center">
                    <div class="image-wrapper">
                     <img src="/home/desktop/illustration-friendly.svg"/>
                    </div>
                    <div class="content">
                        <h3 class="content-title">
                            Friendly
                        </h3>
                        <p class="content-desc">
                            We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
   

</template>
<script setup>

import CustomButton from '@/components/CustomButton.vue';
import Navigation from '@/components/Navigation.vue';
import FeaturedItems from '@/components/FeaturedItems.vue';
import FooterComponent from '@/components/FooterComponent.vue';

useHead({
    title: null
})
</script>
<style scoped lang="scss">
.hero-img-wrapper {
  position: relative;
  height: auto;
  max-height: 800px;
  border-radius: 15px;
  background-color: #E7816B;
  padding: 1rem;
  color: #fff;
  overflow: hidden;
}
.hero-img-wrapper h2 {
  font-size: 1.5rem;
}

.hero-img-wrapper p {
  font-size: 1rem; 
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

.hero-text{
  order: 1;
  z-index: 1;
  padding-top: 2rem;
  text-align: center;
}
.hero-img-container {
  order: 2;
  padding-top: 8rem;;
}
.hero-img-container img {
  max-width: 100%;
  height: auto;
  transform: scale(2);
}
.hero-svg-layer{
    position: absolute;
    height: auto;
    top: 0;
    right: 0;
}
.hero-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 769px){
    .hero-img-wrapper {
        height: auto;
        max-height: 650px;
    }
    .hero-container {
        display: flex;
        flex-direction: row;
        align-items: normal;
    }
    .hero-text{
        padding-top: 9rem;
        padding-left: 4rem;
        text-align: left;
    }
    .hero-img-container {
        padding-top: 0;
    }
    .hero-img-container img {
        transform: scale(1);
    }   
    .hero-img-wrapper h2 {
        font-size: 3rem;
    }
}
.descriptive-item {
    display: flex;
    flex-direction: column;
    align-items : center;
    margin-top: 6rem;;

    .content {
        text-align: center;
    }
}

@media (min-width: 768px) and (max-width: 1024px){
    .descriptive-items .descriptive-item {
        flex-direction: row !important;
        text-align: left;
    }
    .descriptive-items .descriptive-item .image-wrapper {
        margin-right: 20px; 
    }
    .descriptive-items .descriptive-item .content {
        flex: 1; 
        text-align: left;
    }
}
@media (min-width: 1025px) {
    .descriptive-item {
        width: 33.33%; 
        text-align: left;
    }
    .content {
        align-items: flex-start;
        text-align: center;
    }
}
</style>