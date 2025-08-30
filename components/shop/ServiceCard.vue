<template>
  <div class="service-card">
    <div class="service-image">
      <img :src="service.image" :alt="service.name" />
      <div class="service-badge" v-if="service.duration">
        <font-awesome-icon :icon="['fas', 'clock']" />
        {{ service.duration }}
      </div>
    </div>
    <div class="service-content">
      <h4 class="service-name">{{ service.name }}</h4>
      <p class="service-description">{{ service.description }}</p>
      <div class="service-features" v-if="service.features">
        <ul>
          <li v-for="feature in service.features" :key="feature">
            <font-awesome-icon :icon="['fas', 'check']" />
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="service-footer">
        <div class="service-pricing">
          <span class="service-price">From ${{ service.price }}</span>
          <span class="service-note" v-if="service.type === 'service'">Starting price</span>
        </div>
        <button class="book-service-btn" @click="$emit('book-service', service)">
          <font-awesome-icon :icon="['fas', 'calendar-plus']" />
          {{ service.type === 'service' ? 'Book Now' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})

defineEmits(['book-service'])
</script>

<style scoped lang="scss">
.service-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
}

.service-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .service-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(231, 129, 107, 0.9);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.service-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-name {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.3;
}

.service-description {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  margin-bottom: 2rem;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #555;
      
      svg {
        color: #E7816B;
        font-size: 0.8rem;
      }
    }
  }
}

.service-footer {
  margin-top: auto;
}

.service-pricing {
  margin-bottom: 1.5rem;
  
  .service-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #E7816B;
    display: block;
  }
  
  .service-note {
    font-size: 0.8rem;
    color: #999;
    font-style: italic;
  }
}

.book-service-btn {
  background: #E7816B;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  
  &:hover {
    background: #D73527;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .service-content {
    padding: 1.5rem;
  }
  
  .service-name {
    font-size: 1.2rem;
  }
}
</style>
