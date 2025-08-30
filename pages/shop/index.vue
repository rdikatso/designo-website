<template>
  <div class="shop-container">
    <!-- Hero Section -->
    <div class="shop-hero">
      <div class="container">
        <div class="hero-content">
          <h1>Design Shop</h1>
          <p>Discover our premium design services and digital products crafted with passion and expertise.</p>
        </div>
      </div>
    </div>

    <!-- Featured Categories -->
    <div class="container">
      <div class="categories-section">
        <h2 class="section-title">Shop Categories</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="category-card" @click="navigateToCategory('services')">
              <div class="category-image">
                <img src="/shop/services-category.svg" alt="Design Services" />
              </div>
              <div class="category-content">
                <h3>Design Services</h3>
                <p>Professional design solutions for your business</p>
                <span class="category-link">Browse Services</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="category-card" @click="navigateToCategory('templates')">
              <div class="category-image">
                <img src="/shop/templates-category.svg" alt="Design Templates" />
              </div>
              <div class="category-content">
                <h3>Design Templates</h3>
                <p>Ready-to-use design templates and assets</p>
                <span class="category-link">Browse Templates</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="category-card" @click="navigateToCategory('courses')">
              <div class="category-image">
                <img src="/shop/courses-category.svg" alt="Design Courses" />
              </div>
              <div class="category-content">
                <h3>Design Courses</h3>
                <p>Learn design skills from industry experts</p>
                <span class="category-link">Browse Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Products -->
      <div class="featured-products-section">
        <h2 class="section-title">Featured Products</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4" v-for="product in featuredProducts" :key="product.id">
            <ProductCard :product="product" @add-to-cart="addToCart" />
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="services-section">
        <h2 class="section-title">Popular Services</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="service in popularServices" :key="service.id">
            <ServiceCard :service="service" @book-service="bookService" />
          </div>
        </div>
      </div>
    </div>

    <!-- Shopping Cart Sidebar -->
    <ShoppingCart 
      :is-open="cartOpen" 
      :items="cartItems" 
      @close="cartOpen = false"
      @update-quantity="updateCartQuantity"
      @remove-item="removeFromCart"
    />

    <!-- Cart Toggle Button -->
    <button class="cart-toggle" @click="cartOpen = !cartOpen" v-if="cartItems.length > 0">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" />
      <span class="cart-count">{{ cartItemsCount }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import ProductCard from '@/components/shop/ProductCard.vue'
import ServiceCard from '@/components/shop/ServiceCard.vue'
import ShoppingCart from '@/components/shop/ShoppingCart.vue'

useHead({
  title: 'Shop - Premium Design Services & Products'
})

// Reactive state
const cartOpen = ref(false)
const cartItems = ref([])

// Sample data - in a real app, this would come from an API or database
const featuredProducts = ref([
  {
    id: 1,
    name: 'Premium Logo Package',
    description: 'Complete brand identity with logo variations',
    price: 299,
    image: '/shop/logo-package.svg',
    category: 'services',
    type: 'service'
  },
  {
    id: 2,
    name: 'Website Template Bundle',
    description: '10 responsive website templates',
    price: 149,
    image: '/shop/website-templates.svg',
    category: 'templates',
    type: 'product'
  },
  {
    id: 3,
    name: 'UI/UX Design Course',
    description: 'Complete UI/UX design masterclass',
    price: 199,
    image: '/shop/uiux-course.svg',
    category: 'courses',
    type: 'course'
  },
  {
    id: 4,
    name: 'Brand Guidelines Template',
    description: 'Professional brand guidelines template',
    price: 79,
    image: '/shop/brand-guidelines.svg',
    category: 'templates',
    type: 'product'
  }
])

const popularServices = ref([
  {
    id: 5,
    name: 'Custom Website Design',
    description: 'Fully responsive custom website design',
    price: 1299,
    duration: '2-3 weeks',
    image: '/shop/website-design.svg',
    category: 'services',
    type: 'service'
  },
  {
    id: 6,
    name: 'Mobile App Design',
    description: 'Complete mobile app UI/UX design',
    price: 899,
    duration: '1-2 weeks',
    image: '/shop/app-design.svg',
    category: 'services',
    type: 'service'
  },
  {
    id: 7,
    name: 'Brand Identity Package',
    description: 'Complete brand identity and guidelines',
    price: 599,
    duration: '1 week',
    image: '/shop/brand-identity.svg',
    category: 'services',
    type: 'service'
  }
])

// Computed properties
const cartItemsCount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0)
})

// Methods
const navigateToCategory = (category) => {
  navigateTo(`/shop/${category}`)
}

const addToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cartItems.value.push({
      ...product,
      quantity: 1
    })
  }
}

const bookService = (service) => {
  // For services, we'll add them to cart but with booking logic
  addToCart(service)
}

const updateCartQuantity = (itemId, quantity) => {
  const item = cartItems.value.find(item => item.id === itemId)
  if (item) {
    item.quantity = quantity
    if (quantity <= 0) {
      removeFromCart(itemId)
    }
  }
}

const removeFromCart = (itemId) => {
  const index = cartItems.value.findIndex(item => item.id === itemId)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

onMounted(() => {
  // Load cart from localStorage if available
  const savedCart = localStorage.getItem('designo-cart')
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart)
  }
})

// Watch cart changes and save to localStorage
watch(cartItems, (newCart) => {
  localStorage.setItem('designo-cart', JSON.stringify(newCart))
}, { deep: true })
</script>

<style scoped lang="scss">
.shop-container {
  min-height: 100vh;
}

.shop-hero {
  background: linear-gradient(135deg, #E7816B 0%, #D73527 100%);
  color: white;
  padding: 8rem 0 4rem;
  margin-top: -2rem;
  
  .hero-content {
    text-align: center;
    
    h1 {
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      letter-spacing: 0.1em;
    }
    
    p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.9;
    }
  }
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.categories-section {
  margin: 5rem 0;
}

.category-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .category-image {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .category-image img {
    transform: scale(1.05);
  }
  
  .category-content {
    padding: 2rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
      font-weight: 500;
    }
    
    p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .category-link {
      color: #E7816B;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.9rem;
      
      &::after {
        content: ' →';
        margin-left: 0.5rem;
      }
    }
  }
}

.featured-products-section,
.services-section {
  margin: 5rem 0;
}

.cart-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #E7816B;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(231, 129, 107, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: #D73527;
    transform: scale(1.1);
  }
  
  .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #D73527;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .shop-hero {
    padding: 6rem 0 3rem;
    
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .hero-content p {
      font-size: 1rem;
    }
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .category-card .category-content {
    padding: 1.5rem;
  }
}
</style>
