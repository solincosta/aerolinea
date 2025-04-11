import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import DestinoView from '../views/DestinoView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/destino/:id',
    name: 'DestinoView',
    component: DestinoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
