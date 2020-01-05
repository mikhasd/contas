<script>
  import EntriesView from "./views/EntriesView.svelte"
  import FormView from "./views/FormView.svelte"
  import * as session from './services/Session.js'
  
  let view = session.getCurrentView()

  session.onViewChange(newView => view = newView)
</script>

{#if view === session.ENTRIES_VIEW}
  <EntriesView />
{/if}
{#if view === session.FORM_VIEW}
  <FormView />
{/if}