<script>
  const formatter = new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'})
</script>
<style>
  legend {
    font-size: 0.8em;
  }

  .balance h3 {
    color: #99cc00;
    text-align: center;
  }

  .balance legend {
    line-height: 1em;
    text-align: center;
    color: rgb(117, 117, 119);
  }

  section.cashflow {
    display: flex;
    text-align: center;
  }

  .income {
    flex: 1;
    color: rgb(117, 117, 119);
    text-align: center;
    line-height: 1em;
  }

  .outcome {
    flex: 1;
    color: rgb(117, 117, 119);
    line-height: 1em;
    text-align: center;
  }

  .income h4 {
    color: #99cc00;
    line-height: 1em;
  }

  .outcome h4 {
    color: red;
    line-height: 1em;
  }
</style>

<section class="balance">
  <legend>Saldo</legend>
  <h3>{formatter.format(30000)}</h3>
</section>
<hr />
<section class="cashflow">
  <span class="income">
    <legend>Entradas</legend>
    <h4>{formatter.format(45000)}</h4>
  </span>
  <span class="outcome">
    <legend>Saidas</legend>
    <h4>{formatter.format(55000)}</h4>
  </span>
</section>
<hr />
