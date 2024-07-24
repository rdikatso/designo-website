<template>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <nuxt-link class="navbar-brand logo-container" to="/">
                       <img src="/designo-logo.png" alt="Designo Logo" class="mall-logo">
                    </nuxt-link>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <nuxt-link class="nav-link" href="/our-company">Our Company</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" href="/location">Locations</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" href="/contact">Contact</nuxt-link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
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
        </div>
</template>
<script setup>
import CustomButton from '@/components/CustomButton.vue';

useHead({
    title: null
})

onMounted(() => {
  try {
    const collapse = new $bs.Collapse('#navbarSupportedContent');
    collapse.show()
  }catch (e) {
    console.log('Bootstrap error: ', e)
  }
});
</script>
<style scoped lang="scss">
.navbar{
    padding: 50px 0 50px 0;
}
.mall-logo {
    max-width: 200px;
}
.nav-item {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
}
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



</style>