<style>
  input {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1.5em;
    letter-spacing: 0.02857em;
    padding: 6px 8px;
    min-width: 64px;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: center;
    display: inline-flex;

    color: white;

    background-color: rgb(32, 32, 35);
    border: 2px solid rgb(76,76,78);
    border-radius: 4px;
  }

  input:hover {    
    border-color: rgb(97,97,99);
  }

  input:active {
    border-color: rgb(73, 73, 76);
    box-shadow: 0px 0px 4px rgb(32, 69, 109);
  }

  input:focus {
    border-color: rgb(10, 132, 255);
    box-shadow: 0px 0px 4px rgb(32, 69, 109);
  }
</style>

<input {...$$props}/>
