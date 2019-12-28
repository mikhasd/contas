/**
 * Represents a month of an year.
 * @typedef {{month:number, year:number}} Period
 */

/**
 * Reacts to a period change event.
 * @typedef {(period: Period)=>void} PeriodChangeEventListener
 * 
 * The collection of registered `PeriodChangeEventListener`s
 * @type {PeriodChangeEventListener[]}
 */
const LISTENERS = []

/**
 * Determines the current period based on the current date.
 * 
 * @returns {Period}
 */
function determineCurrentPeriod() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  return { month, year }
}

/**
 * The current period.
 * 
 * Default for todays period.
 * 
 * @type {Period}
 */
let currentPeriod = determineCurrentPeriod()

/**
 * Saves the given period and notify listeners.
 * 
 * @param {Period} period 
 */
function setCurrentPeriod(period) {
  currentPeriod = period
  for (let listener of LISTENERS) {
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
 * Change the session's period for the next one.
 * 
 * @returns {Period} The next period
 */
export function nextPeriod() {
  const current = currentPeriod
  let next
  if (current.month === 12) {
    next = {
      month: 1,
      year: current.year + 1
    }
  } else {
    next = {
      month: current.month + 1,
      year: current.year
    }
  }
  setCurrentPeriod(next)
  return next
}

/**
 * Change the session's period for the previous one.
 * 
 * @returns {Period} The previous period
 */
export function previousPeriod() {
  const current = currentPeriod
  let previous
  if (current.month === 1) {
    previous = {
      month: 12,
      year: current.year - 1
    }
  } else {
    previous = {
      month: current.month - 1,
      year: current.year
    }
  }
  setCurrentPeriod(previous)
  return previous
}

/**
 * Adds a listener for period change events.
 * 
 * @param {PeriodChangeEventListener} listener
 */
export function onPeriodChange(listener) {
  LISTENERS.push(listener)
}