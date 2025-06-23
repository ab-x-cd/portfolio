import { createRouter, createWebHistory } from 'vue-router' // Modifié ici
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
  {
    path: '/projetscpp/asciiart-generator',
    name: 'AsciiartGenerator',
    component: () => import('@/views/AsciiartGenerator.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Modifié ici
  routes
})

router.beforeEach((to, from, next) => {
  const redirectPath = sessionStorage.getItem('redirectPath');
  if (redirectPath && to.path === '/portfolio/') { // Uniquement si on est redirigé vers la racine
    sessionStorage.removeItem('redirectPath');
    // Vérifie si le redirectPath correspond à une route existante
    const resolvedRoute = router.resolve(redirectPath);
    if (resolvedRoute.matched.length > 0 && resolvedRoute.name !== 'NotFound') {
      next(redirectPath);
    } else {
      next({ name: 'NotFound', params: { pathMatch: redirectPath.substring(1).split('/') } });
    }
  } else {
    next();
  }
});

export default router
