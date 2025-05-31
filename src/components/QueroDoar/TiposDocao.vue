<template>
  <div class="botao">
    <button class="btndoacao" @click="$emit('selecionar', 'dinheiro')"><b>Doação em dinheiro</b></button>
    <button class="btndoacao" @click="$emit('selecionar', 'utensilios')"><b>Doação de utensílios</b></button>
  </div>
</template>
<script>
export default{
    name: 'TiposDoacao',
}
</script>