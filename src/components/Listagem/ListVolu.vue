<template>
  <div class="analise-page">
    <h1 class="desta">Análise de Voluntários</h1>

    <div v-if="voluntariosPendentes.length > 0">
      <div
        v-for="(cadastro, index) in voluntariosPendentes"
        :key="cadastro._id"
        id="box"
      >
        <h2>Cadastro {{ index + 1 }}</h2>

        <div class="info">
          <p><strong>Nome:</strong> {{ cadastro.nome }} {{ cadastro.sobrenome }}</p>
          <p><strong>Email:</strong> {{ cadastro.email }}</p>
          <p><strong>Data de Nascimento:</strong> {{ cadastro.Data_de_Nascimento }}</p>
          <p><strong>Telefone:</strong> {{ cadastro.telefone }}</p>
          <p><strong>CPF:</strong> {{ cadastro.CPF }}</p>
          <p><strong>Gênero:</strong> {{ cadastro.Genero }}</p>
          <p><strong>Escolaridade:</strong> {{ cadastro.escolaridade }}</p>
          <p><strong>Curso:</strong> {{ cadastro.curso }}</p>
          <p><strong>Dias disponíveis:</strong> {{ cadastro.disponibilidade?.dias?.join(', ') }}</p>
          <p><strong>Horários disponíveis:</strong> {{ cadastro.disponibilidade?.horarios?.join(', ') }}</p>
        </div>

        <div class="botoes">
          <button id="bot1" @click="atualizarStatus(cadastro._id, 'aceito')">Aceitar</button>
          <button id="bot2" @click="atualizarStatus(cadastro._id, 'rejeitado')">Recusar</button>
        </div>
      </div>
    </div>

    <div v-else class="mensagem-final">
      <p>Nenhum voluntário pendente para análise.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AnaliseCadastro',
  data() {
    return {
      voluntariosPendentes: []
    }
  },
  mounted() {
    this.carregarVoluntarios()
  },
  methods: {
    async carregarVoluntarios() {
      try {
        const response = await axios.get('http://back-end-tcc.onrender.com/Volutarios')
        this.voluntariosPendentes = response.data.filter(v => v.status === 'pendente')
      } catch (error) {
        console.error('Erro ao buscar voluntários:', error)
      }
    },

    async atualizarStatus(id, status) {
      try {
       await axios.patch(`http://back-end-tcc.onrender.com/inscricoes/voluntarios/pendentes/${id}`, { status })

        this.voluntariosPendentes = this.voluntariosPendentes.filter(v => v._id !== id)
      } catch (error) {
        console.error(`Erro ao atualizar status do volutario:`, error)
      }
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.analise-page {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 30px;
}

.desta {
  background-color: #165692;
  color: white;
  text-align: center;
  padding: 15px 0;
  margin-bottom: 25px;
  font-size: 24px;
}

#box {
  background-color: white;
  padding: 24px;
  border: 7px solid black;
  border-radius: 15px;
  max-width: 600px;
  margin: 0 auto 25px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#box > h2 {
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.info p {
  margin-bottom: 8px;
  font-size: 15px;
}

.comentario {
  margin-top: 20px;
}

.comentario label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #444;
}

.comentario textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  resize: vertical;
  outline: none;
}

.comentario textarea:focus {
  border-color: #165692;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
}

button {
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
}

#bot1 {
  background-color: #28a745;
}

#bot1:hover {
  background-color: #084d22;
}

#bot2 {
  background-color: #dc3545;
}

#bot2:hover {
  background-color: #8d1b27;
}

.mensagem-final {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-top: 50px;
}
</style>
