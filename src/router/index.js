import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
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
    {
      path: '/recipe/:id', 
      name: 'recipe-detail',
      component: () => import('../views/RecipeDetailView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router