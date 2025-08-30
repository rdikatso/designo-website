<template>
  <div class="courses-page">
    <div class="page-hero">
      <div class="container">
        <h1>Design Courses</h1>
        <p>Learn design skills from industry experts with our comprehensive courses</p>
      </div>
    </div>
    
    <div class="container">
      <div class="courses-grid">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="course in courses" :key="course.id">
            <ServiceCard :service="course" @book-service="enrollCourse" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/shop/ServiceCard.vue'

useHead({
  title: 'Design Courses - Learn From Experts'
})

const courses = ref([
  {
    id: 1,
    name: 'UI/UX Design Masterclass',
    description: 'Complete UI/UX design course from beginner to advanced',
    price: 199,
    duration: '8 weeks',
    image: '/shop/uiux-course.jpg',
    type: 'course',
    features: ['40+ Video Lessons', 'Real Projects', 'Certificate', 'Lifetime Access']
  },
  {
    id: 2,
    name: 'Web Design Fundamentals',
    description: 'Learn the fundamentals of modern web design',
    price: 149,
    duration: '6 weeks',
    image: '/shop/web-design-course.jpg',
    type: 'course',
    features: ['30+ Video Lessons', 'HTML/CSS Basics', 'Responsive Design', 'Portfolio Project']
  },
  {
    id: 3,
    name: 'Brand Design Workshop',
    description: 'Master the art of brand identity design',
    price: 179,
    duration: '4 weeks',
    image: '/shop/brand-course.jpg',
    type: 'course',
    features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Case Studies']
  },
  {
    id: 4,
    name: 'Typography Mastery',
    description: 'Advanced typography techniques for designers',
    price: 99,
    duration: '3 weeks',
    image: '/shop/typography-course.jpg',
    type: 'course',
    features: ['Font Pairing', 'Hierarchy', 'Layout Design', 'Print & Digital']
  }
])

const enrollCourse = (course) => {
  console.log('Enrolling in course:', course)
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

.courses-grid {
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
