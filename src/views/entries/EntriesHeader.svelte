<script>
  import { Button } from "../../components/";
  import { monthName } from "../../utils.js";
  import * as session from "../../services/Session.js";

  const CURERNT_YEAR = new Date().getFullYear();

  let period = session.getCurrentPeriod();

  function nextMonth() {
    period = period.next();
    session.setCurrentPeriod(period);
  }

  function previousMonth() {
    period = period.previous();
    session.setCurrentPeriod(period);
  }

  function openFormView() {
    session.openFormView();
  }
</script>

<style>
  header {
    background-color: rgb(50, 50, 52);
    border-bottom: 1px solid black;

    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
    position: fixed;
    top: 0;
  }

  nav {
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    min-height: 3em;
  }
  h2 {
    flex-grow: 1;
  }
</style>

<header>
  <nav>
    <Button icon="menu" />
    <h2>Lançamentos</h2>
    <Button on:click={openFormView}>NOVO</Button>
  </nav>

  <nav>
    <Button icon="chevron-left" on:click={previousMonth} />
    <h2>
      {monthName(period.month)}{CURERNT_YEAR !== period.year ? ` / ${period.year}` : ''}
    </h2>
    <Button icon="chevron-right" on:click={nextMonth} />
  </nav>
</header>
