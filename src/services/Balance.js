/**
 * @typedef {import('./Session.js').Period} Period
 */

class Balance {
  constructor(period){    
    /** @type {Period} */
    this.period = period
    this.balance = 0
    this.credits = 0
    this.debits = 0
  }
}

/**
 * Gives the balance for a given period.
 * @param {Period} period The period to get the balance. 
 * @returns {Balance}
 */
export function getBalance(period){
  switch(period.month){
    case 12:
      return {
        period,
        balance: 30000,
        credits: 50000,
        debits: 20000
      }
    case 11:
      return {
        period,
        balance: 45956.11,
        credits: 44001.2,
        debits: 11000.99
      }
    case 10:
      return {
        period,
        balance: 120000.11,
        credits: 2342.2,
        debits: 88000.99
      }
    default:
      return {
        period,
        balance: 0,
        credits: 1,
        debits: 1
      }
  }
}