<template>
  <div>
    <input v-model="nome_da_instituicao" type="text" placeholder="Nome da instituição" />
    <input v-model="Responsavel" type="text" placeholder="Responsável" />
    <input v-model="email" type="email" placeholder="E-mail" />
    <input v-model="tel" type="number" placeholder="Telefone com DDD" />
    <input v-model="Cnpj" type="number" placeholder="CNPJ" />
    <input v-model="Area_de_atuacao" type="text" placeholder="Área de atuação" />
    <textarea v-model="descricao" placeholder="Sobre" ></textarea>
    <button @click="enviarDados">Enviar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['enviar'])

// Campos com os mesmos nomes do schema
const nome_da_instituicao = ref('')
const Responsavel = ref('')
const email = ref('')
const tel = ref('')
const Cnpj = ref('')
const descricao = ref('')
const Area_de_atuacao = ref('')

function enviarDados() {
  const dados = {
    nome_da_instituicao: nome_da_instituicao.value,
    Responsavel: Responsavel.value,
    email: email.value,
    tel: tel.value,
    Cnpj: Cnpj.value,
    descricao: descricao.value,
    Area_de_atuacao: Area_de_atuacao.value
  }

  console.log('📤 Dados enviados:', dados)
  emit('enviar', dados)
}
</script>

<style scoped>
input, button {
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background: #195B99;
  color: white;
  border: none;
  cursor: pointer;
}

textarea {
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
