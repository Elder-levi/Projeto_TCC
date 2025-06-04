<template>
  <div class="dinheiro">
    <h3>Escolha o valor:</h3>
    <input type="number" placeholder="Valor:">

    <DadosPessoais />

    <h3>Selecione a forma de pagamento:</h3>
    <Pagamento />
  </div>
</template>

<script>
import DadosPessoais from '@/components/QueroDoar/DadosPessoais.vue'
import Pagamento from '@/components/QueroDoar/Pagamento.vue'

export default {
  name: 'FormDinheiro',
  components: { DadosPessoais, Pagamento }
}
</script>

<style scoped>
 .dinheiro {
  font-size: 25px;
 }
 input{
    padding: 8px;
    border-radius: 8px;
    border: solid 1px grey;
    margin-bottom: 10px;
    width: 100%;
    font-size: 25px;
}

</style>