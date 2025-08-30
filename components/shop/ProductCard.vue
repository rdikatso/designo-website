<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
      <div class="product-overlay">
        <button class="quick-view-btn" @click="$emit('quick-view', product)">
          <font-awesome-icon :icon="['fas', 'eye']" />
        </button>
      </div>
    </div>
    <div class="product-content">
      <h4 class="product-name">{{ product.name }}</h4>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <span class="product-price">${{ product.price }}</span>
        <button class="add-to-cart-btn" @click="$emit('add-to-cart', product)">
          <font-awesome-icon :icon="['fas', 'cart-plus']" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart', 'quick-view'])
</script>

<style scoped lang="scss">
.product-card {
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

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(231, 129, 107, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .quick-view-btn {
    background: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #E7816B;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
      background: #f8f8f8;
    }
  }
  
  &:hover .product-overlay {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.product-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
  line-height: 1.3;
}

.product-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.product-price {
  font-size: 1.3rem;
  font-weight: 600;
  color: #E7816B;
}

.add-to-cart-btn {
  background: #E7816B;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #D73527;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .product-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .add-to-cart-btn {
    justify-content: center;
  }
}
</style>
