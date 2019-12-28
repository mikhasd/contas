<script>
  import * as entriesService from './services/Entries.js'
  import * as session from './services/Session.js'

  let entries = entriesService.getEntries(session.getCurrentPeriod())

  session.onPeriodChange(period => {
    entries = entriesService.getEntries(period)
  })

  const formatter = new Intl.NumberFormat('default', {style:'currency', currency: 'BRL'})

</script>

<style>
  ul {
    display: table;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    list-style: none;
  }

  ul li {
    padding: 10px;
    background-color: rgb(43, 43, 48);
  }

  ul li:nth-child(even) {
    background-color: rgb(32, 32, 35);
  }

  ul li:hover {
    background-color: rgb(40, 58, 79);
  }

  ul li:focus,
  ul li:active {
    background-color: rgb(10, 132, 255);
  }

  details summary {
    display: flex;
  }

  details > summary {
    list-style: none;
  }

  details > summary::-webkit-details-marker {
    display: none;
  }

  details summary span:first-child {
    flex: 1;
  }

  details summary span:last-child {
    color: red;
  }
</style>

<ul>
  {#each entries as entry}
    <li>
      <details>
        <summary>
          <span>{entry.title}</span>
          <span>{formatter.format(entry.amount)}</span>
        </summary>
        {entry.description}
      </details>
    </li>
  {/each}
</ul>
