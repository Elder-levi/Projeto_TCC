<template>
<body>
  <div class="login-container">
    <h2>Entrar</h2>
    <form @submit.prevent="fazerLogin">
      <div class="form-group">
        <label for="email">Login</label>
        <input v-model="Login" type="text" id="email" placeholder="Digite seu Login" required />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input v-model="Senha" type="password" id="password" placeholder="Digite sua senha" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const Login = ref('');
const Senha = ref('');
const router = useRouter()

const fazerLogin = async () => {
  try {
    const response = await axios.post('http://localhost:2500/login', {
      login: Login.value,
      senha: Senha.value,
    });

    console.log('Login bem-sucedido!', response.data);

    // Salvar token localmente (se o backend retornar um)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
        router.push('/ListInstituicoes'); 

  } catch (error) {
    console.error('Erro ao fazer login:', error.response?.data || error.message);
    alert('Login ou senha inválidos!');
  }
};
</script>
 <style scoped>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f0f2f5;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .login-container {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }

    .login-container h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #333;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #555;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    button {
      width: 100%;
      padding: 0.75rem;
      background-color: #165692;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 1rem;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #0d3c69;
    }

    .footer {
      text-align: center;
      margin-top: 1rem;
    }

    .footer a {
      color: #165692;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
