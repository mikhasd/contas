<script>
  import * as session from "../../services/Session.js";
  import { query } from "../../backend";

  const ZERO_BALANCE = {
    total: 0,
    credits: 0,
    debits: 0
  };

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  let balance = ZERO_BALANCE;

  async function updateBalance(period) {
    balance = await query("balanceByPeriod", period);
    if (!balance) balance = ZERO_BALANCE;
  }

  updateBalance(session.getCurrentPeriod());

  session.onPeriodChange(updateBalance);
</script>

<style>
  legend {
    font-size: 0.8em;
    text-align: center;
    color: rgb(117, 117, 119);
  }

  h3,
  h4 {
    text-align: center;
    color: #99cc00;
  }

  .negative {
    color: red;
  }

  .cashflow {
    display: flex;
    text-align: center;
  }

  span {
    flex: 1;
  }

  legend {
    line-height: 1em;
  }
</style>

<section>
  <legend>Saldo</legend>
  <h3 class={balance.total < 0 ? 'negative' : ''}>
    {formatter.format(balance.total)}
  </h3>
</section>
<hr />
<section class="cashflow">
  <span>
    <legend>Entradas</legend>
    <h4>{formatter.format(balance.credits)}</h4>
  </span>
  <span>
    <legend>Saidas</legend>
    <h4 class="negative">{formatter.format(balance.debits)}</h4>
  </span>
</section>
<hr />
