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