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
                       
                        <details>
                            <summary><b>Posso cancelar minha doação?</b></summary>
                            <p>A hora que quiser. Você pode entrar em contato através do nosso Whatsapp 71 99988-8888,
                                <br> nos ligar no 0800 808 0008, ou enviar um e-mail para AAIC_atendimento@org.br com o
                                <br>assunto "cancelamento".
                            </p>
                        </details>
                        
                        <details>
                            <summary><b>Como entrar em contato com vocês?</b></summary>
                            <p>Estamos sempre aperfeiçoando nosso atendimento aos doadores e doadoras. Hoje, você pode
                                <br>nos chamar em nosso Whatsapp 71 99988-8888, falar com a gente pelo telefone 0800 808 0008
                                <br>ou nos enviar um e-mail pelo AAIC_atendimento@org.br.
                            </p>
                        </details>
                      
                        <details>
                            <summary><b>Receberei informações sobre minha doação?</b></summary>
                            <p>Queremos sempre poder mostrar o impacto da sua doação, como forma de gratidão e como
                                <br>prestação de conta. Estamos ativamente na busca de construir e proporcionar uma vida
                                melhor
                                <br>e mais plena para as instituições que conhecemos. Em nossos e-mails e redes sociais,
                                <br>estaremos sempre informando à vocês o que temos feito juntos!
                            </p>
                        </details>
                      
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
section {
  margin: 0;
  background-color: #165692;
  width: 100%;
  height: 100vh;            /* ocupa toda a altura da tela */
  display: flex;
  justify-content: center;  /* centraliza horizontalmente */
  align-items: center;      /* centraliza verticalmente */
  padding: 20px;            /* espaçamento interno */
  box-sizing: border-box;
}

section.duvidas .principaisduvidas {
  max-width: 1000px;
  width: 100%;
  color: #ffffff;
  overflow-y: auto;         /* permite rolagem se conteúdo for maior */
  max-height: 90vh;         /* limita altura para o conteúdo não ultrapassar */
  padding: 20px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: rgba(21, 86, 146, 0.85); /* leve fundo para destacar */
}

/* Ajustes de fontes e espaçamentos */
section.duvidas .titulo h1 {
  font-weight: 500;
  font-size: 2.8rem;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
}

section.duvidas details {
  margin-bottom: 20px;
  background-color: rgba(255,255,255,0.1);
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

section.duvidas details[open] {
  background-color: rgba(255,255,255,0.2);
}

section.duvidas summary {
  font-size: 1.3rem;
}

section.duvidas p {
  font-size: 1.1rem;
  margin-top: 10px;
  line-height: 1.6;
}

/* Responsivo */
@media (max-width: 768px) {
  section.duvidas .titulo h1 {
    font-size: 2rem;
  }

  section.duvidas summary {
    font-size: 1.1rem;
  }

  section.duvidas p {
    font-size: 1rem;
  }
}

  </style>
  