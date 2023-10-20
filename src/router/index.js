import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import About from "@/views/About.vue";
import ProductPage from "@/views/ProductPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/product/:productID',
    name: 'product',
    component: ProductPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
