<template>
  <div>
    <input type="text" placeholder="Nome da instituição" />
    <input type="text" placeholder="Responsável" />
    <input type="email" placeholder="E-mail" />
    <input type="tel" placeholder="Telefone com DDD" />
    <input type="text" placeholder="CNPJ" />
    <input type="text" placeholder="Área de atuação" />
    <button>Próximo</button>
  </div>
</template>

<script>
export default {
  name: 'InstitutionInfo'
}
</script>

<style scoped>
input, button {
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background: #195B99;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
