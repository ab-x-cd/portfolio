import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProjetsCpp from '@/views/ProjetsCpp.vue'
import ProjetsCss from '@/views/ProjetsCss.vue' // Main page for CSS/Frontend projects
import AnimRebond from '@/views/AnimRebond.vue'
import SolarSystem from '@/views/SolarSystem.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cpp-projects', name: 'ProjetsCpp', component: ProjetsCpp },
  {
    path: '/animscss', // Changed from /projets-css to /animscss to match Home.vue link
    name: 'ProjetsCss',
    component: ProjetsCss // This is the overview page for CSS/Frontend projects
  },
  {
    path: '/animscss/anim-rebond',
    name: 'AnimRebond',
    component: AnimRebond
  },
  {
    path: '/animscss/solar-system',
    name: 'SolarSystem',
    component: SolarSystem
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
