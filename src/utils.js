const FORMATTER = new Intl.DateTimeFormat(navigator.language, { month: 'long' })
const MONTHS_NAMES = [1,2,3,4,5,6,7,8,9,10,11,12].map(
    n => FORMATTER.format(new Date(Date.UTC(1970, n, 1)))
  )
  .map(name => 
    name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase()
  )

/**
 * Returns the name of a month in the current locale got a given month number.
 * 
 * This function uses 1 based index, meaning that 1 = January and 12 = December.
 * 
 * @param {number} monthNumber The month number
 * @returns {string} The month name
 */
export function monthName(monthNumber){
  const name = MONTHS_NAMES[Math.max(monthNumber - 1, 0)]
  return name
}

/**
 * Add padding to the left of the string.
 * @param {any} input The object to be 'stringed' and padded
 * @param {string} chr The character to be added in the padding
 * @param {number} length The desired length
 * 
 * @returns {string}
 */
function padLeft(input, chr, length){
  let res = input.toString()
  while(res.length < length){
    res = chr + res
  }
  return res
}

/**
 * Returns the string representation of the current date in the clients locale.
 * @returns {string} The local date as a string
 */
export function localDate(){
  const now = new Date()
  const year = now.getFullYear()
  const month = padLeft(now.getMonth() + 1, '0', 2)
  const day = padLeft(now.getDate(), '0', 2)
  return `${year}-${month}-${day}`
}

/**
 * Returns the string representation of the current date in the clients locale.
 * 
 * @returns {string} The local time as a string
 */
export function localTime(){
  const now = new Date()
  const hours = padLeft(now.getHours(), '0', 2)
  const minutes = padLeft(now.getMinutes(), '0', 2)
  return `${hours}:${minutes}`
}