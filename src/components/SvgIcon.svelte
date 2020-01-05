<script>
  const ICONS_GEOMETRY = new Map([
    ["menu", "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"],
    ["chevron-left", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
    ["chevron-right", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],
    [
      "calendar-check",
      "M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
    ],
    [
      "current-location",
      "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
    ],
    [
      "dolar-symbol",
      "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
    ],
    [
      "description",
      "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    ]
  ]);

  export let icon;

  const props = Object.fromEntries(Object.entries($$props).filter(([key, value])=>!['role', 'viewbox', 'icon'].includes(key)))

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

<svg role="presentation" viewbox="0 0 24 24" {...props}>
  <path d={geometry} />
</svg>
