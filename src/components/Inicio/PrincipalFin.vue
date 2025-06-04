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


img{
    color:#ffffff;
    border-radius: 200px;
}

section{
  
    background:  #165692;
    margin: 0%;
}


section.final .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
}

section.final .titulofinal{
    color: #ffffff;
    font-size: 25px;
    margin-top: 40px;
    margin-bottom: 0;
}

section.final h1{
    margin: 0;
}

section.final .textfinal{
    color: #ffffff;
    font-size: 20px;
    padding-bottom: 70px;
    text-align: center;
}

section.final .diferenciais{
    display: flex;
    justify-content: center;
    gap: 20px;
}

section.final .container2{
    margin-top: 70px;
    display: flex;
    background-color: #ffffff;
    width: 280px;
    height: 300px;
    justify-content: center;
    border-radius: 25px;
    padding-top: 20px;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    color: #113455;
}

section.final p{
    margin: 0;
}

section.final .icon{
    font-size: 85px;
    align-items: center;
    text-align: center;
    background-color: #292636;
    border-radius: 50%;
    width: 135px;
    height: 135px;
    position: absolute;
    margin-left: 72px;
    color: #ffffff;
}

</style>