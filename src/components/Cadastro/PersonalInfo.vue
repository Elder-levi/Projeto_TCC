<template>
  <div>
    <h5 class="mt-4"><strong>Dados pessoais:</strong></h5>
    <input v-model="nome" type="text" class="form-control mb-2" placeholder="Nome" />
    <input v-model="sobrenome" type="text" class="form-control mb-2" placeholder="Sobrenome" />
    <input v-model="email" type="email" class="form-control mb-2" placeholder="E-mail" />
    <input v-model="dataNascimento" type="number" class="form-control mb-2" placeholder="Data de nascimento" />
    
    <select v-model="genero" class="form-select mb-2">
      <option disabled value="">Gênero</option>
      <option>Masculino</option>
      <option>Feminino</option>
      <option>Outro</option>
    </select>

    <input v-model="whatsapp" type="number" class="form-control mb-2" placeholder="WhatsApp com DDD" />
    <input v-model="cpf" type="number" class="form-control mb-2" placeholder="CPF" />

    <div class="text-end">
      <button class="btn btn-primary mt-3" style = " background-color: #165692;" @click="enviarDados">Próximo</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['next'])

const nome = ref('')
const sobrenome = ref('')
const email = ref('')
const dataNascimento = ref('')
const genero = ref('')
const numero = ref('')
const whatsapp = ref('')
const cpf = ref('')

const enviarDados = () => {
  emit('next', {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    dataNascimento: dataNascimento.value,
    genero: genero.value,    
    numero: numero.value,
    whatsapp: whatsapp.value,
    cpf: cpf.value,
  })
}
</script>
