<script>
  import {FormInput, SvgIcon, Button} from "../../components/";
  import * as utils from "../../utils.js";
  import { dispatchCommand, query } from "../../backend";
  import * as session from "../../services/Session.js";

  const initialDate = utils.localDate();
  const initialTime = utils.localTime();

  async function saveEntry() {
    const data = new FormData(this);

    let date = data.get("date");
    const time = data.get("time");
    date = new Date(`${date}T${time}`);
    const venue = data.get("venue");
    const amount = parseFloat(data.get("amount"));
    const description = data.get("description");

    const entry = {
      date,
      venue,
      amount,
      description
    };
    await dispatchCommand("saveEntry", entry);
    session.openEntriesView();
  }

  let pendingVenues = query("venuesOrderByUsage");
</script>

<style>
  label {
    padding-bottom: 0.5em;
  }

  span {
    display: flex;    
  }

  :global(.icon) {
    padding: 0.3em;
  }

  :global(.wide) {
    flex: 1;
  }
</style>

<form on:submit|preventDefault|once={saveEntry} autocomplete="off">
  <label>
    Data:
    <span>
      <SvgIcon icon="calendar-check" class="icon"/>
      <FormInput
        name="date"
        class="wide"
        type="date"
        required
        value={initialDate} />
      <FormInput
        name="time"
        class="wide"
        type="time"
        required
        value={initialTime} />
    </span>
  </label>

  <label>
    Local:
    <span>
      <SvgIcon icon="current-location" class="icon"/>
      <FormInput
        name="venue"
        class="wide"
        type="text"
        required
        list="knownVenues"
        autocomplete="off" />
      {#await pendingVenues then venues}
        <datalist id="knownVenues">
          {#each venues as venue}
            <option value={venue.name} />
          {/each}
        </datalist>
      {/await}
    </span>
  </label>

  <label>
    Montante:
    <span>
      <SvgIcon icon="dolar-symbol" class="icon"/>
      <FormInput
        name="amount"
        class="wide"
        type="number"
        min="0"
        step="0.01"
        required />
    </span>
  </label>

  <label>
    Descrição:
    <span>
      <SvgIcon icon="description" class="icon"/>
      <FormInput name="description" class="wide" type="text" required />
    </span>
  </label>

  <Button type="submit">Enviar</Button>
</form>
