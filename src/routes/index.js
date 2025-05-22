import { createRouter, createWebHistory } from 'vue-router'
import Duvidas from '@/components/Duvidas/Faq.vue'

const routes = [
  { path: '/Duvida',        
    name: 'Duvida',       
    component: Duvidas, },
 
  // rota “catch-all” para 404 (opcional):
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
 // Testes
 
const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior() {
    // rola sempre para o topo ao mudar de rota
    return { top: 0 }
  }
})

export default router