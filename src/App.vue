
<template>
    
  <div class="page-container">
    <!-- Navbar sempre visível -->
    <header>
      <BarraNavegacao />
    </header>

    <!-- Conteúdo das rotas aqui -->
    <main class="main-content">
      <router-view/>
    </main>

    <!-- Footer sempre visível -->
    <footer class="app-footer">
      <final />
    </footer>
  </div>
</template>
<script >
import BarraNavegacao from '../src/components/Inicio/NavBar.vue'
import UniPrincipal from './components/Inicio/UniPrincipal.vue'
import final from '../src/components/Inicio/FooterFinal.vue'
//INICIO
import Somos from  "../src/components/QuemSomos/QuemSomos.vue"
import SejaVolu from '../src/components/SejaVolu/VolunteerForm.vue'
import Duvidas from '../src/components/Duvidas/Faq.vue'
import  Contatos from "../sr/components/Contato/Cont.vue"
export default{

  name: 'App',
  components:{
    BarraNavegacao,
    UniPrincipal,
    final,
    Somos,
    SejaVolu,
    Duvidas,
    Contatos
  }
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
  
}
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;     
  width: 100vw;           
  overflow-x: hidden; 

}

.main-content {
  flex: 1;              
}


.app-footer {
  margin: 0;
  padding: 0;
  width: 100px;
}
</style>
