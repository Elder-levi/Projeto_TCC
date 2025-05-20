<template>
    <section class="duvidas">
            <div class="container">
                <div class="principaisduvidas">
                    <div class="titulo">
                        <h1>Principais Dúvidas</h1>
                    </div>
                    <div class="groupInputs">
                        <details>
                            <summary><b>Para onde vai a minha doação?</b></summary>
                            <p>A sua doação é destinada à compra de mantimentos que serão distribuídos para as instituições 
                                <br>com maior vulnerabilidade.</p>
                        </details>
                        <div class="line"></div>
                        <details>
                            <summary><b>Por quanto tempo devo doar?</b></summary>
                            <p>Você pode doar até quando quiser. Não estipulamos uma data limite para continuar doando,
                                <br>já que nossa atuação não acaba e estamos sempre nos desafiando mais, em alcançar
                                cada
                                <br>vez mais instituições e oferecer o melhor suporte possível para que tenham um
                                presente e futuro
                                <br>melhores.
                            </p>
                        </details>
                        <div class="line"></div>
                        <details>
                            <summary><b>Posso cancelar minha doação?</b></summary>
                            <p>A hora que quiser. Você pode entrar em contato através do nosso Whatsapp 71 99988-8888,
                                <br> nos ligar no 0800 808 0008, ou enviar um e-mail para AAIC_atendimento@org.br com o
                                <br>assunto "cancelamento".
                            </p>
                        </details>
                        <div class="line"></div>
                        <details>
                            <summary><b>Como entrar em contato com vocês?</b></summary>
                            <p>Estamos sempre aperfeiçoando nosso atendimento aos doadores e doadoras. Hoje, você pode
                                <br>nos chamar em nosso Whatsapp 71 99988-8888, falar com a gente pelo telefone 0800 808 0008
                                <br>ou nos enviar um e-mail pelo AAIC_atendimento@org.br.
                            </p>
                        </details>
                        <div class="line"></div>
                        <details>
                            <summary><b>Receberei informações sobre minha doação?</b></summary>
                            <p>Queremos sempre poder mostrar o impacto da sua doação, como forma de gratidão e como
                                <br>prestação de conta. Estamos ativamente na busca de construir e proporcionar uma vida
                                melhor
                                <br>e mais plena para as instituições que conhecemos. Em nossos e-mails e redes sociais,
                                <br>estaremos sempre informando à vocês o que temos feito juntos!
                            </p>
                        </details>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </section>
  </template>
  
  <script >

  export default {
    name: 'Duvidas'
  }

  </script>
  
  <style scoped>

  section{
    background-color: #165692;
  }

  section.duvidas .principaisduvidas{
    padding: 200px 10% 200px;
}

section.duvidas .titulo h1{
    font-weight: 500;
    font-size: 50px;
    color: #ffffff;
}

section.duvidas .groupInputs .line{
    width: 800px;
    height: 0.08px;
    background-color: #000000;
    margin-bottom: 20px;
    margin-top: 10px;
}

section.duvidas details{
    color: #ffffff;
}

  </style>
  