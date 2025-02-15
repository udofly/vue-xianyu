import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach from\n', from)
  console.log('beforeEach to\n', to)
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach from\n', from)
  console.log('afterEach to\n', to)
})
export default router
