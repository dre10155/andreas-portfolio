import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../pages/Portfolio.vue'
import Login from '../pages/Login.vue'
import UserProfile from '../pages/UserProfile.vue'
import { supabase } from '../helpers/supabase'

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
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// let getUserSession = async () => {
//   let session = await supabase.auth.getSession()

//   return session
// }
// router.beforeEach( async (to, from, next) => {
// debugger
//   let session = await getUserSession()
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && session === null) {
//     next('/login')
//   } else {
//     next()
//   }

// })


export default router


