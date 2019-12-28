<script>
  import Button from "./components/Button.svelte"
  import { monthName } from './utils.js'
  import * as session from "./services/Session.js"

  const CURERNT_YEAR = new Date().getFullYear()
  
  let period = session.getCurrentPeriod()

  function nextMonth(){
    period = session.nextPeriod()
  }

  function previousMonth(){    
    period = session.previousPeriod()
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
    padding-left: 1.5em;
    padding-right: 1.5em;
    min-height: 3em;
  }
  h2 {
    flex-grow: 1;
  }
</style>

<header>
  <nav>
    <Button icon="menu"/>
    <h2>Lançamentos</h2>
    <Button>NOVO</Button>
  </nav>

  <nav>
    <Button icon="chevron-left" on:click={previousMonth}/>
    <h2>{monthName(period.month)}{CURERNT_YEAR !== period.year ? ` / ${period.year}` : ''}</h2>
    <Button icon="chevron-right" on:click={nextMonth}/>
  </nav>
</header>
