<script>
  let entries = [
    {
      description: "Coto",
      value: 3000.00
    },
    {
      description: "Pedidos Ya",
      value: 500
    },
    {
      description: "Veterinario Maly",
      value: 2000
    },
    {
      description: "Voo São Paulo",
      value: 39000
    },
    {
      description: "Pizza Aeroporto",
      value: 500
    }
  ];

  const formatter = new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'})

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
          <span>{entry.description}</span>
          <span>{formatter.format(entry.value)}</span>
        </summary>
      </details>
    </li>
  {/each}
</ul>
