<script>
  import FormInput from "../../components/FormInput.svelte";
  import Button from "../../components/Button.svelte";
  import * as utils from "../../utils.js";
  import { dispatchCommand } from "../../backend/";  
  import * as session from "../../services/Session.js";

  const initialDate = utils.localDate();
  const initialTime = utils.localTime();

  async function saveEntry() {
    const data = new FormData(this);

    let date = data.get("date");
    const time = data.get("time");
    date = new Date(`${date}T${time}`).getTime();
    const venue = data.get("venue");
    const amount = data.get("amount");
    const description = data.get("description");
    const timestamp = new Date().getTime()

    const entry = {
      date,
      venue,
      amount,
      description,
      timestamp
    };
    await dispatchCommand('saveEntry', entry)
    session.openEntriesView();
  }
</script>

<style>
  label {
    padding-bottom: 0.5em;
  }

  span {
    display: flex;
  }

  :global(.wide) {
    flex: 1;
  }
</style>

<form on:submit|preventDefault|once={saveEntry}>
  <label>
    Data:
    <span>
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
      <FormInput name="venue" class="wide" type="text" required list="locais" />
    </span>
  </label>

  <label>
    Montante:
    <span>
      <FormInput
        name="amount"
        class="wide"
        type="number"
        min="0"
        step="1.00"
        pattern="\d+(?[\.,]\d+)"
        required />
    </span>
  </label>

  <label>
    Descrição:
    <span>
      <FormInput name="description" class="wide" type="text" required />
    </span>
  </label>

  <Button type="submit">Enviar</Button>
</form>
