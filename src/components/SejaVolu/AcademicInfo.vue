<template>
  <div>
    <h5 class="mt-4"><strong>Dados Acadêmicos:</strong></h5>

    <select v-model="escolaridade" class="form-select mb-2">
      <option disabled value="">Escolaridade</option>
      <option>Ensino Médio</option>
      <option>Ensino Superior</option>
      <option>Pós-graduação</option>
    </select>

    <select v-model="situacaoAcademica" class="form-select mb-2">
      <option disabled value="">Situação Acadêmica</option>
      <option>Concluído</option>
      <option>Cursando</option>
    </select>

    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-secondary" @click="$emit('prev')">Voltar</button>
      <button class="btn btn-success" @click="enviarDadosAcademicos">Enviar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['prev', 'Enviar'])

const escolaridade = ref('')
const situacaoAcademica = ref('')

const enviarDadosAcademicos = () => {
  emit('Enviar', {
    escolaridade: escolaridade.value,
    situacaoAcademica: situacaoAcademica.value
  })
}
</script>