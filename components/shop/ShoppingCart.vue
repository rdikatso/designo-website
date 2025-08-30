<template>
  <div class="cart-overlay" :class="{ active: isOpen }" @click="$emit('close')">
    <div class="cart-sidebar" @click.stop>
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <button class="close-btn" @click="$emit('close')">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
      
      <div class="cart-content">
        <div v-if="items.length === 0" class="empty-cart">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" class="empty-icon" />
          <p>Your cart is empty</p>
          <button class="continue-shopping-btn" @click="$emit('close')">
            Continue Shopping
          </button>
        </div>
        
        <div v-else class="cart-items">
          <div v-for="item in items" :key="item.id" class="cart-item">
            <div class="item-image">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p class="item-type">{{ item.type }}</p>
              <div class="item-controls">
                <div class="quantity-controls">
                  <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
                </div>
                <button class="remove-btn" @click="$emit('remove-item', item.id)">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </div>
            </div>
            <div class="item-price">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="items.length > 0" class="cart-footer">
        <div class="cart-total">
          <div class="total-line">
            <span>Subtotal:</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="total-line">
            <span>Tax:</span>
            <span>${{ tax.toFixed(2) }}</span>
          </div>
          <div class="total-line total">
            <span>Total:</span>
            <span>${{ total.toFixed(2) }}</span>
          </div>
        </div>
        <button class="checkout-btn" @click="proceedToCheckout">
          <font-awesome-icon :icon="['fas', 'credit-card']" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close', 'update-quantity', 'remove-item'])

const subtotal = computed(() => {
  return props.items.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const tax = computed(() => {
  return subtotal.value * 0.08 // 8% tax rate
})

const total = computed(() => {
  return subtotal.value + tax.value
})

const updateQuantity = (itemId, quantity) => {
  emit('update-quantity', itemId, quantity)
}

const proceedToCheckout = () => {
  // Navigate to checkout page
  navigateTo('/shop/checkout')
}
</script>

<style scoped lang="scss">
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  
  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.cart-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  
  .cart-overlay.active & {
    transform: translateX(0);
  }
}

.cart-header {
  padding: 2rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    padding: 0.5rem;
    
    &:hover {
      color: #E7816B;
    }
  }
}

.cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 2rem;
}

.empty-cart {
  text-align: center;
  padding: 3rem 0;
  
  .empty-icon {
    font-size: 4rem;
    color: #ddd;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    margin-bottom: 2rem;
  }
  
  .continue-shopping-btn {
    background: #E7816B;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
      background: #D73527;
    }
  }
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
}

.item-image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.item-details {
  flex: 1;
  
  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #333;
  }
  
  .item-type {
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
    color: #666;
    text-transform: capitalize;
  }
  
  .item-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: #f0f0f0;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: #E7816B;
      color: white;
    }
  }
  
  span {
    min-width: 20px;
    text-align: center;
    font-weight: 500;
  }
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #e74c3c;
  }
}

.item-price {
  font-weight: 600;
  color: #E7816B;
  align-self: flex-start;
}

.cart-footer {
  padding: 2rem;
  border-top: 1px solid #eee;
}

.cart-total {
  margin-bottom: 2rem;
  
  .total-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    &.total {
      font-weight: 600;
      font-size: 1.1rem;
      color: #333;
      border-top: 1px solid #eee;
      padding-top: 0.5rem;
      margin-top: 1rem;
    }
  }
}

.checkout-btn {
  background: #E7816B;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #D73527;
  }
}

@media (max-width: 480px) {
  .cart-sidebar {
    width: 100vw;
  }
}
</style>
