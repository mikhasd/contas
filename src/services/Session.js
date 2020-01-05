import Period from '../model/Period.js'

/**
 * Reacts to a period change event.
 * @typedef {(period: Period)=>void} PeriodChangeEventListener
 * 
 * The collection of registered `PeriodChangeEventListener`s
 * @type {PeriodChangeEventListener[]}
 */
const PERIOD_CHANGE_LISTENER = []

/**
 * The current period.
 * 
 * Default for todays period.
 * 
 * @type {Period}
 */
let currentPeriod = Period.current()

/**
 * Saves the given period and notify listeners.
 * 
 * @param {Period} period 
 */
export function setCurrentPeriod(period) {
  currentPeriod = period
  for (let listener of PERIOD_CHANGE_LISTENER) {
    listener(period)
  }
}

/**
 * Get the current period the user is working on.
 * 
 * @returns {Period}
 */
export function getCurrentPeriod() {
  return currentPeriod
}

/**
 * Adds a listener for period change events.
 * 
 * @param {PeriodChangeEventListener} listener
 */
export function onPeriodChange(listener) {
  PERIOD_CHANGE_LISTENER.push(listener)
}

/**
 * Reacts to view change events.
 * @typedef {(view: string)=>void} ViewChangeListener
 * 
 * The collection of registered `ViewChangeListener`s
 * @type {ViewChangeListener[]}
 */
const VIEW_CHANGE_LISTENER = []

export const ENTRIES_VIEW = 'ENTRIES'
export const FORM_VIEW = 'FORM'

let currentEntry = ENTRIES_VIEW

/**
 * Get the current view.
 * 
 * @returns {string}
 */
export function getCurrentView(){
  return currentEntry
}

/**
 * Register listener to view change events.
 * @param {ViewChangeListener} listener 
 */
export function onViewChange(listener){
  VIEW_CHANGE_LISTENER.push(listener)
}

export function openFormView(){  
  currentEntry = FORM_VIEW
  for(let listener of VIEW_CHANGE_LISTENER){
    listener(FORM_VIEW)
  }
}

export function openEntriesView(){  
  currentEntry = ENTRIES_VIEW
  for(let listener of VIEW_CHANGE_LISTENER){
    listener(ENTRIES_VIEW)
  }
}