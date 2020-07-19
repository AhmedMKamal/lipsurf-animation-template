import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import WelcomeSlide from '@/views/WelcomeSlide.vue'
import GetStartedSlide from '@/views/GetStartedSlide.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'WelcomeSlide',
    component: WelcomeSlide
  },
  {
    path: '/get-started',
    name: 'GetStartedSlide',
    component: GetStartedSlide
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
