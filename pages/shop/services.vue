<template>
  <div class="services-page">
    <div class="page-hero">
      <div class="container">
        <h1>Design Services</h1>
        <p>Professional design solutions tailored to your business needs</p>
      </div>
    </div>
    
    <div class="container">
      <div class="services-grid">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="service in services" :key="service.id">
            <ServiceCard :service="service" @book-service="bookService" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/shop/ServiceCard.vue'

useHead({
  title: 'Design Services - Professional Solutions'
})

const services = ref([
  {
    id: 1,
    name: 'Custom Website Design',
    description: 'Fully responsive custom website design with modern UI/UX',
    price: 1299,
    duration: '2-3 weeks',
    image: '/shop/website-design.jpg',
    type: 'service',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', '3 Revisions']
  },
  {
    id: 2,
    name: 'Mobile App Design',
    description: 'Complete mobile app UI/UX design for iOS and Android',
    price: 899,
    duration: '1-2 weeks',
    image: '/shop/app-design.jpg',
    type: 'service',
    features: ['iOS & Android', 'Prototype Included', 'User Testing', '2 Revisions']
  },
  {
    id: 3,
    name: 'Brand Identity Package',
    description: 'Complete brand identity including logo, guidelines, and assets',
    price: 599,
    duration: '1 week',
    image: '/shop/brand-identity.jpg',
    type: 'service',
    features: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Letterhead']
  },
  {
    id: 4,
    name: 'E-commerce Design',
    description: 'Complete e-commerce website design with shopping functionality',
    price: 1899,
    duration: '3-4 weeks',
    image: '/shop/ecommerce-design.jpg',
    type: 'service',
    features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Admin Panel']
  },
  {
    id: 5,
    name: 'Logo Design',
    description: 'Professional logo design with multiple concepts and revisions',
    price: 299,
    duration: '3-5 days',
    image: '/shop/logo-design.jpg',
    type: 'service',
    features: ['3 Concepts', 'Unlimited Revisions', 'Vector Files', 'Brand Guidelines']
  },
  {
    id: 6,
    name: 'Print Design',
    description: 'Professional print design for brochures, flyers, and marketing materials',
    price: 199,
    duration: '1 week',
    image: '/shop/print-design.jpg',
    type: 'service',
    features: ['Print Ready Files', 'Multiple Formats', '2 Revisions', 'Source Files']
  }
])

const bookService = (service) => {
  // Navigate to booking page or add to cart
  console.log('Booking service:', service)
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

.services-grid {
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
