// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Callback from '../views/CallbackView.vue'
// import { completeLogin } from '../useAuthService'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/callback', name: 'Callback', component: Callback }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   if (to.name !== 'Callback') {
//     const user = await completeLogin()
//     if (!user) {
//       next({ name: 'Callback' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
