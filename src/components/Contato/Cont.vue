<template>
       <section class="contato">
            <div class="container">
                <h1>NOSSOS CONTATOS</h1>
                <div class="informacoes">
                    <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h3>Email:</h3>
                        <p>Email para doações:</p>
                        <p class="emails">doacoesaaic@gmail.com</p>
                        <br>
                        <p>Email para assuntos de Marketing e Parcerias:</p>
                        <p class="emails">marketingaaic@gmail.com</p>
                        <br>
                        <p>Outros assuntos:</p>
                        <p class="emails">aaic@gmail.com</p>
                    </div>

                    <div class="telefone">
                        <i class="bi bi-telephone"></i>
                        <h3>Telefones de Contato:</h3>
                        <p>Central de Atendimento para Doações:</p>
                        <p class="subtitulo">Capitais e Regiões Metropolitanas</p>
                        <p class="numeros">7199999-9999</p>
                        <p class="numeros">7199999-9999</p>
                        <p class="numeros">7199999-9999</p>
                    </div>
                    
                    <div class="endereco">
                        <i class="bi bi-geo-alt"></i>
                        <h3>Endereços</h3>
                        <p>Endereço da unidade em Salvador(BA):</p>
                        <p class="enderecos">Av. Orlando Gomes, 1845 - Piatã
                        <br>Salvador - BA. CEP - 41650-010
                        </p>
                        <br>
                        <p>Endereço da unidade em Lauro de Freitas(BA):</p>
                        <p class="enderecos">Av. Luiz Tarquínio Pontes, 938 - Jardim Aeroporto
                        <br> Lauro de Freitas - BA.CEP - 42702-000
                        </p>               
                    </div>
                </div>
            </div>
        </section>

      <section>
        <FaleConosco/>
      </section>
      
</template>
<script>
import FaleConosco from './FaleConosco.vue';

export default {

    name: 'Cont',
    components: {
        FaleConosco
    }
}
</script>
<style>
section.contato{
    display: flex;
    justify-content: center;
}

section.contato .container{
    display: flex;
    margin-top: 135px;
    color: #ffffff;
    flex-direction: column;
    text-align: center;
}

section.contato .informacoes{
    display: flex;
    justify-content: space-between;
    margin-top: 57px;
    width: 1200px;
}

section.contato .informacoes i{
    font-size: 50px;
}

section.contato .email p{
    margin: 0;
}

section.contato .emails{
    font-size: 14px;
    padding-top: 0;
}

section.contato .telefone p{
    margin: 0;
}

section.contato .telefone .numeros {
    font-size: 14px;
}

section.contato  .telefone .subtitulo {
    padding-top: 10px;
    font-size: 14px;
}


section.contato .endereco p{
    margin: 0;
}

section.contato .enderecos{
    font-size: 14px;
    padding-top: 0px;
}

section.contato .telefone{
    width: 350px;
}

section.contato .email{
    width: 350px;
}

section.contato .endereco{
    width: 350px;
}

</style>