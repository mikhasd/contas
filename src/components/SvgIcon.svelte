<script>
  const ICONS_GEOMETRY = new Map([
    ["menu", "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"],
    ["chevron-left", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
    ["chevron-right", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]
  ]);

  export let icon;

  let geometry = ICONS_GEOMETRY.get(icon);
</script>

<style>
  svg {
    display: inline-block;
    margin: 0.125em;
    line-height: 1.375em;
    height: 1.375em;
    width: 1.375em;
    fill: currentColor;
  }
</style>

<svg role="presentation" viewBox="0 0 24 24">
  <path d={geometry} />
</svg>
