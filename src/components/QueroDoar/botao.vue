<template>
  <button type="submit" class="btndoar" @click="doar"><b>DOAR AGORA</b></button>
</template>

<script>
export default {
    name: 'BotaoDoar',
  methods: {
    doar() {
      alert('Doação enviada!')
    }
  }
}
</script>
<style scoped>
.btndoar{
    color: #ffffff;
    background-color: #4872ae;
    width: 100%;
    padding: 10px;
    font-size: 35px;
    border: none;
    border-radius: 5dvh;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btndoar:hover{
    transform: scale(1.05);
}



</style>
