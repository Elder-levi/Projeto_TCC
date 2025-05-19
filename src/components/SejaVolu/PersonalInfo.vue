<template>
    <div>
      <h5 class="mt-4"><strong>Dados pessoais:</strong></h5>
      <input type="text" class="form-control mb-2" placeholder="Nome" />
      <input type="text" class="form-control mb-2" placeholder="Sobrenome" />
      <input type="email" class="form-control mb-2" placeholder="E-mail" />
      <input type="text" class="form-control mb-2" placeholder="Data de nascimento" />
      <select class="form-select mb-2">
        <option>Gênero</option>
        <option>Masculino</option>
        <option>Feminino</option>
        <option>Outro</option>
      </select>
      <select class="form-select mb-2">
        <option>Raça</option>
        <option>Branca</option>
        <option>Parda</option>
        <option>Preta</option>
        <option>Amarela</option>
        <option>Indígena</option>
      </select>
      <input type="text" class="form-control mb-2" placeholder="Rua" />
      <input type="text" class="form-control mb-2" placeholder="Bairro" />
      <input type="text" class="form-control mb-2" placeholder="Cidade" />
      <input type="text" class="form-control mb-2" placeholder="Número" />
      <input type="text" class="form-control mb-2" placeholder="WhatsApp com DDD" />
      <input type="text" class="form-control mb-2" placeholder="CPF" />
  
      <div class="text-end">
        <button class="btn btn-primary mt-3" @click="$emit('next')">Próximo</button>
      </div>
    </div>
  </template>