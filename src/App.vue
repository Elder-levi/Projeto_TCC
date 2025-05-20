
<template>
  <header>

    <BarraNavegacao/>

  </header>
 

   <Contatos/>

  <footer>
    <final/>
  </footer>  
</template>
<script >
import BarraNavegacao from '../src/components/Inicio/NavBar.vue'
import Principal from '../src/components/Inicio/Principal.vue'
import PrincipalMeio from '../src/components/Inicio/PrincipalMeio.vue'
import PrincipalFin from '../src/components/Inicio/PrincipalFin.vue'
import final from '../src/components/Inicio/FooterFinal.vue'
//INICIO
import Somos from  "../src/components/QuemSomos/QuemSomos.vue"
import SejaVolu from '../src/components/SejaVolu/VolunteerForm.vue'
import Duvidas from '../src/components/Duvidas/Faq.vue'
import  Contatos from "@/components/Contato/Cont.vue"
export default{

  name: 'App',
  components:{
    BarraNavegacao,
    Principal,
    PrincipalMeio,
    PrincipalFin,
    final,
    Somos,
    SejaVolu,
    Duvidas,
    Contatos
  },
}


</script>

<style scoped>
*{
margin: 0;
padding: 0;
block-size: none;
}
 footer{
  position: fixed;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 20em;
 }
 
</style>
