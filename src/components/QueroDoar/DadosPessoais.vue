<template>
  <div class="dados-pessoais">
    <h3>Dados pessoais:</h3>
    <input type="text" placeholder="Nome completo:">
    <br>
    <input type="number" placeholder="CPF:">
     <br>
    <input type="email" placeholder="Email:">
    <br>    
    <input type="tel" placeholder="Telefone:">
     <br>
    <input type="text" placeholder="Data de nascimento:">
  </div>
</template>
<script >
export default {
    name: 'DadosPessoais',
}
</script>

<style scoped>
input{
    padding: 8px;
    border-radius: 8px;
    border: solid 1px grey;
    margin-bottom: 10px;
    width: 100%;
    font-size: 25px;
}



</style>