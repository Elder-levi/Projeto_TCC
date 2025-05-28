<template>
<div>
  <section class="bg-blue-600 text-white p-8 text-center ">
      <h2 >NOSSOS CONTATOS</h2>
      <div class="container">
        <div>
          <p class="text-2xl mb-2">📧</p>
          <p><strong>Email:</strong></p>
          <p>doacoessocialc@gmail.com</p>
          <p>marketingoalec@gmail.com</p>
          <p>oalec@gmail.com</p>
        </div>
        <div>
          <p class="text-2xl mb-2">📍</p>
          <p><strong>Endereços:</strong></p>
          <p>Salvador (BA):</p>
          <p>Av. Orlando Gomes, 1845 – Pituaçu</p>
          <p>Salvador – BA, CEP: 41650-010</p>
          <br />
          <p>Lauro de Freitas (BA):</p>
          <p>Av. Luiz Tarquínio Pontes, 683 – Jardim Aeroporto</p>
          <p>CEP: 42702-000</p>
        </div>
         <div>
          <p class="text-2xl mb-2">📞</p>
          <p><strong>Telefones de Contato:</strong></p>
          <p>Capitais e Regiões Metropolitanas:</p>
          <p>71 9999-9999</p>
          <p>71 9999-9998</p>
          <p>71 9999-9997</p>
        </div>
      </div>
    </section>
    <faleConosco/>
    </div>
    
  </template>
  
  <script>

   import FaleConosco from './FaleConosco.vue';

  export default {
    name: 'ContactInfo',

    components: {
      FaleConosco
    }
  }


  </script>
  
  <style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  p {
    margin: 0.25rem 0;
  }
  body{
    display: flex;
    flex-direction: column;
  }

  .container {

  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  gap: 45px;
  margin: 5em auto;
  
}

  section {
    background-color: #165692;
    width: 100%;
    height: 71vw;
    font-size: 30px;
  }
  FaleConosco {
    margin-top: 2rem;
  }
  </style>
  