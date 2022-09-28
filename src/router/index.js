import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.vue'
import addPage from '../views/add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/add/:id',
    name: 'add',
    component: addPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
