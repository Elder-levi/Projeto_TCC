<template>
<footer>
        <div class="container">
            <div class="logofooter">
               <div class="logofooter">
                 <router-link to="/formsLog">
                    <img src="../imagens/Logo4.png">
                </router-link>
            </div>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/">INICIO</router-link></li>
                    <li> <router-link to="/QuemSomos">QUEM SOMOS</router-link></li>
                    <li><router-link to="/SejaVoluntario">CADASTRO</router-link></li>
                    <li>  <router-link to="/Duvida">DUVIDAS</router-link></li>
                    <li><router-link to="/Contato">CONTATO</router-link></li>
                </ul>
            </nav>

            <div class="linha"></div>

            <div class="icones">
                <i class="bi bi-instagram" id="instagram"></i>
                <i class="bi bi-twitter-x" id="twitter"></i>
                <i class="bi bi-facebook" id="facebook"></i>
                <i class="bi bi-whatsapp" id="whatsapp"></i>
            </div>

            <p>© 2024 Associação de apoio a instituições carentes - AAIC. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>
<script>

export default {
    name: 'FooterFinal',
    }
</script>
<style  >
footer{
  background-color: #292636;
  margin: 0;
  width: 100%;
  height: 100%;
 }
footer .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
}

footer nav ul li{
    display: inline-block;
    padding: 0 9px;
    transition: 0.5s;
    cursor: pointer;
    font-size: 15px;
}

footer a{
    text-decoration: none;
    color: #ffffff;
    position: relative;
}

footer a::after{
    content: " ";
    width: 0%;
    height: 2px;
    background-color: #165692;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.5s ease-in-out;
}

footer a:hover::after{
    width: 99%;
}

footer a:hover{
    color: #165692;
}

footer .icones{
    font-size: 30px;
    color: #ffffff;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}

footer .linha{
    width: 90%;
    height: 0.08px;
    background-color: #ffffff1c;
    margin-bottom: 15px;
    
}

footer #instagram{
    transition: 0.5s ease-in-out;
}

footer #instagram:hover{
    color: #165692;
    transform: scale(2);
}

footer #twitter{
    transition: 0.5s ease-in-out;
}

footer #twitter:hover{
    color: #165692;
}

footer #facebook{
    transition: 0.5s ease-in-out;
}

footer #facebook:hover{
    color: #165692;
}

footer #whatsapp{
    transition: 0.5s ease-in-out;
}

footer #whatsapp:hover{
    color: #165692;
}

footer i{
    margin-left: 15px;
}

footer p{
    color: #ffffffa6;
    font-size: 12px;
}

footer .linha {
  width: 90%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 20px 0;
}
</style>
