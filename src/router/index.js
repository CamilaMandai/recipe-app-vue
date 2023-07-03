import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Favorite from '../pages/Favorite.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite,
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeDetails,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
