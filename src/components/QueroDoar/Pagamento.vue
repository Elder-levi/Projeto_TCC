<template>
  <div class="pagamento">
    <details>
      <summary><b>PIX</b></summary>
      <button class="btnpix"><b>Gerar código PIX</b></button>
    </details>

    <details class="pagamentocc">
      <summary><b>Cartão de crédito</b></summary>
      <label>Número do cartão:</label>
      <br>
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

<style>

.btnpix{
    color: #ffffff;
    background-color: green;
    padding: 10px;
    font-size: 15px;
    width: 200px;
    border: none;
    border-radius: 15px;
    margin-top: 5px;
    margin-bottom: 15px;
    cursor: pointer;
}

.pagamentocc{
    display: flex;
    flex-direction: column;
}

.pagamentocc input{
    padding: 6px;
    padding-left: 15px;
}

.cartao{
    display: flex;
    gap: 5px;
}

.validade{
    display: flex;
    flex-direction: column;
}

.validade input{
    width: 162px;
}

.cvv{
    display: flex;
    flex-direction: column;
}

.cvv input{
    width: 160px;
}



</style>