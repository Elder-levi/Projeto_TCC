<template>
  <div class="analise-page">
    <h1 class="desta">Análise de Voluntarios</h1>

    <div id="box">
      <h2>Análise de Cadastro</h2>

      <div class="info">
        <p><strong>Nome:</strong> {{ cadastro.nome }}</p>
        <p><strong>Email:</strong> {{ cadastro.email }}</p>
        <p><strong>Telefone:</strong> {{ cadastro.telefone }}</p>
        <p><strong>Motivo do Cadastro:</strong> {{ cadastro.motivo }}</p>
      </div>

      <div class="comentario">
        <label for="comentario">Comentário do avaliador (opcional):</label>
        <textarea
          v-model="comentario"
          id="comentario"
          rows="3"
        ></textarea>
      </div>

      <div class="botoes">
        <button id="bot1" @click="aceitarCadastro">Aceitar</button>
        <button id="bot2" @click="recusarCadastro">Recusar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnaliseCadastro',
  props: {
    cadastro: {
      type: Object,
      required: true,
      default: () => ({
        nome: 'João da Silva',
        email: 'joao@email.com',
        telefone: '(11) 91234-5678',
        motivo: 'Deseja ser voluntário em ações sociais.'
      })
    }
  },
  data() {
    return {
      comentario: ''
    }
  },
  methods: {
    aceitarCadastro() {
      console.log('Cadastro aceito!', this.cadastro, this.comentario);
    },
    recusarCadastro() {
      console.log('Cadastro recusado!', this.cadastro, this.comentario);
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
  max-width: 500px;
  margin-right: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#box > h2 {
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.info p {
  margin-bottom: 10px;
  font-size: 16px;
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
</style>
