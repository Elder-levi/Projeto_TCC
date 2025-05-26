<template>
    <section class="bg-white p-8 text-center">
      <form class="volunteer-form container mt-4 p-4 bg-white rounded shadow">
        <h2 class="font-bold text-lg">FALE CONOSCO</h2>
        <p class="mb-6">Deixe sua mensagem abaixo:</p>
        <div>
          <label>Nome:</label>
          <input v-model="form.name" type="text" class="input" placeholder="Digite o seu nome" />
        </div>
        <div>
          <label>Email:</label>
          <input v-model="form.email" type="email" class="input" placeholder="Digite o seu email" />
        </div>
        <div>
          <label>Telefone:</label>
          <input v-model="form.phone" type="text" class="input" placeholder="Digite seu número" />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea v-model="form.message" class="input" placeholder="Digite a sua mensagem"></textarea>
        </div>
        <button type="submit" style="background-color:#165692;" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar mensagem</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      };
    }
  }
  </script>
  
  <style scoped>

  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  