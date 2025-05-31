<template>
  <div class="pagamento">
    <details>
      <summary><b>PIX</b></summary>
      <button class="btnpix"><b>Gerar código PIX</b></button>
    </details>

    <details class="pagamentocc">
      <summary><b>Cartão de crédito</b></summary>
      <label>Número do cartão:</label>
      <input type="number" placeholder="1234 1234 1234 1234">
      <div class="cartao">
        <div class="validade">
          <label>Data de validade:</label>
          <input type="number" placeholder="MM / AA">
        </div>
        <div class="cvv">
          <label>Código de segurança:</label>
          <input type="number" placeholder="CVV">
        </div>
      </div>
    </details>
  </div>
</template>
<script>
export default {
  name: 'Pagamento',
}
</script>