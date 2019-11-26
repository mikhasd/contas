import { createClass } from './jss.js'

const ICONS_GEOMETRY = new Map([
  ['menu', 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'],
  ['chevron-left', 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'],
  ['chevron-right', 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'],
])

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'

customElements.define('svg-icon', class SvgIconElement extends HTMLElement{
  constructor(){
    super()

    const path = document.createElementNS(SVG_NAMESPACE, 'path')
    const icon = this.getAttribute('icon')
    const geometry = ICONS_GEOMETRY.get(icon)
    path.setAttribute('d', geometry)

    const svg = document.createElementNS(SVG_NAMESPACE, 'svg')
    svg.setAttribute('role', 'presentation')
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.appendChild(path)
    this.appendChild(svg)

  }
})