<template>
  <section>
    <div class="volunteer-form container mt-4 p-4 bg-white rounded shadow">
      <div class="Containe">
     
       

      
        <div class="tabs">
          <button
            :class="{ active: selectedForm === 'voluntario' }"
            @click="selectedForm = 'voluntario'"
          >
            VOLUNTÁRIO
          </button>
          <button
            :class="{ active: selectedForm === 'instituicao' }"
            @click="selectedForm = 'instituicao'"
          >
            INSTITUIÇÃO
          </button>
        </div>

         <p class="text-center text-muted">
          Que bom que está aqui! Preencha essa ficha de interesse no trabalho voluntário e acrescente uma cidadania para o coração.
        </p>

      
        <div class="form-area mt-3">
        
          <template v-if="selectedForm === 'voluntario'">
            <div v-if="currentStep === 1">
              <PersonalInfo @next="nextStep" />
            </div>
            <div v-else-if="currentStep === 2">
              <Availability @next="nextStep" @prev="prevStep" />
            </div>
            <div v-else-if="currentStep === 3">
              <AcademicInfo @prev="prevStep" @Enviar="enviarTudo" />
            </div>
          </template>

        
          <InstitutionInfo v-if="selectedForm === 'instituicao'"
           @Enviar="enviarTudo"  />
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
import InstitutionInfo from './InstitutionInfo.vue'
import axios from 'axios'

const selectedForm = ref('voluntario')
const currentStep = ref(1)

const personalData = ref({})
const availabilityData = ref({})
const academicData = ref({})
const institutionData = ref({})

  

function nextStep(data) {
  if (currentStep.value === 1) {
    personalData.value = data
    currentStep.value++
  } else if (currentStep.value === 2) {
    availabilityData.value = data
    currentStep.value++
  }
}

function prevStep() {
  currentStep.value--
}

async function enviarTudo(dataFinal) {
  try {
    if (selectedForm.value === 'voluntario') {
      alert('Voluntário cadastrado com sucesso!')
      academicData.value = dataFinal
      const dadosCompletos = {
        ...personalData.value,
        ...availabilityData.value,
        ...academicData.value
      }
      const response = await axios.post('http://localhost:2500/cadastro/Volutario', dadosCompletos)
      console.log('Voluntário cadastrado:', response.data)

    } else if (selectedForm.value === 'instituicao') {
      alert('Instituição cadastrada com sucesso!')
      institutionData.value = { ...institutionData.value, ...dataFinal }
     const response = await axios.post('http://localhost:2500/cadastro/Inst', dataFinal)
      console.log('Instituição cadastrada:', response.data)
    }
    
    // Resetar ou mostrar mensagem de sucesso se quiser
    currentStep.value = 1

  } catch (error) {
    console.error('Erro ao enviar os dados:', error)
  }
}

</script>

<style scoped>
section {
  background-color: #165692;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  height: 100svh;
  width: 100vw;
}

.container {
  width: 50em;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.tabs button {
  flex: 1;
  padding: 0.75rem;
  border-radius: 20px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  font-weight: bold;
  color: #333;
}

.tabs button.active {
  background-color: #195B99;
  color: white;
}

.form-area {
  display: flex;
  flex-direction: column;
}
</style>
