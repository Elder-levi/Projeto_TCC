
<template>
    
  <div class="page-container">
    
    <header>
      <BarraNavegacao/>
    </header>
    <router-view/>
    <footer class="app-footer">
      <final />
    </footer>
  </div>
</template>
<script >
import BarraNavegacao from '../src/components/Inicio/NavBar.vue'

import final from '../src/components/Inicio/FooterFinal.vue'
export default{

  name: 'App',
  components:{
    BarraNavegacao,
    final
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
