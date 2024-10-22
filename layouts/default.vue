<template>
  <div class="layout">
    <Navigation />
    <main class="content">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>
