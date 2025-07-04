<template>
  <div class="bot">
    <button class="btndoacao" @click="$emit('selecionar', 'dinheiro')">
      <b>Doação em dinheiro</b>
    </button>
    <button class="btndoacao" @click="$emit('selecionar', 'utensilios')">
      <b>Doação de utensílios</b>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TiposDoacao',
}
</script>

<style scoped>
.bot {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4%;
  flex-wrap: nowrap; /* não quebra para linha de baixo */
  padding: 1rem;
  overflow-x: auto; /* permite rolagem horizontal caso necessário */
}

.btndoacao {
  flex: 1 1 auto;
  width: 44vw; /* ocupa cerca de metade da tela com gap entre eles */
  max-width: 300px;
  min-width: 120px;
  height: 3.5em;
  color: white;
  background-color: #4872ae;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: none;
}

.btndoacao:hover {
  transform: scale(1.05);
}

/* Reduz fonte em telas bem pequenas */
@media (max-width: 400px) {
  .btndoacao {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
}
</style>
