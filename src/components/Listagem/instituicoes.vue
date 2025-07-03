<template>
  <div class="analise-page">
    <h1 class="desta">Análise de Instituições</h1>

    <div v-if="instituicoesPendentes.length > 0">
      <div
        v-for="(inst, index) in instituicoesPendentes"
        :key="inst._id"
        id="box"
      >
        <h2>Instituição {{ index + 1 }}</h2>

        <div class="info">
          <p><strong>Nome da Instituição:</strong> {{ inst.nome_da_instituicao }}</p>
          <p><strong>Responsável:</strong> {{ inst.Responsavel }}</p>
          <p><strong>Email:</strong> {{ inst.email }}</p>
          <p><strong>Telefone:</strong> {{ inst.tel }}</p>
          <p><strong>CNPJ:</strong> {{ inst.Cnpj }}</p>
          <p><strong>Área de Atuação:</strong> {{ inst.Area_de_atuacao }}</p>
        </div>

        <div class="botoes">
          <button id="bot1" @click="atualizarStatus(inst._id, 'aceito')">Aceitar</button>
          <button id="bot2" @click="atualizarStatus(inst._id, 'rejeitado')">Recusar</button>
        </div>
      </div>
    </div>

    <div v-else class="mensagem-final">
      <p>Nenhuma instituição pendente para análise.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AnaliseInstituicoes',
  data() {
    return {
      instituicoesPendentes: []
    }
  },
  mounted() {
    this.carregarInstituicoes()
  },
  methods: {
    async carregarInstituicoes() {
      try {
        const res = await axios.get('http://back-end-tcc.onrender.com/Intituicoes')
        this.instituicoesPendentes = res.data.filter(i => i.status === 'pendente')
      } catch (err) {
        console.error('Erro ao buscar instituições:', err)
      }
    },

    async atualizarStatus(id, status) {
      try {
        await axios.patch(
          `http://back-end-tcc.onrender.com/inscricoes/instituicoes/pendentes/${id}`,
          { status }
        )
        // Remove da lista após ação
        this.instituicoesPendentes =
          this.instituicoesPendentes.filter(i => i._id !== id)
      } catch (err) {
        console.error('Erro ao atualizar status:', err)
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
