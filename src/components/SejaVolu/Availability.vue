<template>
    <div>
      <h5 class="mt-4"><strong>Selecione os dias na semana disponíveis:</strong></h5>
      <div class="form-check" v-for="dia in dias" :key="dia">
        <input class="form-check-input" type="checkbox" :id="dia" />
        <label class="form-check-label" :for="dia">{{ dia }}</label>
      </div>
  
      <h5 class="mt-4"><strong>Disponibilidade de horários:</strong></h5>
      <div class="form-check" v-for="hora in horarios" :key="hora">
        <input class="form-check-input" type="checkbox" :id="hora" />
        <label class="form-check-label" :for="hora">{{ hora }}</label>
      </div>
  
      <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-secondary" @click="$emit('prev')">Voltar</button>
        <button class="btn btn-primary" @click="$emit('next')">Próximo</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
  const horarios = ['Manhã', 'Tarde', 'Noite']
  </script>
  