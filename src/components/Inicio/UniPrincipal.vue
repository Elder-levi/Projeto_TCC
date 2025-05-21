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
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>