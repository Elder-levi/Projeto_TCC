<template>

<section class="topo">
            <div class="container">
                <div class="imgtopo">
                    <img src="@/components/imagens/imagem1.png">
                </div>
    
                <div class="texttopo">
                    <h1>Uma doação pode ser pequena para você,
                    <br>mas imensurável para quem recebe:
                    </h1>
                    <p>Com sua doação, você transforma esperança em realidade. Cada contribuição ajuda a oferecer suporte vital a comunidades carentes, garantindo um futuro melhor. Seja parte dessa corrente de solidariedade que impacta vidas. Sua generosidade pode fazer toda a diferença. Doe agora e mude histórias!</p>
                  <router-link to="/QueroDoar"><button ><b>DOE AGORA!</b></button></router-link>  
                </div>
            </div>
        </section>
</template>
<script>
export default{
    name: 'Principal',
}
</script>

<style scoped>
section.topo {
  background-color: #165692;
  overflow-x: auto; /* permite scroll lateral se necessário */
}

section.topo .container {
  padding: 100px 5% 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-width: 720px; /* impede quebra de linha em telas menores */
}

section.topo .imgtopo img {
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
}

section.topo .imgtopo {
  flex: 1 1 50%;
  min-width: 300px;
}

section.topo .texttopo {
  flex: 1 1 50%;
  color: #ffffff;
  font-size: 1.3rem;
  max-width: 600px;
}

section.topo .texttopo h1 {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}

section.topo .texttopo p {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
}

section.topo button {
  padding: 14px 28px;
  border-radius: 60px;
  border: none;
  background-color: #ffffff;
  color: #4872ae;
  font-size: 1rem;
  transition: 0.5s;
  cursor: pointer;
  margin-top: 1.5rem;
}

section.topo button:hover {
  transform: scale(1.1);
}

/* Ajustes suaves para telas médias */
@media (max-width: 768px) {
  section.topo .container {
    padding: 60px 4%;
    gap: 30px;
    min-width: 600px; /* continua lado a lado, mas menor */
  }

  section.topo .texttopo {
    font-size: 1.1rem;
  }

  section.topo .texttopo h1 {
    font-size: 1.3rem;
  }

  section.topo .texttopo p {
    font-size: 0.95rem;
  }

  section.topo button {
    font-size: 0.95rem;
    padding: 12px 24px;
  }
}

</style>