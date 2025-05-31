<template>
  <div class="utensilios">
    <DadosPessoais />

    <h3>Quais utensílios deseja doar?</h3>

    <ListaItens label="Roupas (Sacos/Caixas)" />
    <ListaItens label="Brinquedos" />
    <ListaItens label="Cobertores" />
    <ListaItens label="Alimentos não perecíveis (Exceto sal)" />
    <ListaItens label="Produtos de Limpeza" />
    <ListaItens label="Produtos de Higiene" />
    <ListaItens label="Livros" />

    <div class="text">
      <p><b>Caso deseje doar uma quantidade grande de itens (mais de 30 itens), entre em contato com nosso WhatsApp: (71) 99999-9999</b></p>
    </div>
  </div>
</template>

<script>
import DadosPessoais from '@/components/QueroDoar/DadosPessoais.vue'
import ListaItens from '@/components/QueroDoar/ListaItens.vue'

export default {
  name: 'FormularioUtensilios',
  components: { DadosPessoais, ListaItens }
}
</script>