<template>
 <section class="form">
            <div class="container">
                <div class="titulo">
                    <h1>FALE CONOSCO</h1>
                    <p><b>Deixe sua mensagem abaixo:</b></p>
                </div>

                <div class="formulario">
                        <label>Nome:</label>
                        <input type="text" placeholder="Digite o seu nome:">
                        <label>Email:</label>
                        <input type="email" placeholder="Digite o seu email:">
                        <label>Telefone</label>
                        <input type="tel" placeholder="Digite seu número">
                        <label>Mensagem:</label>
                        <textarea placeholder="Digite a sua mensagem:" rows="6"></textarea>
                        <button type="submit" onclick="recarregarPagContato()">Enviar mensagem</button>
                </div>
            </div>
        </section> 
</template>

<script>
export default {
    name: 'FaleConosco',
}
</script>