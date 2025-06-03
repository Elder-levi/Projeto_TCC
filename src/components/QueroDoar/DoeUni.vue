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

section{
 background-image: url('../imagens/teste.jpg'); 
 background-attachment: fixed;
 background-repeat: no-repeat;
 background-size: cover;
 height: 100svh;
 width: 100%;
}

.container {
  background-color: rgba(255, 255, 255, 0.8);
  height: 45svh;
  width: 50%;
  margin: auto;
  padding: auto;
  border-radius: 20px;
}

.bot{
    color: #ffffff;
    background-color: #4872ae;
    width: 100%;
    margin-left: 25px;
    transition: 0.5s ease-in-out;
}

.bot:hover{
    transform: scale(1.05);
}

</style>