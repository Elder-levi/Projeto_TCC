<template>
  <div class="analise-page">
    <h1 class="desta">Análise de Instituições</h1>

    <div v-if="instituicoesPendentes.length > 0" class="carousel-container">
      <button class="nav-btn" @click="prevGroup" :disabled="currentIndex === 0">&lt;</button>

      <div class="cards-wrapper">
        <div
          id="box"
          class="card"
          v-for="(inst, index) in displayedInstitutions"
          :key="inst._id"
        >
          <h2>Instituição {{ currentIndex + index + 1 }}</h2>

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

      <button class="nav-btn" @click="nextGroup" :disabled="currentIndex + 3 >= instituicoesPendentes.length">&gt;</button>
    </div>

    <div v-else class="mensagem-final">
      <p>Nenhuma instituição pendente para análise.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AnaliseInstituicoes",
  data() {
    return {
      instituicoesPendentes: [],
      currentIndex: 0,
      cardsPerPage: 3,
    };
  },
  mounted() {
    this.carregarInstituicoes();
  },
  computed: {
    displayedInstitutions() {
      // Pega o grupo atual de cards para mostrar
      return this.instituicoesPendentes.slice(
        this.currentIndex,
        this.currentIndex + this.cardsPerPage
      );
    },
  },
  methods: {
    async carregarInstituicoes() {
      try {
        const res = await axios.get("http://localhost:2500/Intituicoes");
        this.instituicoesPendentes = res.data.filter(
          (i) => i.status === "pendente"
        );
        this.currentIndex = 0; // resetar índice
      } catch (err) {
        console.error("Erro ao buscar instituições:", err);
      }
    },

    async atualizarStatus(id, status) {
      try {
        await axios.patch(
          `http://localhost:2500/inscricoes/instituicoes/pendentes/${id}`,
          { status }
        );

        // Remove instituição da lista
        this.instituicoesPendentes = this.instituicoesPendentes.filter(
          (i) => i._id !== id
        );

        // Ajusta currentIndex para não ultrapassar limites
        if (this.currentIndex >= this.instituicoesPendentes.length) {
          this.currentIndex = Math.max(
            0,
            this.instituicoesPendentes.length - this.cardsPerPage
          );
        }
      } catch (err) {
        console.error("Erro ao atualizar status:", err);
      }
    },

    prevGroup() {
      this.currentIndex = Math.max(0, this.currentIndex - this.cardsPerPage);
    },

    nextGroup() {
      if (this.currentIndex + this.cardsPerPage < this.instituicoesPendentes.length) {
        this.currentIndex += this.cardsPerPage;
      }
    },
  },
};
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
}

#box > h2 {
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.info p {
  margin-bottom: 8px;
  font-size: 15px;
  text-align: left;
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
