import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import about from '../views/about.vue';
import services from '../views/services.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/services',
      name: 'services',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/services.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/videos.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('../views/brands.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('../views/policy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/terms.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      props:true,
      component: () => import('../views/product.vue')
    },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: services
    // }
  ]
})

export default router
