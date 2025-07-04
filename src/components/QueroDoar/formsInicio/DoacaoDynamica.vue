<template>
  <section class="quero-doar">
    <!-- Texto da Instituição (direita) -->
    <div class="conteudo">
      <h1>Doe para {{ nomeInstituicao }}</h1>
      <p>{{ descricaoInstituicao }}</p>
    </div>

    <!-- Formulário de Doação (esquerda) -->
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
import DoacaoTipo from '../TiposDocao.vue'
import FormularioDinheiro from '../Formularios/FormDinheiro.vue'
import FormularioUtensilios from '../Formularios/FormularioUtensilios.vue'
import TermosPrivacidade from '../Termos.vue'
import BotaoDoar from '../botao.vue'

export default {
  name: 'doarDyne',
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
  },
  computed: {
    instituicao() {
      return this.$route.params.instituicao || 'default'
    },
    nomeInstituicao() {
      const nomes = {
        larmaria: 'Abrigo Lar Irmã Benedita Camurgi',
        immel: 'Instituto para um mundo melhor - IMMEL',
        manasses: 'Instituição social Manassés'
      }
      return nomes[this.instituicao] || 'Instituição'
    },
    descricaoInstituicao() {
      const descricoes = {
        larmaria: `O Abrigo Lar Irmã Benedita Camurugi nasceu com o objetivo de abrigar crianças carentes da região,
          oferecendo moradia, atividades recreativas, incentivo à educação formal e tudo o que é necessário para
          o pleno desenvolvimento como cidadão. Hoje os trabalhos que a organização realiza acontecem em duas localidades:
          Salvador (Cidade Nova) e Simões Filho.`,
        immel: `O IMMEL é uma instituição de direito privado, sob a forma de associação sem fins lucrativos, fundada em 04 de julho de 2003.
          O IMMEL se propõe a ser um agente catalisador de ações sociais concretas, geradoras de mudanças, visando o desenvolvimento
          humano no aspecto educacional, cultural, artístico, desportivo, social e econômico das comunidades.`,
        manasses: `A Instituição destina-se ao acolhimento voluntário de pessoas em situação de dependência química,
          utilizando-se de tratamentos terapêuticos, acompanhamento psicológico, orientação médica, atividades esportivas,
          culturais e orientação espiritual opcional, em um ambiente seguro, que dá ao acolhido o respeito, a atenção
          e o carinho que a pessoa nesta condição necessita, sempre respeitando a individualidade de cada um.`
      }
      return descricoes[this.instituicao] || ''
    }
  },
  methods: {
    voltar() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.quero-doar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #165692;
  color: white;
  flex-wrap: wrap;
  text-align: left;
  box-sizing: border-box;
}


.container {
  order: 1; 
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  flex: 2 1 400px;
  box-sizing: border-box;
}

.conteudo {
  order: 2; 
  max-width: 400px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
}

.conteudo h1 {
  margin-bottom: 1rem;
   font-size: 2.5rem;
}

.conteudo p {
  margin-bottom: 1.5rem;
  line-height: 1.5;
}


@media (max-width: 768px) {
  .quero-doar {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .conteudo,
  .container {
    order: unset;
    max-width: 100%;
    align-items: center;
  }
}
</style>
