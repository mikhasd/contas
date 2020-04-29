<script>
  import EntriesHeader from "./entries/EntriesHeader.svelte"
  import Balances from "./entries/Balances.svelte"
  import Entries from "./entries/EntryList.svelte"  
</script>

<style>
  main {
    padding-top: 6em;
  }
</style>

<EntriesHeader />
<main>
  <Balances />
  <Entries />
</main>
