<template>
  <div>
    <Inst />
    <Lisvol />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Inst from './instituicoes.vue';
import Lisvol from './ListVolu.vue';

const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Você precisa estar logado para acessar esta página.');
    router.push('/login'); 
  }
});
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

</style>