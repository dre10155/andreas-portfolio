import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../pages/Portfolio.vue'
import Login from '../pages/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Portfolio
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
