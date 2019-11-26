import {default as onready} from './onready.js'

let currentStyleId = 0
/**
 * @type {StyleSheet}
 */
let sheet
/**
 * @type {{selector:string, body:string}[]}
 */
const pendingRules = []

/**
 * @param {string} selector 
 * @param {string} body 
 */
function insertRule(selector, body){
  if(sheet){
    sheet.insertRule(`${selector} { ${body} }`)
  } else {
    pendingRules.push({
      selector,
      body
    })
  }  
}

/**
 * @param {string} string
 * @returns {string}
 */
function toCssCase(string){
  return string.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`)
}

function buildBodyFromObject(object){
  return Object.entries(object)
    .filter(([name, value]) => name.charAt(0) !== '&')
    .map(([name, value]) => {
    name = toCssCase(name)
    return `${name}:${value}`;
  }).join(';')
}

/**
 * 
 * @param {string} selector 
 * @param {Object} body 
 */
function createAndAttachNestedRules(selector, body){
  Object.entries(body)
    .filter(([subSelector, body]) => subSelector.charAt(0) === '&')
    .forEach(([subSelector, body]) => {
      createAndAttachStyle(selector + subSelector.substring(1), body)
    })
}

/**
 * 
 * @param {[string, string|Object]} nameAndDefinition
 * @returns {string}
 */
function createAndAttachStyle(selector, body){
  if(typeof body === 'object'){
    const objectBody = body
    body = buildBodyFromObject(body)
    createAndAttachNestedRules(selector, objectBody)
  }

  if(body.length)
    insertRule(selector, body)  
}

export function createClass(styles){
  const styleClassMapper = {}
  for(let [style, body] of Object.entries(styles)){
    const className = `jss-${currentStyleId++}`
    createAndAttachStyle('.'+className, body)
    styleClassMapper[style] = className
  }
  return styleClassMapper
}

function doInstall(){
  if(sheet) {
    console.warn('You are probably trying to install JSS twice')
    return 
  }

  console.info('Installing JSS')
  const style = document.createElement('style')
  document.head.appendChild(style)
  sheet = style.sheet
  for(let rule of pendingRules){
    console.info('Inserting rule', rule.selector, rule.body)
    insertRule(rule.selector, rule.body)
  }
}

export function install(){
  onready(doInstall)
}