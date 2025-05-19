<template>
    <div>
      <h5 class="mt-4"><strong>Dados Acadêmicos:</strong></h5>
      <select class="form-select mb-2">
        <option disabled selected>Escolaridade</option>
        <option>Ensino Médio</option>
        <option>Ensino Superior</option>
        <option>Pós-graduação</option>
      </select>
  
      <select class="form-select mb-2">
        <option disabled selected>Situação Acadêmica</option>
        <option>Concluído</option>
        <option>Cursando</option>
      </select>
  
      <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-secondary" @click="$emit('prev')">Voltar</button>
        <button class="btn btn-success">Enviar</button>
      </div>
    </div>
  </template>