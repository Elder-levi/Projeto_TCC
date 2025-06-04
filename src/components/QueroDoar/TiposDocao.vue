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



.btndoacao {
  color: white;
  width: 20em;
  height: 4em;
  background-color: #4872ae;
  padding: 0.5rem 1rem;
  margin: 10px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btndoacao:hover {
  transform: scale(1.05);
}

</style>