<template>
  <div class="page-container">
    <Principal />
    <PrincipalMeio class="main-content" />
    <PrincipalFin />
  </div>
</template>

<script setup>
import Principal from './Principal.vue'
import PrincipalMeio from './PrincipalMeio.vue'
import PrincipalFin from './PrincipalFin.vue'
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