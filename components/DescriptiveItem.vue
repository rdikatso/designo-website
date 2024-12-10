<template>
    <div class="col-lg-4 descriptive-item d-flex flex-column justify-content-center align-items-center">
        <div class="image-wrapper">
            <img :src="backgroundImage" alt="background svg" class="background-img">
            <img :src="locationImage" :alt="`illustration of ${title}`"/>
        </div>
        <h3 class="content-title">
            {{ title }}
        </h3>
        <CustomButton :link="link" color="orange" >See Location</CustomButton>
    </div>
</template>
<script setup>
import CustomButton from '@/components/CustomButton.vue';
import { defineProps, computed} from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        default:'/home/desktop/friendly-background.svg'
    },
    locationImage: {
        type: String,
        required: true
    }
})
</script>
<style lang="scss" scoped>
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