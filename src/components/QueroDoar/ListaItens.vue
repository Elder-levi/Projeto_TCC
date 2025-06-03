<template>
  <div class="item">
    <div class="contador">
      <button @click="contador--" :disabled="contador <= 0">-</button>
      <span>{{ contador }}</span>
      <button @click="contador++">+</button>
    </div>
    <label>{{ label }}</label>
  </div>
</template>
<script>
export default {
    name: 'ListaItens',
  props: ['label'],
  data() {
    return { contador: 0 }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  margin: 8px 0;
}


.contador button {
  width: 30px;
  height: 30px;
  font-size: 18px;
  margin: 0 4px;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.contador span {
  width: 20px;
  text-align: center;
  font-weight: bold;
}

.contador button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>