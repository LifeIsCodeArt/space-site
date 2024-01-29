import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    }

  ]
})

export default router
