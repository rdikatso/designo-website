<template>
    <div class="row">
        <DescriptiveItem 
        v-for="(location, index) in locations"
        :key="index"
        :title="location.title"
        :backgroundImage="location.backgroundImage"
        :locationImage="location.locationImage"
        :link="location.link"
        />
    </div>
</template>
<script setup>
import DescriptiveItem from '@/components/DescriptiveItem.vue';


const locations = [
  {
    title: "Canada",
    locationImage: "/images/shared/desktop/illustration-canada.svg",
    link: "https://maps.app.goo.gl/vBUAaykxDmUwHBxD9",
    backgroundImage: "/home/desktop/friendly-background.svg"
  },
  {
    title: "United Kingdom",
    locationImage: "/images/shared/desktop/illustration-united-kingdom.svg",
    link: "https://maps.app.goo.gl/o7GLQNujsZMwc6ZE9",
    backgroundImage: "/home/desktop/friendly-background.svg"
  },
  {
    title: "Australia",
    locationImage: "/images/shared/desktop/illustration-australia.svg",
    link: "https://maps.app.goo.gl/AYC9YPjYVf6yCH4MA",
    backgroundImage: "/home/desktop/friendly-background.svg"
  }
];

</script>