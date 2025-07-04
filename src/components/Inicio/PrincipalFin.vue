<template>
  <section class="final">
            <div class="container">
                <div class="titulofinal">
                    <h1>Missão e diferenciais da AAIC</h1>
                </div>
            </div>

            <div class="textfinal">
                <p>Nossa missão é promover Desenvolvimento Social, Solidário e Sustentável, Educação e Cultura, Arte
                <br>e Esporte, com Espiritualidade Ecumênica, para que haja Consciência Socioambiental, Alimentação,
                <br>Segurança, Saúde e Trabalho para todos, no despertar do Cidadão Planetário.
                </p>
            </div>

            <div class="diferenciais">
                <div class="absolute">
                    <div class="icon">
                        <i class="bi bi-search" id="italico"><img src="../imagens/logos/Menos_Pior.png" alt=""></i>
                    </div>

                    <div class="container2">
                        <h3>Transparência</h3>
                        <p>Acreditamos que cada doação deve ser acompanhada de total clareza sobre como os recursos estão sendo
                            utilizados. Por isso, nos comprometemos a manter nossos doadores informados sobre cada passo do processo.
                        </p>
                    </div>
                    
                </div>
                
                <div class="absolute">
                    <div class="icon">
                        <i class="bi bi-shield-fill-check"><img src="../imagens/logos/escudo-removebg-preview.png" alt=""></i>
                    </div>
                    <div class="container2">
                        <h3>Segurança</h3>
                        <p> Utilizamos tecnologia de ponta para garantir
                            que todos os dados sejam criptografados e mantidos seguros. Nosso sistema é auditado regularmente para manter os mais altos
                            padrões de segurança e privacidade.
                        </p>
                    </div>
                </div>

                <div class="absolute">
                    <div class="icon">
                        <i class="bi bi-award"> <img src="../imagens/logos/mead.png" alt=""> </i>
                    </div>

                    <div class="container2">
                        <h3>Qualidade</h3>
                        <p>Oferecemos o melhor atendimento para que as pessoas consigam transformar a realidade social em que vivem. Por isso, contamos com o trabalho
                            profissional de um time altamente qualificado dedicados e apaixonados pela causa.
                        </p>
                    </div>
                </div>
            </div>
        </section>

</template>
<script >
export default{
    name: 'PrincipalFin',
}
</script>
<style scoped>
img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 50%;
}

section {
  background: #165692;
  margin: 0;
  padding: 2rem 1rem;
}

section.final .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
}

section.final .titulofinal {
  font-size: 25px;
  margin: 40px 0 0 0;
  text-align: center;
}

section.final h1 {
  margin: 0;
}

section.final .textfinal{
    color: #ffffff;
    font-size: 20px;
    padding-bottom: 70px;
    text-align: center;
}

section.final .diferenciais {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
}

section.final .absolute {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
}

section.final .icon {
  font-size: 85px;
  background-color: #292636;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -60px;
  z-index: 1;
}

section.final .container2 {
  background-color: #ffffff;
  width: 100%;
  height: 300px;
  border-radius: 25px;
  padding: 80px 20px 20px 20px; /* espaço para o ícone sobreposto */
  text-align: center;
  font-size: 14px;
  color: #113455;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section.final p {
  margin: 0;
}

/* Responsivo para telas pequenas */
@media (max-width: 480px) {
  section.final .textfinal {
    font-size: 16px;
  }

  section.final .container2 {
    height: auto;
    padding-top: 100px;
  }

  section.final .icon {
    width: 100px;
    height: 100px;
    font-size: 60px;
    margin-bottom: -50px;
  }

  img {
    width: 50px;
    height: 50px;
  }
}

</style>