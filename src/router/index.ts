import { createRouter, createWebHistory } from 'vue-router'
import AllView from '../views/AllView.vue'
import FavoriteView from '../views/FavoriteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: AllView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView
    }
  ]
})

export default router
