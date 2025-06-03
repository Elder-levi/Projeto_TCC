<template>
  <div class="page-container">
    <Principal />
    <PrincipalMeio class="main-content" />
    <PrincipalFin />
  </div>
</template>

<script>
import Principal from '../Inicio/Principal.vue'
import PrincipalMeio from '../Inicio/PrincipalMeio.vue'
import PrincipalFin from '../Inicio/PrincipalFin.vue'

export default {
  name: 'UniPrincipal',
  components: {
    Principal,
    PrincipalMeio,
    PrincipalFin
  }
}

</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  width: 100vw;
  height: 100%;
}

.main-content {
  flex: 1;
}
</style>