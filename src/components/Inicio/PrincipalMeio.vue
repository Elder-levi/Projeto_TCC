<template>
  <section class="meio">
    <div class="container">
      <div class="titulomeio">
        <h1>Nossas instituições parceiras:</h1>
      </div>

      <div class="textmeio" id="textmeio">
        <p>
          É importante escolher uma causa com a qual você se conecete de verdade.
          <br />
          Acreditar no propósito da organização faz com que você se engaje de
          <br />
          coração na causa, e que seja um agente ativo na transformação das realidades
          <br />
          acolhidas por ela.
        </p>
      </div>

      <div class="instituicoes">
        <div class="larmaria">
          <img src="../imagens/larmaria (1).png" />
          <h2>Abrigo Lar Irmã Benedita Camurgi</h2>
          <p>
            O Abrigo Lar Irmã Benedita Camurugi nasceu com o objetivo de abrigar crianças carentes da região, oferecendo
            moradia, atividades recreativas, incentivo a educação formal e tudo o que é necessário
            para o pleno desenvolvimento como cidadão.
            Hoje os trabalhos que a organização realiza acontecem em duas localidades: Salvador
            (Cidade Nova) e Simões Filho.
          </p>
          <button @click="redirectBenedita">Quero apoiar</button>
        </div>

        <div class="immel">
          <img src="../imagens/immel.jpg" />
          <h2>Instituto para um mundo melhor - IMMEL</h2>
          <p>
            O IMMEL é uma instituição de direito
            privado, sob a forma de associação sem fins lucrativos,
            fundada em 04 de julho de 2003. O IMMEL, se propõe a ser
            um agente catalisador de ações sociais concretas, geradoras
            de mudanças, visando o desenvolvimento humano no aspecto: educacional,
            cultural, artístico, desportivo, social e econômico das comunidades.
          </p>
          <button @click="redirectImmel">Quero apoiar</button>
        </div>

        <div class="manasses">
          <img src="../imagens/manasses.jpg" />
          <h2>Instituição social Manassés</h2>
          <p>
            A Instituição destina-se ao acolhimento voluntário de pessoas em situação de dependência química,
            utilizando-se de tratamentos terapêuticos, acompanhamento psicológico, orientação médica, atividades esportivas,
            culturais e orientação espiritual opcional, em um ambiente seguro, que dá ao acolhido o respeito, a atenção
            e o carinho que a pessoa nesta condição necessita, sempre respeitando a individualidade de cada um.
          </p>
          <button @click="redirectManasses">Quero apoiar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrincipalMeio',
  methods: {
    redirectBenedita() {
      this.$router.push({ name: 'DoacaoDy', params: { instituicao: 'larmaria' } })
    },
    redirectImmel() {
      this.$router.push({ name: 'DoacaoDy', params: { instituicao: 'immel' } })
    },
    redirectManasses() {
      this.$router.push({ name: 'DoacaoDy', params: { instituicao: 'manasses' } })
    }
  }
}
</script>
<style scoped>


section.meio {
  background-color: #292636;
  padding: 2rem 1rem;
}

section.meio p {
  margin: 0 20px;
}

section.meio .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
}

section.meio .titulomeio {
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 0;
  text-align: center;
}

section.meio .textmeio {
  text-align: center;
  max-width: 800px;
  margin: 1rem 0 3rem 0;
}

section.meio .instituicoes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 100px;
}

.larmaria,
.immel,
.manasses {
  background-color: #4872ae;
  width: 100%;
  max-width: 360px;
  height: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.larmaria img,
.immel img,
.manasses img {
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
}

.larmaria p,
.immel p,
.manasses p {
  margin: 0 20px 20px 20px;
  text-align: justify;
}

.larmaria h2,
.immel h2,
.manasses h2 {
  margin: 20px;
  text-align: start;
}

section.meio button {
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: #ffffff;
  color: #4872ae;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s ease;
  cursor: pointer;
  margin: 20px auto 30px auto;
  display: block;
}

section.meio button:hover {
  transform: scale(1.1);
}

/* Responsivo para telas pequenas */
@media (max-width: 768px) {
  section.meio .instituicoes {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  section.meio .container {
    font-size: 14px;
  }

  section.meio .titulomeio {
    font-size: 22px;
  }

  section.meio .textmeio {
    font-size: 14px;
  }

  section.meio button {
    font-size: 16px;
    padding: 8px 18px;
  }
}
</style>