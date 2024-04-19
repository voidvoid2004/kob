import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound.vue'


const routes = [
   {
    path: "/404/",
    name: "404",
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
