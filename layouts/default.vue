<template>
  <div>
    <Navigation />
    <slot />
    <FooterComponent />
  </div>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>