<script>
  import Button from "./components/Button.svelte";
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
    <Button icon="chevron-left" />
    <h2>Dezembro</h2>
    <Button icon="chevron-right" />
  </nav>
</header>
