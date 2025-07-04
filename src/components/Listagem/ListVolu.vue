<template>
  <div class="analise-page">
    <h1 class="desta">Análise de Voluntários</h1>

    <div v-if="voluntariosPendentes.length > 0" class="carousel-container">
      <button class="nav-btn" @click="prevGroup" :disabled="currentIndex === 0">&lt;</button>

      <div class="cards-wrapper">
        <div
          id="box"
          class="card"
          v-for="(cadastro, index) in displayedVoluntarios"
          :key="cadastro._id"
        >
          <h2>Cadastro {{ currentIndex + index + 1 }}</h2>

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

      <button class="nav-btn" @click="nextGroup" :disabled="currentIndex + cardsPerPage >= voluntariosPendentes.length">&gt;</button>
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
      voluntariosPendentes: [],
      currentIndex: 0,
      cardsPerPage: 3,
    }
  },
  mounted() {
    this.carregarVoluntarios()
  },
  computed: {
    displayedVoluntarios() {
      return this.voluntariosPendentes.slice(this.currentIndex, this.currentIndex + this.cardsPerPage)
    }
  },
  methods: {
    async carregarVoluntarios() {
      try {
        const response = await axios.get('http://localhost:2500/Volutarios')
        this.voluntariosPendentes = response.data.filter(v => v.status === 'pendente')
        this.currentIndex = 0
      } catch (error) {
        console.error('Erro ao buscar voluntários:', error)
      }
    },

    async atualizarStatus(id, status) {
      try {
        await axios.patch(`http://localhost:2500/inscricoes/voluntarios/pendentes/${id}`, { status })

        this.voluntariosPendentes = this.voluntariosPendentes.filter(v => v._id !== id)

        if (this.currentIndex >= this.voluntariosPendentes.length) {
          this.currentIndex = Math.max(0, this.voluntariosPendentes.length - this.cardsPerPage)
        }
      } catch (error) {
        console.error('Erro ao atualizar status do voluntário:', error)
      }
    },

    prevGroup() {
      this.currentIndex = Math.max(0, this.currentIndex - this.cardsPerPage)
    },

    nextGroup() {
      if (this.currentIndex + this.cardsPerPage < this.voluntariosPendentes.length) {
        this.currentIndex += this.cardsPerPage
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
  text-align: center;
}

.desta {
  background-color: #165692;
  color: white;
  padding: 15px 0;
  margin-bottom: 25px;
  font-size: 24px;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.cards-wrapper {
  display: flex;
  gap: 15px;
  max-width: 1900px;
  justify-content: center;
}

#box {
  background-color: white;
  padding: 24px;
  border: 7px solid black;
  border-radius: 15px;
  width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  text-align: left;
}

#box > h2 {
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.info p {
  margin-bottom: 8px;
  font-size: 15px;
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

.nav-btn {
  background-color: #165692;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 24px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.nav-btn:disabled {
  background-color: #888;
  cursor: default;
}

.nav-btn:hover:not(:disabled) {
  background-color: #0f3e71;
}

.mensagem-final {
  font-size: 18px;
  color: #555;
  margin-top: 50px;
}
</style>
