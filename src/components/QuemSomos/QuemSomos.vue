<template>
 <section class="quemsomos">
        <div class="container">
            <div class="titulo">
                <h1>Quem Somos</h1>
            </div>
            <div class="icones">
                <i class="bi bi-instagram" id="instagram"></i>
                <i class="bi bi-twitter-x" id="twitter"></i>
                <i class="bi bi-facebook" id="facebook"></i>
                <i class="bi bi-whatsapp" id="whatsapp"></i>
            </div>
        </div>
            <div class="line"></div>
            <div class="text">
                <p>A Associação De Apoio a Instituições Carentes - AAIC é  uma organização sem fins lucrativos dedicada a transformar vidas
                    e promover a solidariedade em nossa comunidade. Criaremos uma plataforma online dedicada a conectar pequenas instituições
                    de caridade nas regiões de Salvador e Lauro de Freitas com a comunidade local e apoiadores. A plataforma servirá como um 
                    hub centralizado que não apenas facilita doações, mas também oferece uma gama de ferramentas e recursos para aumentar a 
                    visibilidade e o impacto dessas instituições. Esta solução não só atende à necessidade imediata de visibilidade e suporte,
                    mas também cria uma infraestrutura sustentável para o crescimento e impacto contínuo das pequenas instituições de caridade
                    nas regiões de Salvador e Lauro de Freitas.
                </p>
                <p>Estamos constantemente em busca de parcerias e do apoio de pessoas como você, que compartilham da nossa visão e desejam
                    contribuir para um futuro mais inclusivo e solidário. Juntos, podemos construir uma sociedade onde a esperança e a 
                    solidariedade se espalham de forma irreversível. Muitas vezes, além de recursos financeiros, as instituições sociais
                    precisam de apoio em trabalhos voluntários, ajuda com a captação de parceiros ou até mesmo suporte na divulgação das
                    ações. Acreditar no propósito da organização faz com que você se engaje de coração na causa, e que seja um agente
                    ativo na transformação das realidades acolhidas por ela.
                </p>
                <p>Agradecemos profundamente o seu interesse em conhecer nosso trabalho e convidamos você a se juntar a nós nessa jornada
                    de transformação e ajuda mútua.
                </p>

            </div>
    </section>
</template>
<script>
export default {
    name: 'Somoos',
}

</script>
<style scoped>

section.quemsomos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  padding: 5% 10% 5% 10%;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #165692;
  color: #ffffff;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 0;
  padding: 0;
}

section.quemsomos .icones {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin-top: 20px;
  margin-bottom: 40px;
}

section.quemsomos .icones i:hover {
  color: #165692;
}

section.quemsomos .text {
  color: #ffffff;
  font-size: 20px;
}

section.quemsomos .text p {
  margin-top: 40px;
  font-size: 2rem; /* 35px aproximado */
  line-height: 1.4;
}

section.quemsomos .line {
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  margin: 30px 0;
}

.titulo > h1 {
  font-size: 3.75rem; /* 60px aproximado */
  text-align: left;
  margin: 0;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  section.quemsomos {
    padding: 5% 5% 5% 5%;
  }

  section.quemsomos .icones {
    width: 80%;
    font-size: 24px;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  section.quemsomos .text p {
    font-size: 1.2rem; /* menor texto em celulares */
    margin-top: 20px;
  }

  .titulo > h1 {
    font-size: 2.2rem;
    text-align: center;
  }
}

</style>