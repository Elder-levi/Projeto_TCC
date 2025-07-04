<template>
  <section>
    <div class="container">
      

      <div class="form">
        <DoacaoTipo  @selecionar="tipoSelecionado = $event" />
        <FormularioDinheiro   v-if="tipoSelecionado === 'dinheiro'" />
        <FormularioUtensilios  v-else-if="tipoSelecionado === 'utensilios'" />
        <TermosPrivacidade />
        <BotaoDoar />
      </div>
    </div>
  </section>
</template>

<script>
import DoacaoTipo from './TiposDocao.vue'
import FormularioDinheiro from './Formularios/FormDinheiro.vue'
import FormularioUtensilios from './Formularios/FormularioUtensilios.vue'
import TermosPrivacidade from './Termos.vue'
import BotaoDoar from './botao.vue'

export default {
  components: {
    DoacaoTipo,
    FormularioDinheiro,
    FormularioUtensilios,
    TermosPrivacidade,
    BotaoDoar
  },
  data() {
    return {
      tipoSelecionado: 'dinheiro'
    }
  }
}
</script>
<style scoped>

section {
  background-image: url('../imagens/teste.jpg'); 
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; 
  padding: 1rem;
  box-sizing: border-box;
}

.container {
  background-color: rgba(255, 255, 255, 0.8);
  width: 50svh;
   max-width: 50svh;
  height: auto;
  border-radius: 20px;
  margin-left: 2rem; 
  margin-top: 2rem;   
  padding: 1rem;
  box-sizing: border-box;
}
@media (max-width: 360px) {
  .container {
    padding: 0.8rem;
    border-radius: 12px;
  }
}
</style>