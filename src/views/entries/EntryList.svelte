<script>
  import { query } from "../../backend";
  import * as session from "../../services/Session.js";

  let pendingEntries = query('entriesByPeriod',session.getCurrentPeriod());

  let entries = [];

  session.onPeriodChange(period => {
    pendingEntries = query('entriesByPeriod',period);
  });

  const formatter = new Intl.NumberFormat("default", {
    style: "currency",
    currency: "BRL"
  });

  const dateFormatter = new Intl.DateTimeFormat('default', {day: 'numeric'})
</script>

<style>
  ul {
    display: table;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    list-style: none;
  }

  li {
    display: flex;
    padding: 10px;
    background-color: rgb(43, 43, 48);
  }

  li:nth-child(even) {
    background-color: rgb(32, 32, 35);
  }

  li:hover {
    background-color: rgb(40, 58, 79);
  }

  li:focus,
  li:active {
    background-color: rgb(10, 132, 255);
  }

  .entryDate {
    padding: 0 1em 0 0.5em;
    font-weight: 900;
  }

  details {
    flex: 1;
  }

  summary {
    list-style: none;
    display: flex;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary span:first-child {
    flex: 1;
  }

  summary span:last-child {
    color: red;
  }
</style>

<ul>
  {#await pendingEntries then entries}
    {#each entries as entry}
      <li>
        <span class="entryDate">{entry.date.getDate()}</span>
        <details>
          <summary>
            <span>{entry.venue}</span>
            <span>{formatter.format(entry.amount)}</span>
          </summary>
          {entry.description}
        </details>
      </li>
    {/each}
  {/await}
</ul>
