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