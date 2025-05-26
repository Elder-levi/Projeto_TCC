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
                    <button ><b>DOE AGORA!</b></button>
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

section.topo{
    background-color: #4872ae;
}
section.topo .container{
    padding: 150px 2% 200px;
    display: flex;
    column-gap: 50px;
}

section.topo img{
    width: 600px;
    border-radius: 5px;
}

section.topo .texttopo{
    color: #ffffff;
    font-size: 25px;
    
}
p{
 width: 600px;
}
section.topo .texttopo h1{
    margin: 0;
    padding: 0;
}

section.topo button{
    padding: 17px ;
    border-radius: 60px;
    border: none;
    background-color: #ffffff;
    color: #4872ae;
    font-size: 17px;
    transition: 0.5s;
    cursor: pointer;
}

section.topo button:hover{
    transform: scale(1.10);
}


</style>