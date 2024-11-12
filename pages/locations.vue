<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="location-detail">
            <h4 class="location-title">Canada</h4>
            <div class="row">
            <div class="col-md-6">
              <p class="fw-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div class="col-md-6">
              <p class="fw-bold">Contact</p>
              <p>P: +253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="location-map">
            <LMap
              ref="map"
              :zoom="zoom"
              :center="[43.644009, -79.394539]"
              :use-global-leaflet="false"
              :leaflet-control="false"
              style="height: 100%; width: 100%;"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker
                :lat-lng="[43.644009, -79.394539]"
                >
                <LPopup>
                    <span>Designo Central Office</span>
                </LPopup>
             </LMarker>
            </LMap>
          </div>
        </div>
      </div>
    </div>
    <div class="margin-top-200">
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
  