<template>
    <div>
        <LocationMap  v-for="(location, index) in locationData" :key="index" :location="location" :reverse="index % 2 !== 0"/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import LocationMap from '@/components/LocationMap.vue';

  const locationData = ref([
    {
        title: 'Canada',
        office_name: 'Designo Central Office',
        address: '3886 Wellington Street',
        city: 'Toronto',
        province: 'Ontario',
        postal_code: 'M9C 3J5',
        phone: '+253-863-8967',
        email: 'contact@designo.co',
        coordinates: [43.644009, -79.394539], // Latitude and Longitude
    },
    {
        title: 'Australia',
        office_name: 'Designo AU Office',
        address: '19 Balonne Street',
        city: 'New South Wales',
        province: 'Australia',
        postal_code: '2443',
        phone: '+61 2 1234 5678',
        email: 'contact@designo.au',
        coordinates: [-33.8688, 151.2093],
    },
    {
        title: 'United Kingdom',
        office_name: 'Designo UK Office',
        address: '13 Colorado Way',
        city: 'Rhyd-y-fro',
        province: 'Wales',
        postal_code: 'SA8 9GA',
        phone: '+44 1234 567890',
        email: 'contact@designo.uk',
        coordinates: [51.6214, -3.9436],
    }
]);



  const zoom = ref(5)
  </script>
  
  <style lang="scss" scoped>
  .location-detail{
    background-color: #FDF3F0;
    height: 400px;
    border-radius: 15px;
    padding: 5rem 5rem;

    .location-title{
        color: #E7816B;
        line-height: 48px;   
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 0;
    }
  }
  .location-map {
    height: 400px;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
  }
  </style>
  