<template>
  <div class="templates-page">
    <div class="page-hero">
      <div class="container">
        <h1>Design Templates</h1>
        <p>Ready-to-use design templates and digital assets for your projects</p>
      </div>
    </div>
    
    <div class="container">
      <div class="templates-grid">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4" v-for="template in templates" :key="template.id">
            <ProductCard :product="template" @add-to-cart="addToCart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/shop/ProductCard.vue'

useHead({
  title: 'Design Templates - Ready-to-Use Assets'
})

const templates = ref([
  {
    id: 1,
    name: 'Website Template Bundle',
    description: '10 responsive website templates for various industries',
    price: 149,
    image: '/shop/website-templates.jpg',
    type: 'product',
    category: 'templates'
  },
  {
    id: 2,
    name: 'Brand Guidelines Template',
    description: 'Professional brand guidelines template with examples',
    price: 79,
    image: '/shop/brand-guidelines.jpg',
    type: 'product',
    category: 'templates'
  },
  {
    id: 3,
    name: 'Social Media Kit',
    description: 'Complete social media templates for all platforms',
    price: 99,
    image: '/shop/social-media-kit.jpg',
    type: 'product',
    category: 'templates'
  },
  {
    id: 4,
    name: 'Business Card Templates',
    description: '50 professional business card designs',
    price: 39,
    image: '/shop/business-cards.jpg',
    type: 'product',
    category: 'templates'
  },
  {
    id: 5,
    name: 'Presentation Templates',
    description: 'Modern PowerPoint and Keynote templates',
    price: 69,
    image: '/shop/presentation-templates.jpg',
    type: 'product',
    category: 'templates'
  },
  {
    id: 6,
    name: 'Icon Pack Bundle',
    description: '1000+ vector icons in multiple styles',
    price: 49,
    image: '/shop/icon-pack.jpg',
    type: 'product',
    category: 'templates'
  }
])

const addToCart = (template) => {
  console.log('Adding template to cart:', template)
}
</script>

<style scoped lang="scss">
.page-hero {
  background: linear-gradient(135deg, #E7816B 0%, #D73527 100%);
  color: white;
  padding: 8rem 0 4rem;
  margin-top: -2rem;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
}

.templates-grid {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 6rem 0 3rem;
    
    h1 {
      font-size: 2.5rem;
    }
  }
}
</style>
