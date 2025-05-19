<template>
    <section>
        <div class="volunteer-form container mt-4 p-4 bg-white rounded shadow">
 <div class="Containe">
              <h2 class="text-center text-white bg-primary p-3 rounded">SEJA UM VOLUNTÁRIO</h2>
      <p class="text-center text-muted">
        Que bom que está aqui! Preencha essa ficha de interesse no trabalho voluntário e acrescente uma cidadania para o coração.
      </p>
  
      <!-- Etapas -->
      <div v-if="currentStep === 1">
        <PersonalInfo @next="nextStep" />
      </div>
      <div v-else-if="currentStep === 2">
        <Availability @next="nextStep" @prev="prevStep" />
      </div>
      <div v-else-if="currentStep === 3">
        <AcademicInfo @prev="prevStep" />
     
      </div>
        </div>
        </div>
   
    
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import PersonalInfo from './PersonalInfo.vue'
  import Availability from './Availability.vue'
  import AcademicInfo from './AcademicInfo.vue'
  
  const currentStep = ref(1)
  
  function nextStep() {
    currentStep.value++
  }
  
  function prevStep() {
    currentStep.value--
  }
  </script>

<style scoped>
body{
    background-color: #165692;
 }
  section{
    
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: auto; 
   }
  .Containe{
    width: 50em;
    max-width: 50em;  
  }


</style>