<template>
    <div class="container">
        <PageBannerWithImage  :title="pageTitle" :description="pageDescription" :rightImage="rightImage" />
        <div class="margin-top-200 margin-bottom-40">
            <ImageItem  :title="talentTitle" :description="talentDescription" :image="talentImage" />
        </div>
        <Locations />
        <div class="margin-top-200 margin-bottom-40">
            <ImageItem  :title="realDealTitle" :description="realDealDescription" :image="realDealImage" reverse="true" />
        </div>

        
    </div>

</template>
<script setup>
import PageBannerWithImage from '@/components/PageBannerWithImage.vue';
import ImageItem from '@/components/ImageItem.vue';
import CustomButton from '@/components/CustomButton.vue';
import DescriptiveItem from '@/components/DescriptiveItem.vue';

const pageTitle = ref('About Us');
const pageDescription = ref('Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.');
const rightImage = ref('/about/desktop/image-about-hero.jpg')

const talentTitle = ref('World-class talent');
const talentDescription = ref('We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.')
const talentImage = ref('/about/desktop/image-world-class-talent.jpg')

const realDealTitle = ref('The Real deal');
const realDealDescription = ref('As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.');
const realDealImage = ref('/about/desktop/image-real-deal.jpg')


</script>
<style scoped>
.descriptive-item {
    margin-top: 100px;
}
.image-wrapper {
    position: relative;
}
.background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; 
}
.content-title{
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
@media (min-width: 1025px) {
    .descriptive-item {
         margin-top: 0;
    } 
}
</style>