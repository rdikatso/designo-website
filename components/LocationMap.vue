<template>
    <div class="container margin-bottom-50">
      <div class="row">
        <div :class="['col-md-8',reverse ? 'order-md-2' : 'order-md-1', 'order-2']">
          <div class="location-detail">
            <h4 class="location-title">{{ location.title }}</h4>
            <div class="row">
            <div class="col-md-6 location-address">
              <p class="fw-bold">{{ location.office_name }}</p>
              <p>{{ location.address }}</p>
              <p>{{ location.city }}, {{ location.province }} {{ location.postal_code }}</p>
            </div>
            <div class="col-md-6">
              <p class="fw-bold">Contact</p>
              <p>P: {{ location.phone }}</p>
              <p>M: {{ location.email }}</p>
            </div>
            </div>
          </div>
        </div>
        <div :class="['col-md-4', reverse ? 'order-md-1' : 'order-md-2', 'order-1']">
          <div class="location-map">
            <LMap
              ref="map"
              :zoom="zoom"
              :center="location.coordinates"
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
                :lat-lng="location.coordinates"
                >
                <LPopup>
                    <span>{{location.office_name}}</span>
                </LPopup>
             </LMarker>
            </LMap>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    location: {
        type : Object,
        required: true
    },
    reverse: {
        type: Boolean,
        default: false,
    }
});

const zoom = ref(5)
</script>

<style lang="scss" scoped>
.location-detail{
  background-color: #FDF3F0;
  background-image: url('/locations-background.svg');
  background-repeat: no-repeat;
  padding: 5rem 5rem;
  height: 400px;
  text-align: center;

  .location-title{
      color: #E7816B;
      line-height: 48px;   
      font-size: 2.5rem;
      margin-bottom: 20px;
   }

    p {
      margin-bottom: 0;
   }

   .location-address {
      margin-bottom: 20px;
    }
}
.location-map {
  height: 400px;
  width: 100%;
  overflow: hidden;
}

@media (min-width: 769px){

    .location-detail {
        border-radius: 15px;
        text-align: left;
        height: 325px;
    }
    .location-map {
        border-radius: 15px; 
        height: 325px;
    }
}
</style>