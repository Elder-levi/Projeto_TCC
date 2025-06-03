<template>
  <div class="bot">
    <button class="btndoacao" @click="$emit('selecionar', 'dinheiro')"><b>Doação em dinheiro</b></button>
    <button class="btndoacao" @click="$emit('selecionar', 'utensilios')"><b>Doação de utensílios</b></button>
  </div>
</template>
<script>
export default{
    name: 'TiposDoacao',
}
</script>
<style scoped>

.bot {
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-color: #4872ae;
  padding: 1rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.btndoacao {
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
  text-align: center;
}

.btndoacao:hover {
  background-color: white;
  color: #4872ae;
}

.btndoacao.ativo {
  background-color: white;
  color: #4872ae;
  font-weight: bold;
}
</style>