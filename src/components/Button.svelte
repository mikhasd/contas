<script>
  import SvgIcon from "./SvgIcon.svelte";
  export let icon = null
  export let iconPosition = 'left'
  export let type = 'button'
</script>
<style>
  button {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1.5em;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 6px 8px;
    min-width: 64px;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: center;
    display: inline-flex;

    color: white;

    background-color: rgb(50, 50, 52);
    border: 2px solid transparent;
    border-radius: 4px;
  }

  button:hover {
    background-color: rgb(73, 73, 76);
    border-color: rgb(73, 73, 76);
  }

  button:active {
    background-color: rgb(84, 84, 88);
    border-color: rgb(73, 73, 76);
    box-shadow: 0px 0px 4px rgb(32, 69, 109);
  }

  button:focus {
    border-color: rgb(10, 132, 255);
    box-shadow: 0px 0px 4px rgb(32, 69, 109);
  }

  .icon {
    padding: 6px;
    min-width: unset;
    border-radius: 2em;
  }
</style>
<button class:icon on:click {type}>
  {#if icon && iconPosition === 'left'}
    <SvgIcon {icon}/>
  {/if}
  <slot></slot>
  {#if icon && iconPosition === 'right'}
    <SvgIcon {icon}/>
  {/if}
</button>
