<template>
  <section>
    <div class="container">
      <div class="form">
        <DoacaoTipo @selecionar="tipoSelecionado = $event" />

        <FormularioDinheiro v-if="tipoSelecionado === 'dinheiro'" />
        <FormularioUtensilios v-else-if="tipoSelecionado === 'utensilios'" />

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

section{
 background-image: url('../imagens/teste.jpg'); 
 background-attachment: fixed;
 background-repeat: no-repeat;
 background-size: cover;
 height: 100svh;
 width: 100%;
}
 /*
.container {
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 500px;
}*/
</style>