import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/destination/:id',
    name: 'destination',
    component: Destination
  },
  {
    path: '/crew/:id',
    name: 'crew',
    component: Crew
  },
  {
    path: '/technology/:id',
    name: 'technology',
    component: Technology
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
