<script>
  import Button from "../../components/Button.svelte"  
  import * as session from '../../services/Session.js'

  function openEntriesView(){
    session.openEntriesView()
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
</style>

<header>
  <nav>
    <Button icon="chevron-left" on:click={openEntriesView}/>
    <h2>Novo Lançamento</h2>
  </nav>
</header>
