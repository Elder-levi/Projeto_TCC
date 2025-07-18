import { createRouter, createWebHistory } from 'vue-router'
import Home from  '@/components/Inicio/UniPrincipal.vue'
import Duvidas from '@/components/Duvidas/Faq.vue'
import Contatos from '@/components/Contato/Cont.vue'
import QuemSomos from '@/components/QuemSomos/QuemSomos.vue'
import SejaVol from '@/components/Cadastro/VolunteerForm.vue'
import QueroDoar from '@/components/QueroDoar/DoeUni.vue'
import Login from '@/components/Login/formLogin.vue'
import Uniinsti from '@/components/Listagem/UniLIst.vue'
import DoacaoDy from '@/components/QueroDoar/formsInicio/DoacaoDynamica.vue'

const routes = [
  {path: '/' , name: 'Inicio' , component: Home,},
  { path: '/Duvida',name: 'Duvida', component: Duvidas, },
  { path: '/Contato',name: 'Contato', component:Contatos, },
  { path: '/QuemSomos',name: 'QuemSomos', component: QuemSomos, },
  { path: '/Cadastro',name: 'SejaVol', component: SejaVol, },
  {path: '/QueroDoar' , name: 'QueroDoar' , component: QueroDoar,},
  {path: '/formsLog' , name: 'Login' , component: Login,},
  {path: '/ListInstituicoes' , name: 'Uniinsti' , component: Uniinsti,},
  {path: '/querodoar/:instituicao' , name: 'DoacaoDy' , component: DoacaoDy,
  props: true 
  },

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