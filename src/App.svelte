<script>
  import Header from "./Header.svelte"
  import Balances from "./Balances.svelte"
  import Entries from "./Entries.svelte"  
</script>

<style>
  main {
    padding-top: 6em;
  }
</style>

<Header />
<main>
  <Balances />
  <Entries />
</main>
