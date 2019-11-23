const ICONS_GEOMETRY = new Map([
  ['menu', 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'],
  ['chevron-left', 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'],
  ['chevron-right', 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'],
])


ICONS_GEOMETRY.forEach((geometry, name) => {
  customElements.define(`${name}-icon`, class extends HTMLElement {
    constructor(){
      super()
      const shadow = this.attachShadow({
         mode: 'open'
      })
       
      shadow.innerHTML = `<style>
        :host {
          font-size: 16px;
          display: inline-block;
          margin: 4px;
          line-height: 1em;
          height: 1em;
          width: 1em;
        }
        svg {
          fill: currentColor;        
        }
      </style>
      <svg role="presentation" viewbox="0 0 24 24">
        <path d="${geometry}" />
      </svg>`
    }
  })
})