<template>
    <section class="bg-white p-8 text-center">
      <form  @submit.prevent="enviarFormulario" class="volunteer-form container mt-4 p-4 bg-white rounded shadow">
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
        <button type="submit" style="background-color:#165692;" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >Enviar mensagem</button>
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
      },
      showPopup: false
    };
  },
  methods: {
    enviarFormulario() {
    alert('Mensagem enviada com sucesso!');
    }
  }
}
  </script>
  
  <style scoped>

section {
  background-color: #ffffff;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}

.volunteer-form {
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  padding: 2rem;
  box-sizing: border-box;
  text-align: left;
}

.volunteer-form h2 {
  margin-bottom: 1rem;
  font-size: 1.75rem;
  color: #165692;
  text-align: center;
}

.volunteer-form p {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1rem;
  color: #333;
}

.volunteer-form label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: #333;
}

.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #165692;
  outline: none;
}

button[type="submit"] {
  display: block;
  width: 100%;
  background-color: #165692;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #123f73;
}

  </style>
  