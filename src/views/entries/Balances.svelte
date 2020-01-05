<script>
  import * as session from '../../services/Session.js'
  import * as accountService from '../../services/Account.js'
  import * as balanceService from '../../services/Balance.js'
  const account = accountService.getAccount()
  const formatter = new Intl.NumberFormat('pt-BR', {style:'currency', currency: account.currency})

  const period = session.getCurrentPeriod()

  let balance = balanceService.getBalance(period)

  session.onPeriodChange(newPeriod => {    
    balance = balanceService.getBalance(newPeriod)
  })

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
  <h3>{formatter.format(balance.balance)}</h3>
</section>
<hr />
<section class="cashflow">
  <span class="income">
    <legend>Entradas</legend>
    <h4>{formatter.format(balance.credits)}</h4>
  </span>
  <span class="outcome">
    <legend>Saidas</legend>
    <h4>{formatter.format(balance.debits)}</h4>
  </span>
</section>
<hr />
